import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../redux/reducer";
import { AppDispatch } from "../../redux/store";
import { v4 as uuidv4 } from "uuid";

const Add = () => {
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const inputHandler = () => {
    if (title === "" || description === "") {
      alert("Input is requred");
    } else {
      dispatch(
        addTodos({
          title,
          description,
          completed: false,
          dateAdded: Date.now(),
          id: uuidv4(),
        })
      );
      setDiscription("");
      setTitle("");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <input
        type="text"
        className="p-3 font-mono rounded"
        value={title}
        placeholder="Task Title"
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="p-3 font-mono rounded mx-5"
        value={description}
        placeholder="Task Description"
        onChange={(e: any) => setDiscription(e.target.value)}
      />
      <button
        className="text-white p-3 rounded bg-green-500"
        onClick={() => inputHandler()}
      >
        Add Task
      </button>
    </div>
  );
};

export default Add;
