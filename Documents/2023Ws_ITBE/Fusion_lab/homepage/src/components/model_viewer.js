import React, { useState } from 'react';
import CommentModal from './Comment';
import './model_viewer.css';

function ModelViewer() {
  
  const [selectedComponent, setSelectedComponent] = useState('');
  const [comments, setComments] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const componentsList = ['Overrall', 'Pedestrain Space', 'Road','Acess to public transport','Structure'];

  const handleDropdownChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  const submitComment = (comment) => {
    setComments({ ...comments, [selectedComponent]: comment });
    setIsModalOpen(false);
  };

  const handleCommentClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="model-viewer">
      <div className="model-viewer-header">
        <h1>Model Viewer</h1>
        
      </div>

      <div className="model-display">
        {selectedComponent ? selectedComponent : 'New IFC Modeling'}
      </div>

      <div className="components-section">
        <p className="components-label">Components</p>
        <select 
          value={selectedComponent} 
          onChange={handleDropdownChange}
          className="component-dropdown"
        >
          <option value="">Select Components</option>
          {componentsList.map((component) => (
            <option key={component} value={component}>{component}</option>
          ))}
        </select>
        <button className="comment-button" onClick={handleCommentClick}>COMMENT</button>
      </div>


      

{isModalOpen && (
  <CommentModal
    selectedComponent={selectedComponent}
    submitComment={submitComment}
  />
)}
    </div>
  );
};

export default ModelViewer
