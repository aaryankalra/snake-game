import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: props.bgcolor,
          color: props.color,
          marginBottom: "5px",
        }}
        className="btn"
        onClick={props.onClick}
      >
        <Link to={props.goTo} style={{ color: props.color }}>
          {props.text}
        </Link>
      </button>
    </div>
  );
};

Button.defaultProps = {
  bgcolor: "black",
  color: "white",
  text: "Button",
};

export default Button;
