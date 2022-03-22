import React, { useState } from "react";
import { Todo } from "../interface/Todo";

export const useTodoList = () => {
  const [list, setList] = useState<Todo[]>([]);
  const [listCurrent, setListCurrent] = useState<Todo[]>([]);

  return {
    list,
    setList,
    listCurrent,
    setListCurrent,
  };
};
