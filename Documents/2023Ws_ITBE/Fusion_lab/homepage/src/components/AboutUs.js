import React, { useRef, useEffect } from "react";
import "./AboutUs.css";
import teamImage from "../images/team_picture.png";
import teamImageOverview from "../images/team_picture_overview.png";
import line_right from "../images/line_right.png";
import line_left from "../images/line_left.png";
import Ying3 from "../images/Ying2.png";
import Jeffrey from "../images/jeffrey.png";
import Zihan from "../images/Zihan.png";
import Kim from "../images/Kim.png";
import Julian from "../images/Julian.png";
import profile_Ying from "../images/profile_Ying.png";
import profile_Deng from "../images/profile_Deng.png";
import profile_Jeff from "../images/profile_Jeff.png";
import profile_Julian from "../images/profile_Julian.png";
import profile_Kim from "../images/profile_Kim.png";

import TEAM from "../images/TEAM.png";

function AboutUs() {
  const profileRefs = useRef({});

  const images = [
    {
      src: Zihan,
      alt: "Deng Zihan",
      profile_name: "Deng Zihan",
      name: "Deng Zihan",
      bio: "He is primarily responsible for the entire series of GIS-related tasks, including preprocessing elevation data using available information, adapting 2D lane models to accommodate height variations, creating an automated workflow, and assisting with the conversion of adapted lane model data and IFC models into CityGML.",
      profile: profile_Deng,
      linkedinUrl: "https://www.linkedin.com/in/zihan-deng-474aa4272/",
    },
    {
      src: Julian,
      alt: "Gerstner Julian",
      profile_name: "Gerstner Julian",
      name: "Gerstner Julian",
      bio: "He is primarily responsible for the structural design of the new bridge and the creation of the Revit model. He is also in charge of visualizing the bridge in its surrounding environment using CityGML and customizing its presentation using Cesium. Additionally, he is responsible for conducting Visibility analysis for the new bridge and handling the website's post-development deployment work using Docker.",
      profile: profile_Julian,
      linkedinUrl: "https://www.linkedin.com/in/0juliangerstner0/",
    },
    {
      src: Kim,
      alt: "Kim Nayun",
      profile_name: "Kim Nayun",
      name: "Kim Nayun",
      bio: "She is primarily responsible for the conceptual design of bridges in the initial phase, rendering images, and animation production of the new bridge models, setting up sprints for website development, and creating the website's front-end IFC viewer.",
      profile: profile_Kim,
      linkedinUrl: "https://www.linkedin.com/in/nayun-kim-69254526b/",
    },
    {
      src: Jeffrey,
      alt: "Limnardy Jeffrey",
      profile_name: "Limnardy Jeffrey",
      name: "Limnardy Jeffrey",
      bio: "In the project, he is mainly responsible for the overall project management, coordination of multiple responsible parties, bridge construction plan, calibration of the new bridge in GIS and back-end and API constructions of the website. He also helps GIS part, GityGML part and integrate frontend and backend.",
      profile: profile_Jeff,
      linkedinUrl:
        "https://www.linkedin.com/in/jeffrey-limnardy-b7323765/?originalSubdomain=de",
    },
    {
      src: Ying3,
      alt: "Ying Lu",
      profile_name: "Lu Ying",
      name: "Lu Ying",
      bio: "In the project, her main responsibilities include the conceptual design of bridges in the initial phase, traffic planning during the demolition of old bridges, and creating the project's website front-end design. The most crucial design aspects involve the responsive design of the comment system and the voting system.",
      profile: profile_Ying,
      linkedinUrl: "https://www.linkedin.com/in/颖-卢-726316276/",
    },
  ];

  useEffect(() => {
    images.forEach((image) => {
      if (!profileRefs.current[image.profile_name]) {
        profileRefs.current[image.profile_name] = React.createRef();
      }
    });
  }, []);

  const scrollToProfile = (profile_name) => {
    if (
      profileRefs.current[profile_name] &&
      profileRefs.current[profile_name].current
    ) {
      profileRefs.current[profile_name].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.log("can not link to the profile");
    }
  };

  const ProfileEntry = React.forwardRef(
    ({ imgSrc, profile_name, bio, linkedinUrl }, ref) => {
      return (
        <div ref={ref} className="profile-entry">
          <div className="text-and-button">
            <h3>{profile_name}</h3>
            <p>{bio}</p>
            <a href={linkedinUrl} className="linkedin-button" target="_blank">
              LINKEDIN
            </a>
          </div>
          <img src={imgSrc} alt={profile_name} className="profile-image" />
        </div>
      );
    }
  );

  return (
    <div>
      <div className="team-introduction">
        <div className="team-image">
          <img src={teamImageOverview} alt="Team Group A" />
        </div>
        <div className="team-content">
          <div className="team-introduction-header">
            <img src={line_left} alt="Line left" className="line" />

            <p>Team Introduction</p>
            <img src={line_right} alt="Line right" className="line-right" />
          </div>
          <h3>Group A</h3>
          <p style={{ textAlign: "left", marginTop: "10px" }}>
            Group A consists entirely of students from the ITBE program. <br />
            For this project, there is a requirement for collaboration among
            students with diverse undergraduate backgrounds. As a result, the
            members of Group A bring a wealth of varied backgrounds to the
            table. Three students hail from environmental engineering (Deng
            Zihan, Gerstner Julian,Limnardy Jeffrey), one from architecture (Kim
            Nayun), and one from urban and rural planning(Lu Ying).
            <br />
            When discussing bridge design, we have always focused on how to
            design bridges as landmarks in the city. First, we decided that the
            entrance design of the bridge would focus on creating a visual
            impact, providing a clear welcome signal announcing the arrival of
            motorists on this famous bridge. This design approach not only
            ensures the functionality of the bridge, but also aesthetically
            enhances the visual landscape of the entire city.{" "}
          </p>
        </div>
      </div>

      <div className="team-members-introduction-header">
        <img src={line_left} alt="Line left" className="line-overview-left" />
        <div className="team-members-title">Team Members Introduction</div>
        <img
          src={line_right}
          alt="Line right"
          className="line-overview-right"
        />
      </div>

      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className={`image-card staggered-${index % 2}`}>
            <div className="image-container">
              <img src={image.src} alt={image.alt} className="image" />
              <div className="overlay">
                <div className="text-and-button-intro">
                  <div className="text">
                    <span className="title">ITBE</span>
                    <span className="name">{image.name}</span>
                  </div>

                  <button
                    className="button"
                    onClick={() => scrollToProfile(image.profile_name)}
                  >
                    {" "}
                    Go
                  </button>
                </div>
              </div>
            </div>

            <div className="team-members-introduction-header">
              <img
                src={line_left}
                alt="Line left"
                className="line-overview-left"
              />
              <div className="team-members-title">
                Team Members Introduction
              </div>
              <img
                src={line_right}
                alt="Line right"
                className="line-overview-right"
              />
            </div>

            <div className="image-gallery">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`image-card staggered-${index % 2}`}
                >
                  <div className="image-container">
                    <img src={image.src} alt={image.alt} className="image" />
                    <div className="overlay">
                      <div className="text-and-button-intro">
                        <div className="text">
                          <span className="title">ITBE</span>
                          <span className="name">{image.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="team-container">
        <img src={teamImage} alt="Overlay" className="overlay-image" />
        <img src={TEAM} alt="TEAM text" className="Team-image" />
        {images.map(({ profile_name, bio, profile, linkedinUrl }, index) => (
          <ProfileEntry
            key={index}
            imgSrc={profile}
            profile_name={profile_name}
            bio={bio}
            linkedinUrl={linkedinUrl}
            ref={profileRefs.current[profile_name]}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
