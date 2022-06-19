import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card";
import { AppDispatch, RootState } from "../../redux/store";
import { AnimatePresence } from "framer-motion";
import moment from "moment";
import { removeTodo, CompleteTodo } from "../../redux/reducer";
import Button from "../../components/buttons";
const Display = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todoList = useSelector((state: RootState) => state.todo);
  const [sort, setSort] = useState("All");

  const completeHandler = (id: string, completed: boolean) => {
    dispatch(CompleteTodo({ id, completed }));
  };

  const removerHandler = (id: string) => {
    dispatch(removeTodo({ id }));
  };

  const sortAll = () => {
    setSort("All");
  };
  const sortActive = () => {
    setSort("Active");
  };
  const sortComplete = () => {
    setSort("Completed");
  };

  return (
    <>
      <div className="flex justify-center mt-5">
        <Button className="bg-white" click={sortAll}>
          All
        </Button>
        <Button className="bg-sky-400 mx-4 text-white" click={sortActive}>
          Active
        </Button>
        <Button className="bg-green-400 text-white" click={sortComplete}>
          Completed
        </Button>
      </div>
      <AnimatePresence>
        {todoList.length > 0 && sort === "All"
          ? todoList.map((item: any) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                complete={() => completeHandler(item.id, !item.completed)}
                Delete={() => removerHandler(item.id)}
                date={moment(item.date).startOf("hour").fromNow()}
                completed={item.completed}
              />
            ))
          : null}
        {todoList.length > 0 && sort === "Active"
          ? todoList.map(
              (item: any) =>
                !item.completed && (
                  <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    complete={() => completeHandler(item.id, !item.completed)}
                    Delete={() => removerHandler(item.id)}
                    date={moment(item.date).startOf("hour").fromNow()}
                    completed={item.completed}
                  />
                )
            )
          : null}
        {todoList.length > 0 && sort === "Completed"
          ? todoList.map(
              (item: any) =>
                item.completed && (
                  <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    complete={() => completeHandler(item.id, !item.completed)}
                    Delete={() => removerHandler(item.id)}
                    date={moment(item.date).startOf("hour").fromNow()}
                    completed={item.completed}
                  />
                )
            )
          : null}
      </AnimatePresence>
    </>
  );
};

export default Display;
