import React, { useState ,useEffect} from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './comment_list.css';

const CommentList = ({ selectedComponent, comments ,setComments}) => {
  const [likes, setLikes] = useState([]);

  // Update likes state whenever comments change
  useEffect(() => {
    setLikes(comments.map(comment => ({
      liked: comment.liked || false,
      count: comment.count || 0,
    })));
  }, [comments]);

  const toggleLike = (index) => {
    if (index >= 0 && index < likes.length) {
      const newLikes = [...likes];
      newLikes[index] = {
        liked: !newLikes[index].liked,
        count: newLikes[index].liked ? newLikes[index].count - 1 : newLikes[index].count + 1
      };
      setLikes(newLikes);
    }
  };



  /*const toggleLike = async (index) => {
    if (index >= 0 && index < comments.length) {
      const updatedComments = [...comments];
      const comment = updatedComments[index];
      const updatedLikeStatus = !comment.liked;
      const updatedCount = updatedLikeStatus ? comment.count + 1 : comment.count - 1;

      try {
        // API call to update the like status and count
        await fetch(`your-api-endpoint/comments/${comment.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ liked: updatedLikeStatus, count: updatedCount }),
        });

        // Update local state
        updatedComments[index] = { ...comment, liked: updatedLikeStatus, count: updatedCount };
        setComments(updatedComments);
      } catch (error) {
        console.error('Error updating like:', error);
      }
    }
  };*/

  const [visibleComments, setVisibleComments] = useState(5); // Start with 5 visible comments
  const showMoreComments = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 5); // Show 5 more comments
  };

  // Filter comments based on the selected component
  const filteredComments = comments.filter((comment) => comment.component === selectedComponent);

  return (
    <div className="comments-section">
      {filteredComments.slice(0, visibleComments).map((comment, index) => (
        <div key={index} className="comment-item">
          <div className="comment-content">
            <Rating
              name={`read-only-${index}`}
              value={comment.rating}
              readOnly
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <p className="comment-text">{comment.text}</p>
            <p className="stakeholder-type">Stakeholder: {comment.stakeholder}</p>
          </div>
          {likes[index] && (
          <div
            className="like-section"
            onClick={() => toggleLike(index)}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9e6e9')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {likes[index].liked ? (
              <FavoriteIcon style={{ color: '#ff1744' }} />
            ) : (
              <FavoriteBorderIcon style={{ color: '#c5c5c5' }} />
            )}
            <span className="like-count">{likes[index].count}</span>
          </div>)}
        </div>
      ))}
      {visibleComments < filteredComments.length && (
        <button onClick={showMoreComments} className="more-button">
          More
        </button>
      )}
    </div>
  );
};

export default CommentList;
