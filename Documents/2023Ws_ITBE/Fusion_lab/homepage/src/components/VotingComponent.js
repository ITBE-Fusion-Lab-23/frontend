import React, { useState } from "react";
import "./VotingComponent.css";
import image_test from "../images/image_test.png";

const initData = [
  { id: "A", src: image_test, votes: 10 },
  { id: "B", src: image_test, votes: 20 },
  { id: "C", src: image_test, votes: 5 },
  { id: "D", src: image_test, votes: 15 },
  { id: "E", src: image_test, votes: 8 },
];

const fetchModelData = async () => {
  const response = await fetch("http://10.181.67.116:3000/modelGroup/", {
    method: "GET",
  });
  const resp = await response.json();
  const modelsData = initData.map((model) => {
    const filteredModel = resp.filter(
      (responseModel) => responseModel.modelGroup === model.id
    );
    return { ...model, votes: filteredModel[0].votes };
  });
  return modelsData;
};
const modelsData = await fetchModelData();
const voteModel = async (id) => {
  const response = await fetch(
    `http://10.181.67.116:3000/modelGroup/${id}/vote`,
    {
      method: "PUT",
    }
  );
  console.log(await response.json());
};

const VotingComponent = ({ onModelSelect }) => {
  const [models, setModels] = useState(modelsData);
  const maxVotesGroup = models.reduce(
    (prev, current) => (prev.votes > current.votes ? prev : current),
    models[0]
  );

  const selectModelGroup = (id) => {
    onModelSelect(id); // Call the prop function with the selected group id
    document
      .getElementById("model-viewer")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleVote = (id) => {
    const updatedModels = models.map((model) => {
      if (model.id === id) {
        return { ...model, votes: model.votes + 1 };
      }
      return model;
    });
    voteModel(id);
    setModels(updatedModels);
  };

  const maxVotes = Math.max(...models.map((group) => group.votes));

  const voteBars = models.map((group) => {
    const widthPercentage = maxVotes > 0 ? (group.votes / maxVotes) * 100 : 0;

    return (
      <div key={group.id} className="vote-bar">
        <span className="group-label">{group.id}</span>
        <div className="bar-container">
          <div
            className="bar"
            style={{
              width: `${widthPercentage}%`,
              backgroundColor: "#FFD700",
            }}
          ></div>
        </div>
        <span className="vote-count">{group.votes}</span>
      </div>
    );
  });

  return (
    <div className="voting-container">
      <h1>Vote</h1>
      <p>
        Here are the different renovation designs for the Donnersbergerbrücke,
        created by groups of students from ITBE. You can click the 'IFC model'
        button to view the detailed IFC models of each group. Then, vote for the
        design you like. You will be able to see the current number of votes for
        each group in real-time.
      </p>

      <div className="images-grid">
        {models.map((model) => (
          <div key={model.id} className="image-item">
            <img
              src={model.src}
              alt={`Rendering Image ${model.id}`}
              className="image"
            />
            <div className="vote-section">
              <button
                className="ifc-model-button"
                onClick={() => selectModelGroup(model.id)}
              >
                IFC MODEL
              </button>
              <button
                className="vote-button"
                onClick={() => handleVote(model.id)}
              >
                Vote
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="result-container">
        <h2>Result</h2>

        <div className="result-flex-container">
          <div className="chart-container">{voteBars}</div>

          <div className="temporatary-result">
            <span className="average-score">Current Winner</span>
            <span className="current-winner">Group: {maxVotesGroup.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingComponent;
