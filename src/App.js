import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Introduction from "./components/Introduction";
import ModelViewer from "./components/model_viewer";
import Video from "./components/Video";
import AboutUs from "./components/AboutUs";
import "./App.css";
import CityGMLViewer from "./components/CityGMLViewer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          index
          element={
            <>
              <section id="home">
                <Home />
              </section>
              <Video />
              <section id="introduction">
                <Introduction />
              </section>
              <section id="citygml-viewer">
                <CityGMLViewer />
              </section>
              <section id="model-viewer">
                <ModelViewer />
              </section>
            </>
          }
        />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
