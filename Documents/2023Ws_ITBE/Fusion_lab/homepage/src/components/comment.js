import React, { useState } from 'react';
import './comment.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {

  1: 'Bad',

  2: 'Poor',

  3: 'Ok',

  4: 'Good',

  5: 'Excellent',
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}



const CommentModal = ({ selectedComponent, submitComment  }) => {

  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  const [comment, setComment] = useState('');
  const [stakeholder, setStakeholder] = useState('');

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleStakeholderChange = (option) => {
    setStakeholder(option);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    submitComment({ comment, rating: value, stakeholder });
  };
  const stakeholderOptions = [
    "Government and Planning Authorities",
    "Local Residents",
    "Transportation Departments",
    "Construction and Engineering Firms",
    "Environmental Groups",
    "Financial and Investment Parties",
    "Public Safety and Health Departments",
    "Commuter",
    "Other",
  ];



  return (
    <div className="comment-modal">
    <div className="modal-content">
      <h2>Comment on {selectedComponent}</h2> {/* Display the selected component */}
      <form onSubmit={handleFormSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column', // Stack children vertically
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '100%', 
              marginTop: '50px',
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={1}
              size="large"
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}

          </Box>



          <textarea
            value={comment}
            onChange={handleInputChange}
            placeholder="Please leave your comments"
            className="comment-input"
          />


          <div >
            <p className='stakeholder-label'>What’s your type of stakeholders?</p>
            <div className='stakeholder-buttons'>
              {stakeholderOptions.map((option, index) => (
                <React.Fragment key={option}>
                  <button
                    type="button"
                    className={`stakeholder-button ${stakeholder === option ? "active" : ""}`}
                    onClick={() => handleStakeholderChange(option)}
                  >
                    {option}
                  </button>
                  {/* Assuming you know how many buttons per row, add a divider */}
                  {((index + 1) % 4 === 0) && <div className="row-divider"></div>}
                </React.Fragment>
              ))}
            </div>

          </div>


          <div className="form-actions">
            <button type="button" className="cancel-button">CANCEL</button>
            <button type="submit" className="submit-comment">CONFIRM</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;