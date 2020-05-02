import React from "react";
import _ from "lodash";
import "../styles/photo.css";

export default function AllPhotos(props) {
  const arrOfPhoto = props.photo.map(url => {
    return (
      <img src={`data:image/jpg;base64, ${url}`} className="singlePhoto" />
    );
  });

  return <div className="allPhotos">{arrOfPhoto}</div>;
}
