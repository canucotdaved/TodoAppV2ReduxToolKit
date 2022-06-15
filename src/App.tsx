import React from "react";
import "./App.css";
import Todo from "./Todo";
import Add from "./Todo/Add";
import Display from "./Todo/Display";

function App() {
  return (
    <>
      <Todo>
        <Add />
        <Display />
      </Todo>
    </>
  );
}

export default App;
