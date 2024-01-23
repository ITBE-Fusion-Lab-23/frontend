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
        <div style={{ position: 'absolute', left: '740px', width: '480px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 20px 20px', fontFamily: 'Roboto', textAlign: 'left' }}>
          <h1 style={{ color: '#BDBDBD', fontSize: 64, fontWeight: '300', marginBottom: '10px' }}>Introduction</h1>
          <p style={{ color: '#000000', fontSize: '14px', fontWeight: '300', lineHeight: '1.6' }}>
         
          The Donnersbergerbrücke is located between Hackerbrücke and Hirschgarten, which plays an important role in transportation in Munich as a part of the Mitteren Ring.<br />It is part of the western bypass of the Mittleren Ring. Coming from the south, Trappentreustraße leads onto Donnersbergerbrücke, which, after crossing Landsberger Straße, the tracks in front of the main railway station and Arnulfstraße, joins Landshuter Allee. The Donnersbergerbrücke thus connects the districts of Schwanthalerhöhe in the south and Neuhausen in the north and is located around two kilometres west of Munich Central Station.
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
    <p style={{ color: '#000000', fontSize: '16px', fontWeight: '300', lineHeight: '1.6' ,marginTop:'30px'}}>
    This bridge also connects to important public transportation such as S-bahn and bus stations. The Donnersbergerbrücke has its S-bahn station for lines from 1 to 8 and RB 55 to 58, which start from the central station of Munich, meanwhile having bus stations located at the entrance of the station.<br /> <br /> 
These bus stations can cause traffic jams when rush hours because there is no area to stop the bus to let people down and take the bus. The bridge necessarily has bus stations for people who transfer buses from S-Bahn.

    </p>
  </div>
</div>

<div style={{ display: 'flex', justifyContent: 'space-between', padding: '50px' }}>
  <div style={{ flexDirection: 'column', padding: '0 20px', width: '480px', fontFamily: 'Roboto', textAlign: 'left'}}>
    <h2 style={{ color: '#000000', fontSize: '24px', fontWeight: '400' }}>Walkway</h2>
    <p style={{ color: '#000000', fontSize: '16px', fontWeight: '300', lineHeight: '1.6' ,marginTop:'30px'}}>
    Based on the annual report of traffic volume on main roads in Munich surveyed by Landeshauptstadt München Mobilitätsreferat, the Donnersbergerbrücke has the heaviest traffic volume among other bridges in Munich with heavy traffic such transport vehicles. These massive traffic volumes can create an uncomfortable environment for passengers, even though the bridge is serving a major S-Bahn and bus station for passengers.<br /> <br /> So a designated bicycle parking area is provided on the bridge. However, pedestrians and cyclists are currently sharing the walkway due to the absence of a bicycle path on the bridge, even though there are quite a lot of cyclists and pedestrians in this industrialized area. This can create a congested and unpleasant environment on the bridge, particularly for both pedestrians and cyclists.
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
  <div style={{ flexDirection: 'column', padding: '0 20px', width: '500px', fontFamily: 'Roboto', textAlign: 'left' }}>
    <h2 style={{ color: '#000000', fontSize: '24px', fontWeight: '400' }}>Pretzel</h2>
    <p style={{ color: '#000000', fontSize: '16px', fontWeight: '300', lineHeight: '1.6' ,marginTop:'30px'}}>
    Our preliminary design focuses on enhancing the commuters' experience while seeing the bridge.<br /> <br /> In doing so, we aim to achieve a harmonious integration with Munich's rich cultural history and the surrounding environment. Drawing inspiration from a culinary symbol deeply embedded in the local culture—the Pretzel—we've incorporated its structural elements of curves and crossings into the bridge's design.<br /> <br /> The bridge's design creates a strong visual impact, sending a welcoming signal to drivers that they have arrived at a notable Munich landmark.

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
    <h2 style={{ color: '#000000', fontSize: '24px', fontWeight: '400' }}>Sunset</h2>
    <p style={{ color: '#000000', fontSize: '16px', fontWeight: '300', lineHeight: '1.6' ,marginTop:'30px'}}>
    Regarding POI analysis around the bridge, the sunset view on Hackerbrücke is very famous. Whenever dusk comes, countless people will stop on the bridge to enjoy the amazing sunset. Our bridge is located exactly in the direction of the sunset, which provides us with an excellent design opportunity to transform our bridge facade to increase the fun of watching the sunset for pedestrians on the Hackerbrücke<br /> <br /> Regarding lighting, we plan to set up a lighting system designed to mimic the way the sky is dyed red by the sunset. And this system will create a living light display that changes with the sun’s descent and intensity.

    </p>
  </div>
</div>

<div class="main-focus-container">
  <div class="main-focus-title">Main Focus/Mission Statement</div>
  <div class="focus-row">
    <div class="focus-item">
      <div class="focus-number">1</div>
      <div class="focus-content">
        <h2>Bus Station</h2>
        <p> Enhances public transit by connecting directly to Munich's S-Bahn and bus stations, easing transfers and reducing rush hour congestion.</p>
      </div>
    </div>
    <div class="focus-item">
      <div class="focus-number">2</div>
      <div class="focus-content">
        <h2>Pretzel</h2>
        <p>Integrates local culture into the bridge's design, featuring pretzel-inspired curves that create a striking Munich landmark.</p>
      </div>
    </div>
  </div>
  <div class="focus-item focus-item-full">
    <div class="focus-number">3</div>
    <div class="focus-content">
      <h2>Sunset</h2>
      <p>The bridge's strategic location offers an unrivaled view of the sunset, enriching the experience at Hackerbrücke. A proposed lighting system will mimic the evening's red glow, creating a captivating ambiance. As the sun dips, the changing lights will provide a dynamic visual spectacle. This design aims to make the bridge a memorable spot for sunset admirers..</p>
    </div>
  </div>
</div>



 



    </div>
  );
}

export default Introduction;
