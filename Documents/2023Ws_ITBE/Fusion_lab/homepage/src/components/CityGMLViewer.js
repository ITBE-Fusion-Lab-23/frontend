import React from "react";
import "./CityGMLViewer.css";

function CityGMLViewer() {
  return (
    <div className="citygml-container">
      <iframe
        className="responsive-iframe"
        src="http://10.162.246.145:8000/3dwebclient/?t=3DCityDB-Web-Map-Client&s=true&ts=0&la=48.140495&lo=11.530858&h=636.491&hd=48.87&p=-14.61&r=0.15&l_0=u%3Dhttp%253A%252F%252F10.162.246.145%253A8000%252Fdata%252FNewBridge%252FNewBridge_collada_MasterJSON.json%26n%3DNew%2520Bridge%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttp%253A%252F%252F10.162.246.145%253A5433%252Ffusionlab_bridge%26ds%3DPostgreSQL%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_1=u%3Dhttp%253A%252F%252F10.162.246.145%253A8000%252Fdata%252FLaneModel%252FLaneModel_collada_MasterJSON.json%26n%3DLane%2520Model%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dfalse%26tdu%3Dhttp%253A%252F%252F10.162.246.145%253A5433%252Ffusionlab_lanemodel_view%26ds%3DPostgreSQL%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_2=u%3Dhttp%253A%252F%252F10.162.246.145%253A8000%252Fdata%252FExistingBridge%252FExistingBridge_collada_MasterJSON.json%26n%3DExisting%2520Bridge%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dfalse%26tdu%3Dhttp%253A%252F%252F10.162.246.145%253A5433%252Ffusionlab_building_view%26ds%3DPostgreSQL%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&l_3=u%3Dhttp%253A%252F%252F10.162.246.145%253A8000%252Fdata%252FBuildings%252FBuildings_collada_MasterJSON.json%26n%3DBuildings%26ld%3DCOLLADA%252FKML%252FglTF%26lp%3Dfalse%26lc%3Dtrue%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttp%253A%252F%252F10.162.246.145%253A5433%252Ffusionlab_building_view%26ds%3DPostgreSQL%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e%252B308%26ac%3D200%26av%3D200&tr=name%3DDTM%26iconUrl%3D%26tooltip%3D%26url%3Dhttps%253A%252F%252Fbvv3d21.bayernwolke.de%252F3d-data%252Flatest%252Fterrain%252F"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default CityGMLViewer;
