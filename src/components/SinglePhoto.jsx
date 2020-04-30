import React from "react";
export default function SinglePhoto(props) {
  if (props.view === "single") {
    return (
      <div>
        <div>{props.view}</div>
        <div style={{ display: "none" }}></div>
      </div>
    );
  }
  return <div></div>;
}
