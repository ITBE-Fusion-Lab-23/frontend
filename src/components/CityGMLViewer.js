import React from "react";
import "./CityGMLViewer.css";
import cityGMLsample from "../images/cityGMLsample.jpeg";

const CityGMLViewer = () => {
  const externalLink =
    "http://10.162.246.145:8000/3dwebclient/?t=3DCityDB-Web-Map-Client&s=false&ts=0&la=48.145294&lo=11.528563&h=643.239&hd=124.36&p=-9.11&r=0.16&l_0=u%3Dhttp%3A%2F%2F10.162.246.145%3A8000%2Fdata%2FBridge%2Ftileset.json%26n%3DNew%20Bridge%26ld%3DCesium%203D%20Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3D%26ds%3DGoogleSheets%26tt%3DHorizontal%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&l_1=u%3Dhttps%3A%2F%2Fbvv3d21.bayernwolke.de%2F3d-data%2Flatest%2Flod23d%2Ftileset.json%26n%3DBuildings%26ld%3DCesium%203D%20Tiles%26lp%3D%26lc%3D%26gv%3D%26a%3Dtrue%26tdu%3Dhttps%3A%2F%2Fbsvr.gis.lrg.tum.de%2Fpostgrest%2Fgeomassendaten%26ds%3DPostgreSQL%26tt%3DVertical%26gc%3D%26il%3D%26al%3D%26ac%3D%26av%3D&l_2=u%3Dhttp%3A%2F%2F10.162.246.145%3A8000%2Fdata%2FLaneModel%2FLanes_collada_MasterJSON.json%26n%3DLane%20Model%26ld%3DCOLLADA%2FKML%2FglTF%26lp%3Dfalse%26lc%3Dfalse%26gv%3D2.0%26a%3Dtrue%26tdu%3Dhttp%3A%2F%2F10.162.246.145%3A5433%2Ffusionlab_lanemodel_view%26ds%3DPostgreSQL%26tt%3DHorizontal%26gc%3D%26il%3D0%26al%3D1.7976931348623157e10%26ac%3D50%26av%3D200&tr=name%3DDGM%26iconUrl%3D%26tooltip%3D%26url%3Dhttps%3A%2F%2Fbvv3d21.bayernwolke.de%2F3d-data%2Flatest%2Fterrain&sw=";

  return (
    <div className="citygml-viewer">
      <header className="viewer-header">CityGML Viewer</header>
      <a href={externalLink} target="_blank" rel="noopener noreferrer">
        <div className="viewer-content">
          <img src={cityGMLsample} alt="CityGML" className="viewer-content" />
        </div>
      </a>
      <a
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="viewer-button"
      >
        CITYGML
      </a>
    </div>
  );
};

export default CityGMLViewer;
