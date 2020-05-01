import React from "react";
import _ from "lodash";

export default function AllPhotos(props) {
  let arrOfPhoto = _.forEach(props.photo, function(fileName) {
    // console.log(fileName);
    let url = `https://s3-ap-northeast-1.amazonaws.com/react.sprint/${fileName}`;
    console.log(url);
    return <img src={url} />;
  });

  console.log(arrOfPhoto);

  return (
    <div>
      <h1>Yes we are getting this</h1>
      {arrOfPhoto}
      <img
        src="https://s3-ap-northeast-1.amazonaws.com/react.sprint/"
        alt="sample"
      />
    </div>
  );
}
