import React from "react";
import _ from "lodash";
import "../styles/upload.css";

export default function Upload(props) {
  return (
    <div>
      <button className="button">{props.text}</button>
      {/* prop => text="Upload" */}
      <form action="">
        <input type="file" />
      </form>
    </div>
  );
}
