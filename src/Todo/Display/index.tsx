import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card";
import { AppDispatch, RootState } from "../../redux/store";
import { AnimatePresence } from "framer-motion";
import moment from "moment";
const Display = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todoList = useSelector((state: RootState) => state.todo);

  const Remove = (id: string) => {
    console.log("dasdasdas");
  };

  const completeHandler = (id: string, completed: boolean) => {
    console.log("dasdasdas");
  };

  console.log(todoList);

  return (
    <AnimatePresence>
      {todoList.length > 0 &&
        todoList.map((item: any) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            complete={() => completeHandler(item.id, !item.completed)}
            Delete={() => Remove(item.id)}
            date={moment(item.date).fromNow()}
            completed={item.completed}
          />
        ))}
    </AnimatePresence>
  );
};

export default Display;
