import React, { useState } from 'react';
import './comment.css';

const CommentModal = ({ submitComment }) => {
  const [comment, setComment] = useState('');

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    submitComment(comment);
  };

  return (
    <div className="comment-modal">
      <div className="modal-content">
        <form onSubmit={handleFormSubmit}>
          <textarea
            value={comment}
            onChange={handleInputChange}
            placeholder="Write your comment here..."
            className="comment-input"
          />
          <button type="submit" className="submit-comment">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;