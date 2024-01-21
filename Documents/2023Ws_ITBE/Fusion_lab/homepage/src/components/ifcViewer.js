import * as OBC from "openbim-components";
import * as THREE from "three";
import React, { useRef, useEffect } from "react";

const IFCViewer = () => {
  const viewerContainerRef = useRef(null);

  useEffect(() => {
    const initializeViewer = async () => {
      if (viewerContainerRef.current && OBC && THREE) {
        const viewerContainer = viewerContainerRef.current;

        // basic scene
        const components = new OBC.Components();
        components.scene = new OBC.SimpleScene(components);
        components.renderer = new OBC.PostproductionRenderer(
          components,
          viewerContainer
        );
        components.camera = new OBC.SimpleCamera(components);
        components.raycaster = new OBC.SimpleRaycaster(components);
        components.init();

        components.camera.controls.setLookAt(10, 10, 10, 0, 0, 0);

        components.scene.setup();

        const grid = new OBC.SimpleGrid(components, new THREE.Color(0x666666));

        components.renderer.postproduction.enabled = true;
        components.renderer.postproduction.customEffects.excludedMeshes.push(
          grid.get()
        );

        /*------ Main Tool bar ------*/
        const mainToolbar = new OBC.Toolbar(components, {
          name: "Main Toolbar",
          position: "bottom",
        });
        components.ui.addToolbar(mainToolbar);

        /* ----- ifc load ----- */
        // fragments
        let fragments = new OBC.FragmentManager(components);
        let fragmentIfcLoader = new OBC.FragmentIfcLoader(components);

        // Setup IFCloader with WSAM (calibrating the converter)
        await fragmentIfcLoader.setup();
        fragmentIfcLoader.settings.wasm = {
          path: "https://unpkg.com/web-ifc@0.0.46/",
          absolute: true,
        };
        fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;
        fragmentIfcLoader.settings.webIfc.OPTIMIZE_PROFILES = true;

        //initial model
        const file = await fetch("/rsc/bridgeA_railing.frag");
        const data = await file.arrayBuffer();
        const buffer = new Uint8Array(data);
        const model = await fragments.load(buffer);
        const properties = await fetch("/rsc/bridgeA_railing.json");
        model.properties = await properties.json();

        /*------- Highlighter -------*/
        // highlighter config
        const highlighter = new OBC.FragmentHighlighter(components, fragments);
        components.renderer.postproduction.customEffects.outlineEnabled = true;
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
        const propsProcessor = new OBC.IfcPropertiesProcessor(components);
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
        const overviewButton = new OBC.Button(components);
        overviewButton.materialIcon = "pageview";
        overviewButton.tooltip = "Overview";
        mainToolbar.addChild(overviewButton);
        overviewButton.onClick.add(async () => {
          const cameraPosition = new THREE.Vector3(
            -122.0412338903638,
            57.8573189393671,
            49.465545453607156
          );
          const targetPosition = new THREE.Vector3(
            -13.240851261453342,
            0.404757580791614,
            -18.709093226707687
          );
          components.camera.controls.setLookAt(
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z,
            targetPosition.x,
            targetPosition.y,
            targetPosition.z,
            true
          );
        });

        const walkwayButton = new OBC.Button(components);
        walkwayButton.materialIcon = "directions_walk";
        walkwayButton.tooltip = "Walkway";
        mainToolbar.addChild(walkwayButton);
        walkwayButton.onClick.add(async () => {
          const cameraPosition = new THREE.Vector3(
            70.66063441091678,
            27.9171500559243,
            -42.483343537187594
          );
          const targetPosition = new THREE.Vector3(
            13.625892361665809,
            -17.3842911486277,
            -0.20029203008481855
          );
          components.camera.controls.setLookAt(
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z,
            targetPosition.x,
            targetPosition.y,
            targetPosition.z,
            true
          );
        });

        const roadButton = new OBC.Button(components);
        roadButton.materialIcon = "directions_car";
        roadButton.tooltip = "Road";
        mainToolbar.addChild(roadButton);
        roadButton.onClick.add(async () => {
          const cameraPosition = new THREE.Vector3(
            85.35935169226622,
            3.8167654975745497,
            8.928358989046695
          );
          const targetPosition = new THREE.Vector3(
            68.13399831264005,
            3.936250847778988,
            7.119236495104613
          );
          components.camera.controls.setLookAt(
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z,
            targetPosition.x,
            targetPosition.y,
            targetPosition.z,
            true
          );
        });

        const transportButton = new OBC.Button(components);
        transportButton.materialIcon = "commute";
        transportButton.tooltip = "Public Transport";
        mainToolbar.addChild(transportButton);
        transportButton.onClick.add(async () => {
          const cameraPosition = new THREE.Vector3(
            40.176256048468495,
            13.287121740897357,
            16.167758305784577
          );
          const targetPosition = new THREE.Vector3(
            18.208222932125157,
            -12.605163016367003,
            38.64692299307003
          );
          components.camera.controls.setLookAt(
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z,
            targetPosition.x,
            targetPosition.y,
            targetPosition.z,
            true
          );
        });

        const structureButton = new OBC.Button(components);
        structureButton.materialIcon = "foundation";
        structureButton.tooltip = "Structure";
        mainToolbar.addChild(structureButton);
        structureButton.onClick.add(async () => {
          const cameraPosition = new THREE.Vector3(
            5.704275323370304,
            6.378064692988604,
            -117.21276284851119
          );
          const targetPosition = new THREE.Vector3(
            -4.298034555300573,
            21.344108245137797,
            16.356933637103555
          );
          components.camera.controls.setLookAt(
            cameraPosition.x,
            cameraPosition.y,
            cameraPosition.z,
            targetPosition.x,
            targetPosition.y,
            targetPosition.z,
            true
          );

          //   console.log(components.camera.controls.getPosition());
          //   console.log(components.camera.controls.getTarget());
        });

        const cacher = new OBC.FragmentCacher(components);
        const cacherButton = cacher.uiElement.get("main");
        mainToolbar.addChild(cacherButton);

        return () => {
          //clean up code
        };
      }
    };

    initializeViewer();
  }, []);

  return <div ref={viewerContainerRef} className="viewer-container"></div>;
};

export default IFCViewer;
