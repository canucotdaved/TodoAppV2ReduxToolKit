import React, { useRef, useState } from "react";
import { IPropTypes } from "./types";
import { motion } from "framer-motion";
import { Card as Cards, Dropdown } from "flowbite-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { updateTodo } from "../../redux/reducer";

const variant = {
  hidden: {
    opacity: 0,
    x: "600px",
  },
  show: {
    opacity: 1,
    x: "0px",
    transition: {
      ease: "easeIn",
      type: "spring",
      stiffness: 100,
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

  const editButtonHandler = () => {
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

  return (
    <motion.div
      variants={variant}
      exit={{ x: "-600px", opacity: 0 }}
      className="mt-5 z-0"
    >
      <Cards>
        <div className="flex flex-row-reverse justify-between">
          <div>
            <Dropdown inline={true} label="" style={{ top: "40px" }}>
              <Dropdown.Item onClick={() => editButtonHandler()}>
                <button className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                  Edit
                </button>
              </Dropdown.Item>
              {!completed && (
                <Dropdown.Item>
                  <button
                    onClick={complete}
                    className="block py-2 px-4 text-sm text-green-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Complete
                  </button>
                </Dropdown.Item>
              )}
              <Dropdown.Item>
                <button
                  onClick={Delete}
                  className="block py-2 px-4 text-sm text-red-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Delete
                </button>
              </Dropdown.Item>
            </Dropdown>
          </div>
          <div>
            <input
              type="text"
              className={`text-base text-gray-800 font-bold border-0 p-0 focus:ring-1 focus:border ${
                completed ? `line-through	` : null
              } ${!disable ? "ring-1 p-2 " : null}`}
              ref={textInput}
              defaultValue={title}
              disabled={disable}
              onKeyPress={(e: any) => editHandler(e, id)}
            />

            <p className="text-sm text-gray-600 py-1">{description}</p>
            <span className="text-xs text-gray-400">Added {date}</span>
          </div>
        </div>
      </Cards>
    </motion.div>
  );
};

export default Card;
