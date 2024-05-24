import React from "react";
import { useState } from "react";
import "./EnterName.css";

export const EnterName = () => {
  const [name, setName] = useState("");

  const onChange = (e) => {
    let newName = e.target.value;
    setName(newName);
  };

  return (
    <div>
      <form>
        <label>
          <h2>What would you like to be called?</h2>
          <input
            type="text"
            onChange={onChange}
            placeholder="Enter your name"
            value={name}
          />
        </label>
      </form>
      <div>
        <h1>Hello {name}</h1>
      </div>
    </div>
  );
};

export default EnterName;
