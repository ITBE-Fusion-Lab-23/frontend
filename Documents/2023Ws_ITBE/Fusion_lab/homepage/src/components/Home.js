import React from "react";
import overview from "../images/main_overview.png";

function Home() {
  return (
    <div className="container">
      <div className="row">
        {/* Column for text with padding */}
        <div
          className="col-md-5"
          style={{
            paddingLeft: 50,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "#BDBDBD",
              fontSize: 64,
              fontFamily: "Roboto",
              fontWeight: "300",
              lineHeight: "64px",
              textAlign: "left",
            }}
          >
            PROJECT
          </div>
          <div
            style={{
              color: "#333333",
              fontSize: 64,
              fontFamily: "Roboto",
              fontWeight: "700",
              lineHeight: "64px",
              wordWrap: "break-word",
              textAlign: "left",
            }}
          >
            Donnersberger
            <br />
            brücke
          </div>
        </div>
        {/* Column for image with increased right margin */}
        <div
          className="col-md-7 p-5"
          // style={{ paddingRight: 10, paddingTop: 20, paddingBottom: 60 }}
        >
          {/* Inline styles for the image to maintain its dimensions */}
          <img
            src={overview}
            alt="Overview"
            style={{ Height: 775, width: 718 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
