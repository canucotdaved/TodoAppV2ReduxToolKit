import React from "react";
import Add from "./Add";
import Display from "./Display";

const Todo = () => {
  return (
    <div className="max-w-full h-screen bg-sky-600">
      <div className="w-1/2 mx-auto flex flex-col items-center py-5">
        <h1 className="font-bold my-5 text-3xl text-white">
          Todo App with Redux Toolkit
        </h1>
        <div className="flex flex-col">
          <Add />
          <Display />
        </div>
      </div>
    </div>
  );
};

export default Todo;
