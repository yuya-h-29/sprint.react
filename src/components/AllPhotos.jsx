import React from "react";
import _ from "lodash";

export default function AllPhotos(props) {
  if (props.view === "all") {
    return (
      <div>
        <div>{props.view}</div>
        <div style={{ display: "none" }}></div>
      </div>
    );
  }
  return <div></div>;
}
