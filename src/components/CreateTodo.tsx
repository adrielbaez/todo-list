import React, { useContext } from "react";
import { TodoListContext } from "../context/TodoListContext";
import { Todo } from "../interface/Todo";

export const CreateTodo = () => {
  const [text, setText] = React.useState("");
  const { setList } = useContext(TodoListContext);
  const handleTextInput = (e: any) => {
    setText(e.target.value);
  };

  const handleKeyEnter = (e: any) => {
    if (e.key === "Enter") {
      setList((prevList: Todo[]) => {
        return [...prevList, { id: Math.random(), text, completed: false }];
      });
      setText("");
    }
  };
  return (
    <div className="container__create-todo">
      <div className="check-todo"></div>
      <input
        className="input__create-todo"
        type="text"
        value={text}
        name="text"
        placeholder="What needs to be done?"
        onChange={handleTextInput}
        onKeyDown={handleKeyEnter}
      />
    </div>
  );
};
