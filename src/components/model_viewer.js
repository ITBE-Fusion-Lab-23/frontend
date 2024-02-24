import React, { useState, useEffect } from "react";

import CommentModal from "./Comment";
import CommentList from "./CommentList";
import Overview from "./Overview";
import VotingComponent from "./VotingComponent";

import IFCViewer from "./ifcViewer.js";

import "./model_viewer.css";
import { fetchReviews } from "../helperFunc.js";

const componentsList = [
  "Overall",
  "Pedestrian Space",
  "Road",
  "Access to Public Transport",
  "Structure",
];

function ModelViewer() {
  const [selectedComponent, setSelectedComponent] = useState("component"); // Set to 'Overrall' as the default
  const [reviews, setReviews] = useState([]); // Initialize reviews as an array
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("A");
  const [showSelectComponentWarning, setShowSelectComponentWarning] = useState(false);
  const [groupedReviews, setGroupedReviews] = useState([]);

  // Fetch and set the comments for the selected component and group
  const fetchData = async () => {
    const fetchedReviews = await fetchReviews(selectedGroup);
    setGroupedReviews(fetchedReviews);
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
    setShowSelectComponentWarning(false);
  };

  const openModal = () => {
    if (selectedComponent !== "component") {
      setIsModalOpen(true);
    } else {
      setShowSelectComponentWarning(true);
    }
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
        <IFCViewer selectedComponent={selectedComponent} selectedGroup={selectedGroup} />
      </div>

      <div className="components-section">
        <p className="components-label">Components</p>
        <select
          value={selectedComponent}
          onChange={handleDropdownChange}
          className="component-dropdown"
        >
          <option disabled key="choose" value="component">
            Choose a component
          </option>
          {componentsList.map((component) => (
            <option key={component} value={component}>
              {component}
            </option>
          ))}
        </select>
        {showSelectComponentWarning && <p className="warning-text">Select a component first!</p>}
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
