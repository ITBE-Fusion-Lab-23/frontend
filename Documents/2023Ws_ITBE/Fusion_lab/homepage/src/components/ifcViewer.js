import * as OBC from "openbim-components";
import * as THREE from "three";
import React, { useState, useRef, useEffect } from "react";

const CAMERA_CONFIG = {
  Overall: {
    cameraPosition: new THREE.Vector3(
      -122.0412338903638,
      57.8573189393671,
      49.465545453607156
    ),
    targetPosition: new THREE.Vector3(
      -13.240851261453342,
      0.404757580791614,
      -18.709093226707687
    ),
  },

  "Pedestrian Space": {
    cameraPosition: new THREE.Vector3(
      70.66063441091678,
      27.9171500559243,
      -42.483343537187594
    ),
    targetPosition: new THREE.Vector3(
      13.625892361665809,
      -17.3842911486277,
      -0.20029203008481855
    ),
  },

  Road: {
    cameraPosition: new THREE.Vector3(
      85.35935169226622,
      3.8167654975745497,
      8.928358989046695
    ),
    targetPosition: new THREE.Vector3(
      68.13399831264005,
      3.936250847778988,
      7.119236495104613
    ),
  },

  "Access to Public Transport": {
    cameraPosition: new THREE.Vector3(
      40.176256048468495,
      13.287121740897357,
      16.167758305784577
    ),
    targetPosition: new THREE.Vector3(
      18.208222932125157,
      -12.605163016367003,
      38.64692299307003
    ),
  },

  Structure: {
    cameraPosition: new THREE.Vector3(
      5.704275323370304,
      6.378064692988604,
      -117.21276284851119
    ),
    targetPosition: new THREE.Vector3(
      -4.298034555300573,
      21.344108245137797,
      16.356933637103555
    ),
  },
};

const IFCViewer = ({ selectedComponent, selectedGroup }) => {
  const viewerContainerRef = useRef(null);
  const components = useRef(null);
  const [viewerInitialized, setViewerInitialized] = useState(false); // 뷰어 초기화 상태 관리

  // set ifc Model Paths
  const ifcModelPaths = {
    A: "/rsc/sampleIFC",
    B: "/rsc/sampleIFC",
    C: "/rsc/sampleIFC",
    D: "/rsc/sampleIFC",
    E: "/rsc/sampleIFC",
  };

  // set camera function
  const setCameraPosition = (componentName) => {
    const config = CAMERA_CONFIG[componentName];
    if (config && components.current && components.current.camera) {
      components.current.camera.controls.setLookAt(
        config.cameraPosition.x,
        config.cameraPosition.y,
        config.cameraPosition.z,
        config.targetPosition.x,
        config.targetPosition.y,
        config.targetPosition.z,
        true
      );
    }
  };

  useEffect(() => {
    // initial ifcViewer Function
    const initializeViewer = async () => {
      if (viewerContainerRef.current && OBC && THREE) {
        const viewerContainer = viewerContainerRef.current;

        // basic scene
        components.current = new OBC.Components();
        components.current.scene = new OBC.SimpleScene(components.current);
        components.current.renderer = new OBC.PostproductionRenderer(
          components.current,
          viewerContainer
        );
        components.current.camera = new OBC.SimpleCamera(components.current);
        components.current.raycaster = new OBC.SimpleRaycaster(
          components.current
        );
        components.current.init();
        components.current.camera.controls.setLookAt(10, 10, 10, 0, 0, 0);
        components.current.scene.setup();
        const grid = new OBC.SimpleGrid(
          components.current,
          new THREE.Color(0x666666)
        );
        components.current.renderer.postproduction.enabled = true;
        components.current.renderer.postproduction.customEffects.excludedMeshes.push(
          grid.get()
        );

        /*------ Main Tool bar ------*/
        const mainToolbar = new OBC.Toolbar(components.current, {
          name: "Main Toolbar",
          position: "bottom",
        });
        components.current.ui.addToolbar(mainToolbar);

        /* ----- ifc load ----- */
        // fragments
        let fragments = new OBC.FragmentManager(components.current);
        let fragmentIfcLoader = new OBC.FragmentIfcLoader(components.current);

        // Setup IFCloader with WSAM (calibrating the converter)
        await fragmentIfcLoader.setup();
        fragmentIfcLoader.settings.wasm = {
          path: "https://unpkg.com/web-ifc@0.0.46/",
          absolute: true,
        };
        fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;
        fragmentIfcLoader.settings.webIfc.OPTIMIZE_PROFILES = true;

        //initial model
        let file = await fetch("/rsc/bridgeA_railing.frag");
        let data = await file.arrayBuffer();
        let buffer = new Uint8Array(data);
        let model = await fragments.load(buffer);
        let properties = await fetch("/rsc/bridgeA_railing.json");
        model.properties = await properties.json();

        /*------- Highlighter -------*/
        // highlighter config
        let highlighter = new OBC.FragmentHighlighter(
          components.current,
          fragments
        );
        components.current.renderer.postproduction.customEffects.outlineEnabled = true;
        highlighter.outlinesEnabled = true;
        highlighter.zoomToSelection = true;

        // default material
        const selectionMaterial = new THREE.MeshBasicMaterial({
          color: "#BCF124",
          transparent: true,
          opacity: 0.85,
          depthTest: true,
        });
        await highlighter.add("default", [selectionMaterial]);

        highlighter.setup();

        /*----- ifc properties processor ------*/
        let propsProcessor = new OBC.IfcPropertiesProcessor(components.current);
        propsProcessor.uiElement.get("propertiesWindow").visible = true;
        propsProcessor.process(model);

        // add cleanPropertieslist function to highlighter onClear handler
        const highlighterEvents = highlighter.events;
        highlighterEvents.select.onClear.add(() => {
          propsProcessor.cleanPropertiesList();
        });

        // add renderProperties function to onHighlight handler
        highlighterEvents.select.onHighlight.add((selection) => {
          const fragmentID = Object.keys(selection)[0];
          const expressID = Number([...selection[fragmentID]][0]);
          let model;
          for (const group of fragments.groups) {
            const fragmentFound = Object.values(group.keyFragments).find(
              (id) => id === fragmentID
            );
            if (fragmentFound) model = group;
          }

          propsProcessor.renderProperties(model, expressID);
        });

        // buttons
        const overviewButton = new OBC.Button(components.current);
        overviewButton.materialIcon = "pageview";
        overviewButton.tooltip = "Overview";
        mainToolbar.addChild(overviewButton);
        overviewButton.onClick.add(async () => {
          setCameraPosition("Overall");
        });

        const walkwayButton = new OBC.Button(components.current);
        walkwayButton.materialIcon = "directions_walk";
        walkwayButton.tooltip = "Walkway";
        mainToolbar.addChild(walkwayButton);
        walkwayButton.onClick.add(async () => {
          setCameraPosition("Pedestrian Space");
        });

        const roadButton = new OBC.Button(components.current);
        roadButton.materialIcon = "directions_car";
        roadButton.tooltip = "Road";
        mainToolbar.addChild(roadButton);
        roadButton.onClick.add(async () => {
          setCameraPosition("Road");
        });

        const transportButton = new OBC.Button(components.current);
        transportButton.materialIcon = "commute";
        transportButton.tooltip = "Public Transport";
        mainToolbar.addChild(transportButton);
        transportButton.onClick.add(async () => {
          setCameraPosition("Access to Public Transport");
        });

        const structureButton = new OBC.Button(components.current);
        structureButton.materialIcon = "foundation";
        structureButton.tooltip = "Structure";
        mainToolbar.addChild(structureButton);
        structureButton.onClick.add(async () => {
          setCameraPosition("Structure");
        });

        const disposeButton = new OBC.Button(components.current);
        disposeButton.materialIcon = "foundation";
        disposeButton.tooltip = "dipose";
        mainToolbar.addChild(disposeButton);
        disposeButton.onClick.add(async () => {
          fragments.dispose();
          propsProcessor.cleanPropertiesList();
        });

        const gbButton = new OBC.Button(components.current);
        gbButton.materialIcon = "foundation";
        gbButton.tooltip = "updateGroupB";
        mainToolbar.addChild(gbButton);
        gbButton.onClick.add(async () => {
          file = await fetch("/rsc/sampleIFC.frag");
          data = await file.arrayBuffer();
          buffer = new Uint8Array(data);
          model = await fragments.load(buffer);

          // Load .json properties file
          properties = await fetch("/rsc/sampleIFC.json");
          model.properties = await properties.json();

          // Update highlighter and properties processor for the new model
          highlighter.update();
          propsProcessor.process(model);
        });

        // function disposeFragments() {

        // }

        // const cacher = new OBC.FragmentCacher(components.current);
        // const cacherButton = cacher.uiElement.get("main");
        // mainToolbar.addChild(cacherButton);

        setViewerInitialized(true);

        return () => {
          //clean up code
        };
      }
    };

    if (!viewerInitialized) {
      initializeViewer();
    }
  }, []);

  // useEffect(() => {
  //   // Function to load and display a new IFC model
  //   const loadIFCModel = async (modelPath) => {
  //     if (!viewerInitialized || !components.current) return;

  //     try {
  //       const { fragments, highlighter, propsProcessor } = components.current;

  //       // Dispose existing model and clean properties
  //       fragments.dispose();
  //       console.log("fagments is disposed");
  //       // propsProcessor.cleanPropertiesList();

  //       // Load .frag model file
  //       const fragResponse = await fetch(`${modelPath}.frag`);
  //       const fragData = await fragResponse.arrayBuffer();
  //       const model = await fragments.load(new Uint8Array(fragData));

  //       // Load .json properties file
  //       const propsResponse = await fetch(`${modelPath}.json`);
  //       const propsData = await propsResponse.json();
  //       model.properties = propsData; // Assuming 'model.properties' can be directly set like this

  //       // Update highlighter and properties processor for the new model
  //       highlighter.update();
  //       propsProcessor.process(model);
  //     } catch (error) {
  //       console.error("Error loading IFC model or properties:", error);
  //     }
  //   };

  //   // Load a new IFC model when selectedGroup changes
  //   if (viewerInitialized && selectedGroup && ifcModelPaths[selectedGroup]) {
  //     loadIFCModel(ifcModelPaths[selectedGroup]);
  //   }
  // }, [selectedGroup, viewerInitialized]);

  /* --- Component button triggers ---*/
  const handleOverviewClick = () => {
    setCameraPosition("Overall");
  };

  const handleWalkwayClick = () => {
    setCameraPosition("Pedestrian Space");
  };

  const handleRoadClick = () => {
    setCameraPosition("Road");
  };

  const handleTransportClick = () => {
    setCameraPosition("Access to Public Transport");
  };

  const handleStructureClick = () => {
    setCameraPosition("Structure");
  };

  useEffect(() => {
    switch (selectedComponent) {
      case "Overall":
        if (components.current) {
          handleOverviewClick();
          console.log("overview postiion is called");
        }
        break;
      case "Pedestrain Space":
        if (components.current) {
          handleWalkwayClick();
          console.log("walkway postiion is called");
        }
        break;
      case "Road":
        if (components.current) {
          handleRoadClick();
          console.log("road postiion is called");
        }
        break;
      case "Access to Public Transport":
        if (components.current) {
          handleTransportClick();
          console.log("transport postiion is called");
        }
        break;
      case "Structure":
        if (components.current) {
          handleStructureClick();
          console.log("structure postiion is called");
        }
        break;
      default:
        break;
    }
  }, [selectedComponent]);

  return <div ref={viewerContainerRef} className="viewer-container"></div>;
};

export default IFCViewer;
