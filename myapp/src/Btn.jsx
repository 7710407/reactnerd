import React, { useContext } from "react";
import { ModeContext } from "./ModeContext";

const Btn = () => {
  const { isDarkMode, toggleMode } = useContext(ModeContext);

  const clickHandler = () => {
    toggleMode(); // Call the toggleMode function from the context to change the mode.
  };

  return (
    <button
      onClick={clickHandler}
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      Click me
    </button>
  );
};

export default Btn;
