import React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Provider, LikeButton } from "@lyket/react";

const CommentsList = ({ groupName, comments }) => {
  return (
      <div className="comments-section">
        <h2>{groupName}</h2>
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <Rating
              name={`read-only-${index}`}
              value={comment.rating}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <p className="comment-text">{comment.text}</p>
            <p className="stakeholder-type">Stakeholder: {comment.stakeholder}</p>
            <LikeButton
              namespace="comments"
              id={`comment-like-${index}`} // Unique ID for each comment
              component={LikeButton.templates.Twitter}
            />
          </div>
        ))}
      </div>
);
};

export default CommentsList;