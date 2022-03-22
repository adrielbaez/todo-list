import { createContext } from "react";
import { Todo } from "../interface/Todo";

interface TodoListContext {
  list: Todo[];
  setList: Function;
  listCurrent: Todo[];
  setListCurrent: Function;
}
export const TodoListContext = createContext<TodoListContext>({
  list: [],
  setList: () => {},
  listCurrent: [],
  setListCurrent: () => {},
});
