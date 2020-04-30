import React, { useState } from "react";
import "../styles/styles.css";
import Navbar from "./Navbar";
import AllPhotos from "./AllPhotos";
import { listObjects, getSingleObject, saveObject } from "../utils/index";

export default function App() {
  const [view, setView] = useState("all"); //  All or Single
  const [photo, setPhoto] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState("selectedPhoto");

  const pictures = listObjects();
  // console.log(pictures.then((data) => console.log(data[0])));

  const showAllPictures = pics => {
    pics.then(data => {
      return data.forEach(picture => {
        console.log(picture.Key);
        // setPhoto(photo.push(picture.Key));
      });
    });
  };

  showAllPictures(pictures);
  console.log("all", photo);

  //react.sprint
  //ap-northeast-1
  //https://s3-ap-northeast-1.amazonaws.com/react.sprint/codechysalislogo.gif

  const changeView = input => {
    if (input === "all") {
      setView("single");
    } else if (input === "single") {
      setView("all");
    }
  };

  // https://stackoverflow.com/questions/33600196/showing-images-stored-in-s3-bucket

  return (
    <body>
      <div className="app">
        <Navbar
          className="navText"
          home="Home"
          view={view}
          changeView={changeView}
        />
        <AllPhotos view={view} />
        <h1>{view}</h1>
        <img
          src="https://s3-ap-northeast-1.amazonaws.com/react.sprint/codechysalislogo.gif"
          alt="sample"
        />
        <h1>
          <listObjects />
        </h1>
      </div>
    </body>
  );
}
