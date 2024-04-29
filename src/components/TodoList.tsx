import React from "react";
import { TaskName } from "../types";
import TodoItem from "./TodoItem/TodoItem";

interface TodoListProps {
  todoList: TaskName[];
  setTodoList: React.Dispatch<React.SetStateAction<TaskName[]>>;
}
const TodoList = ({ todoList, setTodoList }: TodoListProps) => {
  return (
    <ul>
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} {...todoItem} />
      ))}
    </ul>
  );
};

export default TodoList;
