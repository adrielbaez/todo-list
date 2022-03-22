import React, { useContext, useEffect } from "react";
import { TodoListContext } from "../context/TodoListContext";
import { Todo } from "../interface/Todo";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { listCurrent, list, setListCurrent } = useContext(TodoListContext);
  useEffect(() => {
    setListCurrent([...list]);
  }, [list]);

  return (
    <div className="todo-list">
      {[...listCurrent].reverse().map((item: Todo) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </div>
  );
};
