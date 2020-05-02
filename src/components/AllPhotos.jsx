import React from "react";
import _ from "lodash";

export default function AllPhotos(props) {
  let arrOfPhoto = _.forEach(props.photo, function(url) {
    console.log("my", url);
    return <img src={url} className="singlePhoto" />;
  });

  return (
    <div className="allPhotos">
      {arrOfPhoto}
      <h1>hahahahaha</h1>
    </div>
  );
}
