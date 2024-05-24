import React from "react";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import leaderboard from "../leaderboard.json";

const Leaderboards = () => {
  const [highScore, setHighScore] = useState([]);

  useEffect(() => {
    const fetchHighScore = async () => {
      const BASE_URL = "http://localhost:8000/leaderboard";
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setHighScore(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchHighScore();
  }, []);

  return (
    <div className="leader-main-container">
      <div className="leader-container">
        <h1>Leaderboards</h1>
        <div className="leader-table">
          <table>
            <thead>
              <th>Username</th>
              <th>High Score</th>
            </thead>
            {highScore.map((hs) => (
              <tr key={hs.id}>
                <td>{hs.username}</td>
                <td>{hs.high_score}</td>
              </tr>
            ))}
          </table>
        </div>
        <div>
          <Button
            text="Back To Main Menu"
            bgcolor="red"
            color="white"
            goTo="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Leaderboards;
