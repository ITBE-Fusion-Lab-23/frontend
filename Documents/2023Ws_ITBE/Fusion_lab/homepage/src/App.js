import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Introduction from "./components/Introduction";
import ModelViewer from "./components/model_viewer";
import Video from "./components/Video";
import CityGMLViewer from "./components/CityGMLViewer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Video />
      <section id="home">
        <Home />
      </section>
      <section id="introduction">
        <Introduction />
      </section>
      <section id="citygml-viewer">
        <CityGMLViewer />
      </section>
      <section id="model-viewer">
        <ModelViewer />
      </section>

      <Footer id="footer" />
    </div>
  );
}

export default App;
