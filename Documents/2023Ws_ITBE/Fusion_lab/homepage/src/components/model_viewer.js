import React, { useState ,useEffect} from 'react';
import CommentModal from './Comment';
import CommentList from './CommentList'; // Adjust the import path as needed
import Overview from './Overview'; // Adjust the import path as needed

import './model_viewer.css';

function ModelViewer() {
  const [selectedComponent, setSelectedComponent] = useState('Overrall'); // Set to 'Overrall' as the default
  const [comments, setComments] = useState([]); // Initialize comments as an array
  const [isModalOpen, setIsModalOpen] = useState(false);

  const componentsList = ['Overrall', 'Pedestrian Space', 'Road', 'Access to public transport', 'Structure'];

  const [groupedComments] = useState({
    "Road": [
      {
        component: "Road",
        text: 'Good job!',
        rating: 5,
        liked:false,
        count:7,
        stakeholder: 'Commuter'
      },
      {
        component: "Road",
        text: 'I like the design.',
        rating: 4,
        liked:false,
        count:7,
        stakeholder: 'Local Residents'
      },
      {
        component: "Road",
        text: 'I like the design.',
        rating: 4,
        liked:false,
        count:7,
        stakeholder: 'Local Residents'
      },{
        component: "Road",
        text: 'I like the design.',
        rating: 4,
        liked:false,
        count:7,
        stakeholder: 'Local Residents'
      },{
        component: "Road",
        text: 'I like the design.',
        rating: 4,
        liked:false,
        count:7,
        stakeholder: 'Local Residents'
      },{
        component: "Road",
        text: 'I like the design.',
        rating: 4,
        liked:false,
        count:7,
        stakeholder: 'Local Residents'
      },{
        component: "Road",
        text: 'I like the design.',
        rating: 4,
        liked:false,
        count:7,
        stakeholder: 'Local Residents'
      },{
        component: "Road",
        text: 'I like the design.',
        rating: 4,
        liked:false,
        count:7,
        stakeholder: 'Local Residents'
      },
    ],
    "Structure": [
      {
        component: "Structure",
        text: 'Too short.',
        rating: 3,
        liked:false,
        count:7,
        stakeholder: 'Commuter'
      },
      {
        component: "Structure",
        text: 'I like the design.',
        rating: 5,
        liked:false,
        count:7,
        stakeholder: 'Local Residents'
      },
      {
        component: "Structure",
        text: 'I like the design.',
        rating: 5,
        liked:false,
        count:7,
        stakeholder: 'Local Residents'
      },{
        component: "Structure",
        text: 'I like the design.',
        rating: 5,
        liked:false,
        count:7,
        stakeholder: 'Local Residents'
      },{
        component: "Structure",
        text: 'I like the design.',
        rating: 5,
        liked:false,
        count:7,
        stakeholder: 'Local Residents'
      },{
        component: "Structure",
        text: 'I like the design.',
        rating: 5,
        liked:false,
        count:7,
        stakeholder: 'Local Residents'
      },{
        component: "Structure",
        text: 'I like the design.',
        rating: 5,
        liked:false,
        count:7,
        stakeholder: 'Local Residents'
      }
    ],
    // Add more components and comments as needed
  });

  useEffect(() => {
    // Update comments based on the selected component
    setComments(groupedComments[selectedComponent] || []);
  }, [selectedComponent, groupedComments]);


 /*useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('your-api-endpoint/comments');
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);*/




  const handleDropdownChange = (event) => {
    setSelectedComponent(event.target.value);
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          {componentsList.map((component) => (
            <option key={component} value={component}>{component}</option>
          ))}
        </select>
        <button className="comment-button" onClick={openModal}>COMMENT</button>
      </div>

      {isModalOpen &&( <CommentModal selectedComponent={selectedComponent} closeModal={closeModal} />)}   


<Overview comments={comments}/>
      {/* Render the CommentsList component with the selected component and comments */}
      <CommentList selectedComponent={selectedComponent} comments={comments}  setComments={setComments}/>
    </div>
  );
}

export default ModelViewer;
