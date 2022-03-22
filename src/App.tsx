import Reat, { useContext, useEffect, useState } from "react";
import "./App.css";
import banner from "../assets/banner.jpg";
import { TodoListContext } from "./context/TodoListContext";
import { useTodoList } from "./hooks/useTodoList";
import { CreateTodo } from "./components/CreateTodo";
import { TodoList } from "./components/TodoList";
import { FilterList } from "./components/FilterList";

function App() {
  return (
    <TodoListContext.Provider value={useTodoList()}>
      <div className="container">
        <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
          <h1 className="title">T O D O</h1>
          <CreateTodo />
        </div>
        <TodoList />
        <FilterList />
      </div>
    </TodoListContext.Provider>
  );
}

export default App;
