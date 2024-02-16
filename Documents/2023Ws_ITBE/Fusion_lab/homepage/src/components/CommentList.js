import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./comment_list.css";
import { useAuth0 } from "@auth0/auth0-react";

const CommentList = ({ selectedComponent, reviews, setReviews }) => {
  const [likes, setLikes] = useState(false);
  const serverURL = process.env.REACT_APP_API_BASE_URL;
  const { loginWithRedirect, getAccessTokenSilently } = useAuth0();
  // Update likes state whenever comments change
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: "https://reviews-api.com/",
            scope: "read:review write:review",
          },
        });
        const response = await fetch(`${serverURL}/user/${accessToken}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const userData = await response.json();
        const likedReviews = userData.user.likedReviewsId;
        setLikes(
          reviews.map((review) => {
            if (likedReviews.includes(review.id)) {
              return {
                id: review.id,
                liked: true,
                count: review.count,
              };
            }
            return {
              id: review.id,
              liked: false,
              count: review.count,
            };
          })
        );
      } catch (err) {
        console.error(err);
        setLikes(
          reviews.map((review) => ({
            id: review.id,
            liked: false,
            count: review.count,
          }))
        );
      }
    };
    fetchUserData();
  }, [reviews]);

  const toggleLike = async (index) => {
    if (index >= 0 && index < likes.length) {
      const newLikes = [...likes];
      newLikes[index] = {
        ...newLikes[index],
        liked: !newLikes[index].liked,
        count: newLikes[index].liked
          ? newLikes[index].count - 1
          : newLikes[index].count + 1,
      };

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: "https://reviews-api.com/",
            scope: "read:review write:review",
          },
        });
        if (newLikes[index].liked) {
          const response = await fetch(
            `${serverURL}/review/${newLikes[index].id}/likes/inc`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          console.log(await response.json());
        } else {
          const response = await fetch(
            `${serverURL}/review/${newLikes[index].id}/likes/dec`,
            {
              method: "PUT",
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          console.log(await response.json());
        }
        setLikes(newLikes);
      } catch (err) {
        console.error(err);
        loginWithRedirect();
      }
    }
  };

  const [visibleReviews, setVisibleReviews] = useState(5); // Start with 5 visible comments
  const showMoreReviews = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 5); // Show 5 more comments
  };

  // Filter comments based on the selected component
  const filteredReviews = reviews.filter(
    (review) => review.component === selectedComponent
  );

  return (
    <div className="comments-section">
      {filteredReviews.slice(0, visibleReviews).map((review, index) => (
        <div key={index} className="comment-item">
          <div className="comment-content">
            <Rating
              name={`read-only-${index}`}
              value={review.rating}
              readOnly
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <p className="comment-text">{review.text}</p>
            <p className="stakeholder-type">
              Stakeholder: {review.stakeholder}
            </p>
          </div>
          {likes[index] && (
            <div
              className="like-section"
              onClick={() => toggleLike(index)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f9e6e9")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              {likes[index].liked ? (
                <FavoriteIcon style={{ color: "#ff1744" }} />
              ) : (
                <FavoriteBorderIcon style={{ color: "#c5c5c5" }} />
              )}
              <span className="like-count">{likes[index].count}</span>
            </div>
          )}
        </div>
      ))}
      {visibleReviews < filteredReviews.length && (
        <button onClick={showMoreReviews} className="more-button">
          More
        </button>
      )}
    </div>
  );
};

export default CommentList;
