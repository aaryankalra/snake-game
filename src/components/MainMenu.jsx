import React from "react";
import EnterName from "./EnterName";
import Button from "./Button";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

import "./MainMenu.css";

export default function MainMenu() {
  return (
    <div className="main-menu-container">
      <div>
        <EnterName />
      </div>
      <div className="btn-container">
        <button style={{ backgroundColor: "black", marginBottom: "5px" }}>
          <Link to="/game" style={{ color: "white" }}>
            Start Game
          </Link>
        </button>
        <Button
          text="Leaderboards"
          bgcolor="red"
          color="white"
          goTo="/leaderboards"
        />
        <Button text="Options" bgcolor="green" color="white" goTo="/options" />
      </div>
    </div>
  );
}
