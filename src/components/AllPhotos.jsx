import React from "react";
import _ from "lodash";
import "../styles/photo.css";

export default function AllPhotos(props) {
  const arrOfPhoto = props.photo.map((url, index) => {
    return <img src={url} alt={`picture${index}`} className="singlePhoto" />;
  });

  return <div className="allPhotos">{arrOfPhoto}</div>;
}
