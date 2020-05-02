import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import { listObjects, getSingleObject, saveObject } from "../utils/index";

export default function App() {
  const [view, setView] = useState("all");
  const [photo, setPhoto] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState("selectedPhoto");

  async function getAllPictures() {
    const pictures = await listObjects();
    const arrOfPicFiles = pictures.map(picture => picture.Key);
    const toBase64 = await Promise.all(
      arrOfPicFiles.map(picFile => getSingleObject(picFile))
    ).then(result =>
      result.map(picData => {
        // console.log(picData);
        return "data:image/jpg;base64," + picData;
      })
    );
    return setPhoto(toBase64);
  }

  useEffect(() => {
    getAllPictures();
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
