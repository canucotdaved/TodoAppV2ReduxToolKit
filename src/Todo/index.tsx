import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IPropType {
  children: ReactNode;
}

const variant = {
  hidden: {
    opacity: 0,
    y: "60px",
  },
  show: {
    opacity: 1,
    y: "0px",
    transition: {
      duration: 0.5,
      ease: "easeIn",
      type: "Spring",
      stiffness: 100,
      staggerChildren: 0.5,
    },
  },
};

const Todo: React.FC<IPropType> = ({ children }) => {
  return (
    <AnimatePresence>
      <div className="max-w-full h-screen bg-sky-600">
        <motion.div
          initial="hidden"
          animate="show"
          variants={variant}
          className="w-1/2 mx-auto flex flex-col items-center py-5"
        >
          <h1 className="font-bold my-5 text-3xl text-white">
            Todo App with Redux Toolkit
          </h1>
          <div className="flex flex-col">{children}</div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Todo;
