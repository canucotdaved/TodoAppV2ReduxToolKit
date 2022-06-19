import React, { useRef, useState } from "react";
import { IPropTypes } from "./types";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { updateTodo } from "../../redux/reducer";
import { BiRightArrow, BiDownArrow } from "react-icons/bi";

const variant = {
  hidden: {
    opacity: 0,
    x: "600px",
  },
  show: {
    opacity: 1,
    x: "0px",
    transition: {
      ease: "easeInOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

const buttonsvariant = {
  open: {
    x: 50,
    opacity: 0,
  },
  close: {
    opacity: 1,
    transition: {
      duration: 0.5,
      x: { stiffness: 1000, velocity: -100 },
    },
  },
};
const Card: React.FC<IPropTypes> = ({
  title,
  description,
  complete,
  Delete,
  date,
  completed,
  id,
}) => {
  const textInput = useRef(null);
  const dispatch = useDispatch<AppDispatch>();
  const [disable, setDisabled] = useState<boolean>(true);
  const [hidden, setHidden] = useState<boolean>(true);

  const editButtonHandler = () => {
    setHidden(!hidden);
    setDisabled(!disable);
    //@ts-ignore
    textInput.current.focus();
  };

  const editHandler = (e: any, id: string) => {
    if (e.which === 13) {
      dispatch(updateTodo({ id, title: e.target.value }));
      setDisabled(!disable);
    }
  };

  const DeleteHandler = () => {
    setHidden(!hidden);
    Delete();
  };

  const CompleteHandler = () => {
    setHidden(!hidden);
    complete();
  };
  return (
    <motion.div
      variants={variant}
      exit={{ x: "-600px", opacity: 0 }}
      className="mt-5 z-0 flex"
    >
      <motion.div
        variants={buttonsvariant}
        animate={hidden}
        className={`${
          !completed ? "bg-white" : "bg-green-400"
        } rounded p-5 drop-shadow-2xl shadow-xl flex justify-between relative ${
          hidden ? "w-full" : "w-[90%]"
        } transition-all ease-in-out duration-1000"`}
      >
        <div className="flex flex-col">
          <input
            type="text"
            className={`text-base text-gray-800 font-bold border-0 p-0 focus:ring-1 focus:border ${
              completed ? `line-through bg-green-400	` : null
            } ${!disable ? "ring-1 p-2 " : null}`}
            ref={textInput}
            defaultValue={title}
            disabled={disable}
            onKeyPress={(e: any) => editHandler(e, id)}
          />
          <p className="text-sm text-gray-600 py-1">{description}</p>
          <span className="text-xs text-gray-400">Added {date}</span>
        </div>
        {hidden ? (
          <button onClick={() => setHidden(!hidden)} className="flex">
            <BiRightArrow />
          </button>
        ) : (
          <button onClick={() => setHidden(!hidden)} className="flex">
            <BiDownArrow />
          </button>
        )}
      </motion.div>
      <motion.div
        variants={buttonsvariant}
        animate={hidden ? "open" : "close"}
        className={`${hidden ? "hidden" : "block"} flex flex-col ml-1`}
      >
        <div
          className={`bg-green-600 text-white p-1 text-center ${
            completed ? "hidden" : "block"
          }`}
        >
          <button onClick={() => CompleteHandler()} className="">
            Complete
          </button>
        </div>
        <div
          className={`bg-sky-400 text-white p-1 text-center my-1 ${
            completed ? "hidden" : "block"
          }`}
        >
          <button onClick={() => editButtonHandler()}>Edit</button>
        </div>
        <div className="bg-red-700 text-white p-1 text-center">
          <button onClick={() => DeleteHandler()}>Delete</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
