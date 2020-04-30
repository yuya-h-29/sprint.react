import React, { useState } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
// import Upload from "./Upload";
import AllPhotos from "./AllPhotos";
import SinglePhoto from "./SinglePhoto";

export default function App() {
  const [view, setView] = useState("all"); //  allPhotos or singlePhoto
  const [photo, setPhoto] = useState();
  const [selectedPhoto, setSelectedPhoto] = useState("selectedPhoto");

  const changeView = allOrSingle => {
    if (allOrSingle === "all") {
      console.log("should be all =>", allOrSingle);
      setView(allOrSingle);
    } else if (allOrSingle === "single") {
      console.log("should be single => ", allOrSingle);
      setView(allOrSingle);
    }
  };

  return (
    <body>
      <div className="app">
        <div>VIEW =>{view}</div>
        <Navbar
          className="navText"
          home="Home"
          view={view}
          changeView={changeView}
        />
        <AllPhotos view={view} />
        {/* view => all */}
        <SinglePhoto view={view} />
      </div>
    </body>
  );
}
