import React from "react";
import { IButtonTypes } from "./types";

const Button: React.FC<IButtonTypes> = ({ className, click, children }) => {
  return (
    <button className={`${className} px-8 py-4 rounded`} onClick={click}>
      {children}
    </button>
  );
};

export default Button;
