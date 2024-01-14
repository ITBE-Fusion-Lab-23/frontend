import React from 'react';
import intro_overview from '../images/intro_overview.png';
import bus_station from '../images/bus_station.png';
import roads from '../images/roads.png';
import walkways from '../images/walkway.png';
import pretzel_side from '../images/Pretzel_side.png';
import sunset from '../images/sunset.png';
import './introduction.css';



function Introduction() {
  const data = [
    {
      number: '1',
      title: 'Sunset',
      description: 'consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.'
    },
    {
      number: '2',
      title: 'Breze',
      description: 'consectetur adipiscing elit. Sed efficitur, lectus et facilisis'
    },
    {
      number: '3',
      title: 'Sunset',
      description: 'consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat. Sunset consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat. consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat'
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '50px 0' }}>
      {/* Centered container with a fixed size */}
      <div style={{ position: 'relative', width: '1232px', height: '435px', margin: '0 auto', backgroundColor: '#FBFBFB', marginBottom: '180px' }}>
        {/* Image with adjusted top margin */}
        <img src={intro_overview} alt="Intro Overview" style={{ width: '601px', height: 'auto', position: 'absolute', top: '50px', left: '100px' }} />
        {/* Text content aligned to the left */}
        <div style={{ position: 'absolute', left: '740px', width: '422px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 20px 20px', fontFamily: 'Roboto', textAlign: 'left' }}>
          <h1 style={{ color: '#BDBDBD', fontSize: 64, fontWeight: '300', marginBottom: '10px' }}>Introduction</h1>
          <p style={{ color: '#000000', fontSize: '16px', fontWeight: '300', lineHeight: '1.6' }}>
            Location:<br />
            Year:<br />
            Author<br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button style={{
            fontSize: '12px',
            color: '#333333',
            background: '#FFFFFF', // Button background color
            cursor: 'pointer',
            padding: '10px 16px', // Adjust padding to achieve the desired button size
            width: '222px', // Fixed width as per the screenshot
            height: '71px', // Fixed height as per the screenshot
            boxSizing: 'border-box', // Ensures that padding and border are included in the width and height
            alignSelf: 'flex-start', // Ensures button is left-aligned,
            fontWeight: '400',
            letterSpacing: 2.40,

          }}>
            READ MORE  →
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '50px' }}>
  <div style={{ maxWidth: '1200px' }}>
    <img src={bus_station} alt="Side view of a bus station" style={{ flexShrink: 0, height: 'auto', marginRight: '20px' }} />
  </div>
  <div style={{ flexDirection: 'column', padding: '0 20px', width: '456px', fontFamily: 'Roboto', textAlign: 'left' }}>
    <h2 style={{ color: '#000000', fontSize: '24px', fontWeight: '400' }}>Bus Station</h2>
    <p style={{ color: '#000000', fontSize: '16px', fontWeight: '300', lineHeight: '1.6' }}>
      Lorem Ipsum is simply dummy text of the printing and typetting industry...
    </p>
  </div>
</div>

<div style={{ display: 'flex', justifyContent: 'space-between', padding: '50px' }}>
  <div style={{ flexDirection: 'column', padding: '0 20px', width: '400px', fontFamily: 'Roboto', textAlign: 'left'}}>
    <h2 style={{ color: '#000000', fontSize: '24px', fontWeight: '400' }}>Walkway</h2>
    <p style={{ color: '#000000', fontSize: '16px', fontWeight: '300', lineHeight: '1.6' }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry...
    </p>
  </div>
  <div style={{ maxWidth: '1200px' }}>
    <img src={walkways} alt="Pedestrian" style={{ flexShrink: 0, height: 'auto' }} />
  </div>
</div>

<div style={{ display: 'flex', justifyContent: 'space-between', padding: '50px' }}>
  <div style={{ maxWidth: '1200px' }}>
    <img src={roads} alt="Side view of a bus station" style={{ flexShrink: 0, height: 'auto', marginRight: '20px' }} />
  </div>
  <div style={{ flexDirection: 'column', padding: '0 20px', width: '456px', fontFamily: 'Roboto', textAlign: 'left' }}>
    <h2 style={{ color: '#000000', fontSize: '24px', fontWeight: '400' }}>Roads</h2>
    <p style={{ color: '#000000', fontSize: '16px', fontWeight: '300', lineHeight: '1.6' }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry...
    </p>
  </div>
</div>

<div style={{ display: 'flex', justifyContent: 'space-between', padding: '50px' }}>
  <div style={{ flexDirection: 'column', padding: '0 20px', width: '400px', fontFamily: 'Roboto', textAlign: 'left' }}>
    <h2 style={{ color: '#000000', fontSize: '24px', fontWeight: '400' }}>Walkway</h2>
    <p style={{ color: '#000000', fontSize: '16px', fontWeight: '300', lineHeight: '1.6' }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry...
    </p>
  </div>
  <div style={{ maxWidth: '1200px' }}>
    <img src={pretzel_side} alt="Pedestrian" style={{ flexShrink: 0, width:'750px', height: 'auto' }} />
  </div>
</div>

<div style={{ display: 'flex', justifyContent: 'space-between', padding: '50px' }}>
  <div style={{ maxWidth: '1200px' }}>
    <img src={sunset} alt="Side view of a bus station" style={{ flexShrink: 0, width:'800px', height: 'auto', marginRight: '20px' }} />
  </div>
  <div style={{ flexDirection: 'column', padding: '0 20px', width: '456px', fontFamily: 'Roboto', textAlign: 'left' }}>
    <h2 style={{ color: '#000000', fontSize: '24px', fontWeight: '400' }}>Roads</h2>
    <p style={{ color: '#000000', fontSize: '16px', fontWeight: '300', lineHeight: '1.6' }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry...
    </p>
  </div>
</div>

<div className="main-focus-container">
      <h1 className="main-focus-title">Main Focus/Mission Statement</h1>
      <div className="focus-row">
        {data.slice(0, 2).map((item, index) => (
          <div key={index} className="focus-item">
            <div className="focus-number">{item.number}</div>
            <div className="focus-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="focus-item focus-item-full">
        <div className="focus-number">{data[2].number}</div>
        <div className="focus-content">
          <h2>{data[2].title}</h2>
          <p>{data[2].description}</p>
        </div>
      </div>
    </div>



 



    </div>
  );
}

export default Introduction;
