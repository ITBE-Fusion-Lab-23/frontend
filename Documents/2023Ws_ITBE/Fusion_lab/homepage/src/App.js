
import './App.css';
import './index.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Introduction from './components/Introduction'
import ModelViewer from './components/model_viewer'
import CommentList from './components/CommentList'
import React, { useState } from 'react';




function App() {
  const [groupedComments] = useState({
    "Arches": [
      {
        text: 'Good job!',
        rating: 5,
        stakeholder: 'Commuter'
      },
      {
        text: 'I like the design.',
        rating: 4,
        stakeholder: 'Local Residents'
      },
    ],
    "Walkways": [
      {
        text: 'Too short.',
        rating: 3,
        stakeholder: 'Commuter'
      },
      {
        text: 'I like the design.',
        rating: 5,
        stakeholder: 'Local Residents'
      },
    ],
    // Add more components and comments as needed
  });

  return (
    <div className="App">
      <Navbar  /> 
      <Home/>
      <Introduction/>
      <ModelViewer/>
      <div>
      {Object.entries(groupedComments).map(([componentName, comments]) => (
<CommentList key={componentName} groupName={componentName} comments={comments} />
))}
</div>


      
      <Footer/>


    </div>
  );

}

export default App;