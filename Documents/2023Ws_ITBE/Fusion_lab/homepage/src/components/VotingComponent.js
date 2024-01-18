import React, { useState, useEffect } from 'react';
import './VotingComponent.css';
import image_test from '../images/image_test.png';




const imageData = [
    { id: 'A', src: image_test, votes: 10 },
    { id: 'B', src: image_test, votes: 20 },
    { id: 'C', src: image_test, votes: 5 },
    { id: 'D', src: image_test, votes: 15 },
    { id: 'E', src: image_test, votes: 8 }
];

const VotingComponent = ({ onModelSelect }) => {
    const [images, setImages] = useState(imageData);
    const maxVotesGroup = images.reduce((prev, current) => (prev.votes > current.votes) ? prev : current, images[0]);


    const [chartData, setChartData] = useState({
        labels: imageData.map((data) => data.id),
        datasets: [{
            label: 'Results',
            data: imageData.map((data) => data.votes),
            backgroundColor: '#FFD700',

            barThickness: 'flex', // Use 'flex' for flexible bar thickness
            maxBarThickness: 100,
            font: {
                size: '36px',
                family: 'Montserrat',
                weight: 700,
            },
        }]
    });

    const chartOptions = {
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                grid: {
                    display: false,
                }
            }
        }
    };

    const selectModelGroup = (id) => {
        onModelSelect(id); // Call the prop function with the selected group id
        document.getElementById('model-viewer').scrollIntoView({ behavior: 'smooth' });

    };

    const handleVote = (id) => {
        const updatedImages = images.map((image) => {
            if (image.id === id) {
                return { ...image, votes: image.votes + 1 };
            }
            return image;
        });
        setImages(updatedImages);
    };

    useEffect(() => {
        setChartData({
            ...chartData,
            datasets: [{
                ...chartData.datasets[0],
                data: images.map((data) => data.votes)
            }]
        });
    }, [images]);

    // Assume imageData is the array of vote data with `id` and `votes` properties.
    const maxVotes = Math.max(...imageData.map(group => group.votes));

    const voteBars = imageData.map((group) => {
        const widthPercentage = maxVotes > 0 ? (group.votes / maxVotes) * 100 : 0;
        console.log(maxVotes)

        return (
            <div key={group.id} className="vote-bar">
                <span className="group-label">{group.id}</span>
                <div className="bar-container">
                <div className="bar" style={{
                    width: `${widthPercentage}%`,
                    backgroundColor:  '#FFD700' 
                }}></div></div>
                <span className="vote-count">{group.votes}</span>
            </div>
        );
    });





    return (
        <div className="voting-container">
            <h1 style={{ textAlign: 'left', marginLeft: '40px' }}>Vote</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>

            <div className="images-grid">
                {images.map((image) => (
                    <div key={image.id} className="image-item">
                        <img src={image.src} alt={`Rendering Image ${image.id}`} className="image" />
                        <div className="vote-section">
                            <button
                                className="ifc-model-button"
                                onClick={() => selectModelGroup(image.id)}
                            >
                                IFC MODEL
                            </button>
                            <button className="vote-button" onClick={() => handleVote(image.id)}>
                                Vote
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="overview-container"> 
            <h2>Result</h2>

            <div className="overview-flex-container"> 
            
            <div className="chart-container">
                {voteBars}
            </div>

            <div className="temporatary-result">
              <span className="average-score">Current Winner</span>
              <span className="current-winner">Group: {maxVotesGroup.id}</span>
            </div>

            </div>
            </div>
        </div>
    );
};

export default VotingComponent;
