import React, { useState, useEffect } from "react";
import CommentModal from "./comment.js";
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
  const [selectedComponent, setSelectedComponent] = useState("Overview"); // Set to 'Overrall' as the default
  const [reviews, setReviews] = useState([]); // Initialize reviews as an array
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("A");

  const componentsList = [
    "Overall",
    "Pedestrain Space",
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

  const [groupedReviews] = useState({
    Road: [
      {
        component: "Road",
        text: "Good job!",
        rating: 5,
        count: 7,
        stakeholder: "Commuter",
        groupId: "A",
      },
      {
        component: "Road",
        text: "I like the design.",
        rating: 4,

        count: 7,
        stakeholder: "Local Residents",
        groupId: "A",
      },
      {
        component: "Road",
        text: "I like the design.",
        rating: 4,

        count: 7,
        stakeholder: "Local Residents",
        groupId: "A",
      },
      {
        component: "Road",
        text: "I like the design.",
        rating: 4,

        count: 7,
        stakeholder: "Local Residents",
        groupId: "A",
      },
      {
        component: "Road",
        text: "I like the design.",
        rating: 4,

        count: 7,
        stakeholder: "Local Residents",
        groupId: "A",
      },
      {
        component: "Road",
        text: "I like the design.",
        rating: 4,

        count: 7,
        stakeholder: "Local Residents",
        groupId: "A",
      },
      {
        component: "Road",
        text: "I like the design.",
        rating: 4,

        count: 7,
        stakeholder: "Local Residents",
        groupId: "A",
      },
      {
        component: "Road",
        text: "I like the design.",
        rating: 4,

        count: 7,
        stakeholder: "Local Residents",
        groupId: "A",
      },
    ],
    Structure: [
      {
        component: "Structure",
        text: "Too short.",
        rating: 3,

        count: 7,
        stakeholder: "Commuter",
        groupId: "A",
      },
      {
        component: "Structure",
        text: "I like the design.",
        rating: 5,

        count: 7,
        stakeholder: "Local Residents",
        groupId: "A",
      },
      {
        component: "Structure",
        text: "I like the design.",
        rating: 5,
        count: 7,
        stakeholder: "Local Residents",
        groupId: "A",
      },
      {
        component: "Structure",
        text: "I like the design.",
        rating: 5,

        count: 7,
        stakeholder: "Local Residents",
        groupId: "A",
      },
      {
        component: "Structure",
        text: "I like the design.",
        rating: 5,

        count: 7,
        stakeholder: "Local Residents",
      },
      {
        component: "Structure",
        text: "I like the design.",
        rating: 5,

        count: 7,
        stakeholder: "Local Residents",
        groupId: "A",
      },
      {
        component: "Structure",
        text: "I like the design.",
        rating: 5,

        count: 7,
        stakeholder: "Local Residents",
        groupId: "A",
      },
      {
        component: "Structure",
        text: "I like the design.",
        rating: 5,

        count: 7,
        stakeholder: "Local Residents",
        groupId: "B",
      },
      {
        component: "Structure",
        text: "I like the design.",
        rating: 5,

        count: 7,
        stakeholder: "Local Residents",
        groupId: "C",
      },
      {
        component: "Structure",
        text: "I like the design.",
        rating: 5,

        count: 7,
        stakeholder: "Local Residents",
        groupId: "D",
      },
    ],
  });

  useEffect(() => {
    // Fetch and set the comments for the selected component and group
    const newReviews =
      groupedReviews[selectedComponent]?.filter(
        (review) => review.groupId === selectedGroup
      ) || [];
    setReviews(newReviews);
  }, [selectedComponent, selectedGroup, groupedReviews]);

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
        <IFCViewer selectedComponent={selectedComponent} />
      </div>

      <div className="components-section">
        <p className="components-label">Components</p>
        <select
          value={selectedComponent}
          onChange={handleDropdownChange}
          className="component-dropdown"
        >
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
