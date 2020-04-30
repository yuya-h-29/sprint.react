import React from "react";
import "../styles/navbar.css";
import _ from "lodash";
import Upload from "./Upload";

export default function Navbar(props) {
  const changeView = props.changeView;
  const view = props.view;

  function selectView() {
    if (view === "all") {
      changeView("single");
    } else changeView("all");
  }

  return (
    <div className="navbar">
      <h1 className="navbar-header">{props.home}</h1>
      <button onClick={selectView}>Select ALL or SINGLE</button>
      <Upload text="Upload" />
    </div>
  );
}
