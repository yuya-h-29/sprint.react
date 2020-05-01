import React, { useRef } from "react";
import _ from "lodash";
import "../styles/upload.css";

export default function Upload(props) {
  // const inputEl = React.createRef()

  return (
    <div>
      {/* <input
        type="button"
        value="Upload"
        onClick={() => {
          props.changeView(props.view);
        }}
      /> */}

      <button
        className="button"
        onClick={() => {
          props.changeView(props.view);
        }}
      >
        Upload
      </button>
    </div>
  );
}
