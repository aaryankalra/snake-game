import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-txt">
        <FaExclamationTriangle className="not-found-icon" />
        <h1>404 Page Not Found</h1>
        <h2>This page is currently under construction</h2>
        <p>Come back soon to check</p>
      </div>
      <div className="not-found-btn">
        <Button text="Go Back To Home" bgcolor="red" color="white" goTo="/" />
      </div>
    </div>
  );
};

export default NotFound;
