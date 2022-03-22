import React, { useContext, useEffect, useRef, useState } from "react";
import { TodoListContext } from "../context/TodoListContext";
import { Todo } from "../interface/Todo";

export const FilterList = () => {
  const { list, setList, listCurrent, setListCurrent } =
    useContext(TodoListContext);

  const handleFilterList = (filterWord: string) => {
    switch (filterWord) {
      case "all":
        setListCurrent([...list]);
        break;
      case "active":
        setListCurrent([...list].filter((item: Todo) => !item.completed));
        break;
      case "completed":
        setListCurrent([...list].filter((item: Todo) => item.completed));
        break;
      default:
        setListCurrent([...list]);
    }
  };
  useEffect(() => {}, [listCurrent]);
  return (
    <div className="filter-list">
      <h4 onClick={() => handleFilterList("all")}>ALl</h4>
      <h4 onClick={() => handleFilterList("active")}>Active</h4>
      <h4 onClick={() => handleFilterList("completed")}>Completed</h4>
    </div>
  );
};
