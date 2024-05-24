import React from "react";
import MainMenu from "../components/MainMenu";

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <h1 id="main-menu-heading">Snake Game</h1>
        <p id="main-menu-para">Made using JS and React</p>
        <MainMenu />
      </div>
    </div>
  );
};

export default HomePage;
