import * as OBC from "openbim-components";
import * as THREE from "three";


// basic scene
const viewerContainer = document.getElementById("container");
const components = new OBC.Components();
components.scene = new OBC.SimpleScene(components);
components.renderer = new OBC.PostproductionRenderer(components, viewerContainer);
components.camera = new OBC.SimpleCamera(components);
components.raycaster = new OBC.SimpleRaycaster(components);
components.init();

components.camera.controls.setLookAt(10, 10, 10, 0, 0, 0);

//const scene = components.scene.get();

components.scene.setup();

const grid = new OBC.SimpleGrid(components, new THREE.Color(0x666666));

components.renderer.postproduction.enabled = true;
components.renderer.postproduction.customEffects.excludedMeshes.push(grid.get());

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
const file = await fetch("../rsc/bridgeA.frag");
const data = await file.arrayBuffer();
const buffer = new Uint8Array(data);
const model = await fragments.load(buffer);
const properties = await fetch("../rsc/bridgeA.json");
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
await highlighter.add('default', [selectionMaterial]);

highlighter.setup();

/*----- ifc properties processor ------*/
const propsProcessor = new OBC.IfcPropertiesProcessor(components);
propsProcessor.uiElement.get('propertiesWindow').visible = true;
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
  let model
  for (const group of fragments.groups) {
    const fragmentFound = Object.values(group.keyFragments).find(id => id === fragmentID);
    if (fragmentFound) model = group;
  }

  propsProcessor.renderProperties(model, expressID);
})

// buttons
const overviewButton = new OBC.Button(components);
overviewButton.materialIcon = 'pageview'
overviewButton.tooltip = 'Overview'
mainToolbar.addChild(overviewButton);
overviewButton.onClick.add( async () => {
  const overviewPosition = Vector3({x: -122.0412338903638, y: 57.8573189393671, z: 49.465545453607156});
  
  // components.camera.controls.setLookAt(30,100,20,0,0,0,true);
  console.log(components.camera.controls.getPosition());
  console.log(components.camera.controls.getTarget());

});

const walkwayButton = new OBC.Button(components);
walkwayButton.materialIcon = 'directions_walk'
walkwayButton.tooltip = 'Walkway'
mainToolbar.addChild(walkwayButton);
walkwayButton.onClick.add( async () => {
  components.camera.controls.fitToBox( fragments.meshes, true);
});

const roadButton = new OBC.Button(components);
roadButton.materialIcon = 'directions_car'
roadButton.tooltip = 'Road'
mainToolbar.addChild(roadButton);
roadButton.onClick.add( async () => {

});

const transportButton = new OBC.Button(components);
transportButton.materialIcon = 'commute'
transportButton.tooltip = 'Public Transport'
mainToolbar.addChild(transportButton);
transportButton.onClick.add( async () => {

});

const structureButton = new OBC.Button(components);
structureButton.materialIcon = 'foundation'
structureButton.tooltip = 'Structure'
mainToolbar.addChild(structureButton);
structureButton.onClick.add( async () => {

});


const cacher = new OBC.FragmentCacher(components);
const cacherButton = cacher.uiElement.get("main");
mainToolbar.addChild(cacherButton);

