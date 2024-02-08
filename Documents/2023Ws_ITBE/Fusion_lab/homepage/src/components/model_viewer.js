import React, { useState, useEffect } from "react";

import CommentModal from "./Comment";
import CommentList from "./CommentList";
import Overview from "./Overview";
import VotingComponent from "./VotingComponent";
import A from "../images/A.png";
import B from "../images/B.png";
import C from "../images/C.png";
import D from "../images/D.png";
import E from "../images/E.png";

import IFCViewer from "./ifcViewer.js";

import "./model_viewer.css";

function ModelViewer() {
  const [selectedComponent, setSelectedComponent] = useState("component"); // Set to 'Overrall' as the default
  const [reviews, setReviews] = useState([]); // Initialize reviews as an array
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("A");

  const componentsList = [
    "Overall",
    "Pedestrian Space",
    "Road",
    "Access to Public Transport",
    "Structure",
  ];

  const groupImages = {
    A: A,
    B: B,
    C: C,
    D: D,
    E: E,
  };

  const [groupedReviews, setGroupedReviews] = useState([]);

  // Fetch and set the comments for the selected component and group
  const fetchData = async () => {
    const result = await fetch(
      `http://10.181.89.55:3000/review/${selectedGroup}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    );
    const resp = await result.json();
    setGroupedReviews(
      resp.map((res) => {
        return {
          id: res._id,
          component: res.component,
          text: res.comment,
          groupId: res.modelGroupId.modelGroup,
          rating: res.rating,
          stakeholder: res.stakeholder,
          count: res.likes,
        };
      })
    );
    const newReviews =
      groupedReviews
        .filter((rev) => rev.component === selectedComponent)
        ?.filter((review) => review.groupId === selectedGroup) || [];
    setReviews(newReviews);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedComponent, selectedGroup]);

  const handleDropdownChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModelSelect = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div className="model-viewer">
      <div className="model-viewer-header">
        <h1>Model Viewer</h1>
      </div>
      <div className="model-display">
        <IFCViewer
          selectedComponent={selectedComponent}
          selectedGroup={selectedGroup}
        />
      </div>

      <div className="components-section">
        <p className="components-label">Components</p>
        <select
          value={selectedComponent}
          onChange={handleDropdownChange}
          className="component-dropdown"
        >
          <option selected disabled key="choose" value="component">
            Choose a component
          </option>
          {componentsList.map((component) => (
            <option key={component} value={component}>
              {component}
            </option>
          ))}
        </select>
        <button className="comment-button" onClick={openModal}>
          COMMENT
        </button>
      </div>

      {isModalOpen && (
        <CommentModal
          selectedComponent={selectedComponent}
          selectedGroup={selectedGroup}
          closeModal={closeModal}
          setReviews={setReviews}
        />
      )}

      <Overview reviews={reviews} selectedComponent={selectedComponent} />
      <CommentList
        selectedComponent={selectedComponent}
        reviews={reviews}
        setReviews={setReviews}
      />

      <section id="vote">
        {" "}
        <VotingComponent onModelSelect={handleModelSelect} />
      </section>
    </div>
  );
}

export default ModelViewer;
