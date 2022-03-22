import React, { useContext, useEffect, useState } from "react";
import svg from "../../assets/icon-check.svg";
import svg2 from "../../assets/icon-cross.svg";
import { TodoListContext } from "../context/TodoListContext";
import { Todo } from "../interface/Todo";

interface Props {
  item: Todo;
}

export const TodoItem = ({ item: task }: Props) => {
  const { setList, listCurrent, setListCurrent, list } =
    useContext(TodoListContext);

  let stylesText = {
    textDecoration: "line-through",
    color: "hsl(237, 14%, 26%)",
  };
  const handleStatusTask = () => {
    setList((prevList: Todo[]) => {
      return prevList.map((item: Todo) => {
        if (item.id === task.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  };
  const handleDeleteTask = () => {
    setList((prevList: Todo[]) => {
      return prevList.filter((item: Todo) => item.id !== task.id);
    });
  };

  return (
    <div className="container__todo" onClick={handleStatusTask}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={`check-todo ${task.completed ? "checked" : ""}`}>
          <img
            className={`${task.completed ? "check" : "not-checked"}`}
            src={svg}
            alt="check icon"
          />
        </div>
        <p className={`task-text`} style={task.completed ? stylesText : {}}>
          {task.text}
        </p>
      </div>
      <div onClick={handleDeleteTask}>
        <img src={svg2} alt="cross icon" style={{ marginRight: 10 }} />
      </div>
    </div>
  );
};

{
  /* <input
  className="input__create-todo"
  type="text"
  placeholder="What needs to be done?"
/> */
}
{
}
