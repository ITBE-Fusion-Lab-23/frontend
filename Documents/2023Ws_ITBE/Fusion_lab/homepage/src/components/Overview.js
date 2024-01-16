import React from 'react';
import Rating from '@mui/material/Rating';
import './Overview.css';

const Overview = ({ comments }) => {
    // Calculate the average rating and rating distribution
    const totalRatings = comments.length;
    const ratingDistribution = Array(5).fill(0);
    let totalScore = 0;

    comments.forEach(comment => {
        ratingDistribution[comment.rating - 1] += 1;
        totalScore += comment.rating;
    });

    const averageRating = totalRatings > 0 ? (totalScore / totalRatings) : 0;

    // Create rating bars
    const ratingBars = ratingDistribution.map((count, index) => {
        const rating = index + 1;
        const widthPercentage = (count / comments.length) * 100;

        return (
            <div key={rating} className="rating-bar">
                <span className="rating-label">{rating}/5</span>
                <div className="bar-container">
                    <div className="bar" style={{
                        width: `${widthPercentage}%`,
                        backgroundColor: widthPercentage > 50 ? '#FFD700' : '#CCC'
                    }}></div>
                </div>
                <span className="rating-count">{count}</span>
            </div>
        );
    });

    return (
        <div className="overview-container">
          <h2>Overview</h2>
          <div className="overview-flex-container"> 

            <div >
              {ratingBars}
            </div>

            <div className="average-rating-container">
              <span className="average-score">{averageRating.toFixed(1)}</span>
              <Rating value={averageRating} readOnly  precision={0.1}/>
              <span className="total-comments">{totalRatings} comments</span>
            </div>
          </div>

        </div>
      );
      
};

export default Overview;
