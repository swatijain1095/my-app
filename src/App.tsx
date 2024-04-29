import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import { TaskName } from "./types";
import "./style.scss";

function App() {
  const list: { id: number; name: string; isCompleted: boolean }[] = [
    {
      id: 1,
      name: "Task1",
      isCompleted: false,
    },
    {
      id: 2,
      name: "Task2",
      isCompleted: false,
    },
    {
      id: 3,
      name: "Task3",
      isCompleted: false,
    },
  ];

  const [todoList, setTodoList] = useState<TaskName[]>(list);
  return (
    <div className="container">
      <div>
        <h1>To-Do List</h1>
      </div>
      <div className="Add-btn">
        <button>Add New Item</button>
      </div>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
