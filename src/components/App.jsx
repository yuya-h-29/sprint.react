import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import { listObjects, getSingleObject, saveObject } from "../utils/index";

export default function App() {
  const [view, setView] = useState("all"); //  All or Single
  const [photo, setPhoto] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState("selectedPhoto");

  const getAllPictures = pics => {
    pics.then(data => {
      return data.forEach(picture => {
        setPhoto(photo => [...photo, picture.Key]);
      });
    });
  };

  useEffect(() => {
    const pictures = listObjects();
    getAllPictures(pictures);
  }, []);

  const changeView = input => {
    if (input === "all") {
      setView("single");
    } else if (input === "single") {
      setView("all");
    }
  };

  return (
    <body>
      <div className="app">
        <Navbar
          className="navText"
          home="Home"
          view={view}
          changeView={changeView}
        />
        <h1>{view}</h1>
        <AllPhotos view={view} photo={photo} />
        <h1>
          <listObjects />
        </h1>
      </div>
    </body>
  );
}
