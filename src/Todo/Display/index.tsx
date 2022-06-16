import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card";
import { AppDispatch, RootState } from "../../redux/store";
import { AnimatePresence } from "framer-motion";
import moment from "moment";
import { removeTodo, CompleteTodo } from "../../redux/reducer";
const Display = () => {
  const dispatch = useDispatch<AppDispatch>();

  const todoList = useSelector((state: RootState) => state.todo);

  const completeHandler = (id: string, completed: boolean) => {
    dispatch(CompleteTodo({ id, completed }));
  };

  const removerHandler = (id: string) => {
    dispatch(removeTodo({ id }));
  };

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
            Delete={() => removerHandler(item.id)}
            date={moment(item.date).fromNow()}
            completed={item.completed}
          />
        ))}
    </AnimatePresence>
  );
};

export default Display;
