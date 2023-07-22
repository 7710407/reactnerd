import React, { useContext } from "react";
import { ModeContext } from "./ModeContext";

const Btn = () => {
  const { isDarkMode, toggleMode } = useContext(ModeContext);

  const clickHandler = () => {
    toggleMode(); 
  };

  return (
    <button
      onClick={clickHandler}
      className={`switch-btn ${isDarkMode? "active": ""}`}
    >
      <div className="switch"></div>
    </button>
  );
};

export default Btn;
