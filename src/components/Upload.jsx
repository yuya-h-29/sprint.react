import React from "react";
import _ from "lodash";
import "../styles/upload.css";

export default function Upload(props) {
  return (
    <button
      className="button"
      onClick={() => {
        props.changeView(props.view);
      }}
    >
      Upload
    </button>
  );
}
