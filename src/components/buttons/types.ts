import React from "react";

export interface IButtonTypes {
  className: String;
  click: () => void;
  children: React.ReactNode;
}
