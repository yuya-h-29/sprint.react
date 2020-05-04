import React from "react";
import "../styles/navbar.css";
import _ from "lodash";
import Upload from "./Upload";

export default function Navbar(props) {
  //adding commnt
  // props => className="navText" name="Home"
  return (
    <div className="navbar">
      <h1 className="navbar-header">{props.home}</h1>
      <Upload changeView={props.changeView} view={props.view} />
    </div>
  );
}
