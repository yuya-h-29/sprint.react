import React, { useState } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
// import Upload from "./Upload";
import AllPhotos from "./AllPhotos";

export default function App() {
  const [view, setView] = useState("all"); //  All or Single
  const [photo, setPhoto] = useState("photos");
  const [selectedPhoto, setSelectedPhoto] = useState("selectedPhoto");

  setView(<AllPhotos />);

  return (
    <body>
      <div className="app">
        <Navbar className="navText" home="Home" />
        {view}
      </div>
    </body>
  );
}
