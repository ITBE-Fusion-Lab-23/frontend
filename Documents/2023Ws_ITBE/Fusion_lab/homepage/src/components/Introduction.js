import React , { useRef } from 'react';
import intro_overview from '../images/intro_overview.png';
import bus_station from '../images/bus_station.png';
import roads from '../images/roads.png';
import walkways from '../images/walkway.png';
import pretzel_side from '../images/Pretzel_side.png';
import sunset from '../images/sunset.png';
import './introduction.css';



function Introduction() {


  const introOverviewRef = useRef(null);

  const scrollToImage = () => {
    if (introOverviewRef.current) {
      window.scrollTo({
        top: introOverviewRef.current.offsetTop,
        behavior: 'smooth', 
      });
    }
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '50px 0' }}>
      <div style={{ position: 'relative', width: '1232px', height: '435px', margin: '0 auto', backgroundColor: '#FBFBFB', marginBottom: '180px' }}>
        <img src={intro_overview} alt="Intro Overview" style={{ width: '601px', height: 'auto', position: 'absolute', top: '50px', left: '100px' }} />
        <div style={{ position: 'absolute', left: '740px', width: '422px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '50px 20px 20px', fontFamily: 'Roboto', textAlign: 'left' }}>
          <h1 style={{ color: '#BDBDBD', fontSize: 64, fontWeight: '300', marginBottom: '10px' }}>Introduction</h1>
          <p style={{ color: '#000000', fontSize: '16px', fontWeight: '300', lineHeight: '1.6' }}>
            Location:<br />
            Year:<br />
            Author<br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className='read-more-container' onClick={scrollToImage}
          >
            READ MORE  →
          </button>
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '50px' }}>
  <div style={{ maxWidth: '1200px' }}>
    <img ref={introOverviewRef}  src={bus_station} alt="Side view of a bus station" style={{ flexShrink: 0, height: 'auto', marginRight: '20px' }} />
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

<div class="main-focus-container">
  <div class="main-focus-title">Main Focus/Mission Statement</div>
  <div class="focus-row">
    <div class="focus-item">
      <div class="focus-number">1</div>
      <div class="focus-content">
        <h2>Sunset</h2>
        <p>consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
      </div>
    </div>
    <div class="focus-item">
      <div class="focus-number">2</div>
      <div class="focus-content">
        <h2>Breeze</h2>
        <p>consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
      </div>
    </div>
  </div>
  <div class="focus-item focus-item-full">
    <div class="focus-number">3</div>
    <div class="focus-content">
      <h2>Sunset</h2>
      <p>consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
    </div>
  </div>
</div>



 



    </div>
  );
}

export default Introduction;
