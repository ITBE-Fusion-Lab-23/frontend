import React, { useState, useEffect } from "react";
import "./comment.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  1: "Bad",

  2: "Poor",

  3: "Ok",

  4: "Good",

  5: "Excellent",
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const CommentModal = ({
  selectedComponent,
  closeModal,
  selectedGroup,
  setReviews,
}) => {
  const [hover, setHover] = useState(-1);
  const [comment, setComment] = useState("");
  const [stakeholder, setStakeholder] = useState("");
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [showRatingError, setShowRatingError] = useState(false); // New state for error message visibility

  const handleCancel = () => {
    closeModal(); // Close the modal after submitting
  };

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleStakeholderChange = (option) => {
    setStakeholder(option);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    submitComment();
  };

  useEffect(() => {
    if (rating !== 0) {
      setShowRatingError(false);
    }
  }, [rating]);

  const stakeholderOptions = [
    "Government and Planning Authority",
    "Local Resident",
    "Transportation Department",
    "Construction and Engineering Firm",
    "Environmental Group",
    "Financial and Investment Party",
    "Public Safety and Health Department",
    "Commuter",
    "Other",
  ];

  const submitComment = async () => {
    const commentData = {
      component: selectedComponent,
      comment: comment,
      rating: rating,
      stakeholder: stakeholder === "" ? null : stakeholder,
    };
    if (rating === 0) {
      console.log("No rating selected, showing error.");
      setShowRatingError(true); // Show error message if no rating is selected
      return; // Prevent further execution
    }

    try {
      // Replace with your actual API call, for example:
      // await axios.post('your-api-endpoint/comments', commentData);

      console.log("Submitting comment:", commentData);

      const response = await fetch(
        `http://localhost:3000/review/${selectedGroup}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentData),
        }
      );
      console.log("Form submitted");
      setReviews((prevReviews) => [
        ...prevReviews,
        { ...commentData, text: comment, groupId: selectedGroup, count: 0 },
      ]);
      closeModal();
      return response;
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className="comment-modal">
      <div className="modal-content">
        <h2>
          Comment on {selectedGroup}'s {selectedComponent}
        </h2>
        <form onSubmit={handleFormSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: "50px",
            }}
          >
            <Rating
              name="hover-feedback"
              value={rating}
              precision={1}
              size="large"
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />

            {rating !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
            )}
          </Box>

          {showRatingError && (
            <p className="rating-error">Please select a rating</p>
          )}

          <textarea
            value={comment}
            onChange={handleInputChange}
            placeholder="Please leave your comments"
            className="comment-input"
          />

          <div>
            <p className="stakeholder-label">
              What’s your type of stakeholders?
            </p>
            <div className="stakeholder-buttons">
              {stakeholderOptions.map((option, index) => (
                <React.Fragment key={option}>
                  <button
                    type="button"
                    className={`stakeholder-button ${
                      stakeholder === option ? "active" : ""
                    }`}
                    onClick={() => handleStakeholderChange(option)}
                  >
                    {option}
                  </button>
                  {/* Assuming you know how many buttons per row, add a divider */}
                  {(index + 1) % 4 === 0 && <div className="row-divider"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="cancel-button"
              onClick={handleCancel}
            >
              CANCEL
            </button>
            <button type="submit" className="submit-comment">
              CONFIRM
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;
