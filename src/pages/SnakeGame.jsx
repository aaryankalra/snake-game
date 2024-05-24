import React, { useState, useEffect } from "react";
import "./SnakeGame.css";
import { Link } from "react-router-dom";

const ROWS = 25;
const COLS = 24;
const INITIAL_SNAKE = [
  { row: 12, col: 12 },
  { row: 12, col: 11 },
  { row: 12, col: 10 },
];
const INITIAL_DIRECTION = "RIGHT";

const generateFood = () => {
  return {
    row: Math.floor(Math.random() * ROWS),
    col: Math.floor(Math.random() * COLS),
  };
};

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(generateFood());
  const [gameOver, setGameOver] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [score, setScore] = useState(0);

  const checkCollision = (snake) => {
    const head = snake[0];
    return (
      snake
        .slice(1)
        .some(
          (segment) => segment.row === head.row && segment.col === head.col
        ) ||
      head.row < 0 ||
      head.row >= ROWS ||
      head.col < 0 ||
      head.col >= COLS
    );
  };

  // const changeTheme = () => {

  // }

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood());
    setGameOver(false);
    setScore(0);
  };

  useEffect(() => {
    if (!gameOver && !isPause) {
      const moveSnake = () => {
        const newSnake = snake.map((segment) => ({ ...segment }));

        const head = { ...newSnake[0] };

        switch (direction) {
          case "UP":
            head.row = (head.row - 1 + ROWS) % ROWS;
            break;
          case "DOWN":
            head.row = (head.row + 1) % ROWS;
            break;
          case "LEFT":
            head.col = (head.col - 1 + COLS) % COLS;
            break;
          case "RIGHT":
            head.col = (head.col + 1) % COLS;
            break;
          default:
            break;
        }

        newSnake.unshift(head);

        if (head.row === food.row && head.col === food.col) {
          setFood(generateFood());
          setScore(score + 1);
        } else {
          newSnake.pop();
        }

        if (checkCollision(newSnake)) {
          setGameOver(true);
        } else {
          setSnake(newSnake);
        }
      };

      const gameInterval = setInterval(moveSnake, 100);

      return () => {
        clearInterval(gameInterval);
      };
    }
  }, [snake, direction, food, gameOver, isPause, score]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setDirection("UP");
          break;
        case "ArrowDown":
          setDirection("DOWN");
          break;
        case "ArrowLeft":
          setDirection("LEFT");
          break;
        case "ArrowRight":
          setDirection("RIGHT");
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="game-container">
      <div className="App">
        <div className="game-board">
          {Array.from({ length: ROWS }).map((_, rowIndex) => (
            <div key={rowIndex} className="row">
              {Array.from({ length: COLS }).map((_, colIndex) => (
                <div
                  key={colIndex}
                  className={`cell ${
                    snake.some(
                      (segment) =>
                        segment.row === rowIndex && segment.col === colIndex
                    )
                      ? "snake"
                      : ""
                  } ${
                    food.row === rowIndex && food.col === colIndex ? "food" : ""
                  }`}
                ></div>
              ))}
            </div>
          ))}
        </div>
        {gameOver && (
          <div className="dialog">
            <div className="reset">
              <p>
                Game Over! <p>Your Score was {score}</p>
              </p>
              <div className="btn-div">
                <button onClick={resetGame}>Restart</button>
                <button className="btn">
                  <Link to="/">Go To Home</Link>
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="control">
          <button
            onClick={() => {
              setIsPause(!isPause);
            }}
          >
            {" "}
            {isPause ? "Resume" : "Pause"}
          </button>
          <button>
            <Link to="/">Go To Home</Link>
          </button>
          <p> Score : {score}</p>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
