import * as OBC from "openbim-components";
import * as THREE from "three";
import * as dat from "three/examples/jsm/libs/lil-gui.module.min";

// basic scene
const viewerContainer = document.getElementById("container");
const components = new OBC.Components();
components.scene = new OBC.SimpleScene(components);
components.renderer = new OBC.PostproductionRenderer(components, viewerContainer);
components.camera = new OBC.SimpleCamera(components);
components.raycaster = new OBC.SimpleRaycaster(components);
components.init();

components.camera.controls.setLookAt(10, 10, 10, 0, 0, 0);

const scene = components.scene.get();

components.scene.setup();

const grid = new OBC.SimpleGrid(components, new THREE.Color(0x666666));

components.renderer.postproduction.enabled = true;
components.renderer.postproduction.customEffects.excludedMeshes.push(grid.get());

/*------ Buttons ------*/
const mainToolbar = new OBC.Toolbar(components, {
  name: "Main Toolbar",
  position: "bottom",
});
components.ui.addToolbar(mainToolbar);

const defaultViewButton = new OBC.Button(components);
defaultViewButton.materialIcon = 'center_focus_weak';
defaultViewButton.tooltip = 'Default view';
mainToolbar.addChild(defaultViewButton);
defaultViewButton.onClick.add(() => {
  //console.log(components.camera.controls.camera.position)
  components.camera.controls.setLookAt(-23.30179587993465, 20.269000992198567, 30, 0, 0, 0);
  highlighter.clear();
})

const walkwayButton = new OBC.Button(components);
walkwayButton.materialIcon = 'directions_walk';
walkwayButton.tooltip = 'Walkway';
mainToolbar.addChild(walkwayButton);
walkwayButton.onClick.add(() => {

})

const roadButton = new OBC.Button(components);
roadButton.materialIcon = 'directions_car';
roadButton.tooltip = 'Road';
mainToolbar.addChild(roadButton);
roadButton.onClick.add(() => {

})

const ptransButton = new OBC.Button(components);
ptransButton.materialIcon = 'commute'
ptransButton.tooltip = "Public transport"
mainToolbar.addChild(ptransButton);
ptransButton.onClick.add(() => {

})

const structureButton = new OBC.Button(components);
structureButton.materialIcon = 'foundation';
structureButton.tooltip = 'Structure';
mainToolbar.addChild(structureButton);
structureButton.onClick.add(() => {

}) 


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

// import IFC model and convert to fragment
const file = await fetch("../rsc/sampleIFC.ifc");
const data = await file.arrayBuffer();
const buffer = new Uint8Array(data);
const model = await fragmentIfcLoader.load(buffer, "Sample IFC");
scene.add(model);

/*----- ifc properties processor ------*/
const propsProcessor = new OBC.IfcPropertiesProcessor(components);
propsProcessor.uiElement.get('propertiesWindow').visible = true;
propsProcessor.process(model);


/*------- Highlighter -------*/
// highlighter config
const highlighter = new OBC.FragmentHighlighter(components, fragments);
highlighter.setup();
components.renderer.postproduction.customEffects.outlineEnabled = true;
highlighter.outlinesEnabled = true;
highlighter.zoomToSelection = true; //zoom function

// select event
const highlighterEvents = highlighter.events;
highlighterEvents.select.onClear.add(() => {
  propsProcessor.cleanPropertiesList();
  
});

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
