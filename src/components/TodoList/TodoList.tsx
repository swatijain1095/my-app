import React from "react";
import { TaskName } from "../../types";
import TodoItem from "../TodoItem/TodoItem";
import { EMPTY_MSG } from "./constants";

interface TodoListProps {
  todoList: TaskName[];
  setTodoList: React.Dispatch<React.SetStateAction<TaskName[]>>;
}
const TodoList = ({ todoList, setTodoList }: TodoListProps) => {
  const handleDelete = (id: number) => {
    const todoListCopy = todoList.filter((item) => {
      return id !== item.id;
    });
    setTodoList(todoListCopy);
  };

  const handleSelect = (id: number, check: boolean) => {
    const todoListCopy = [...todoList];
    const i = todoListCopy.findIndex((item) => item.id === id);
    todoListCopy[i].isCompleted = check;
    setTodoList(todoListCopy);
  };

  const handleEdit = (id: number, value: string) => {
    const todoListCopy = todoList.map((item) => {
      if (id === item.id) {
        return { ...item, name: value };
      } else {
        return item;
      }
    });
    setTodoList(todoListCopy);
  };

  return (
    <>
      <ul>
        {todoList.length === 0
          ? EMPTY_MSG
          : todoList.map((todoItem) => (
              <TodoItem
                key={todoItem.id}
                {...todoItem}
                handleDelete={handleDelete}
                handleSelect={handleSelect}
                handleEdit={handleEdit}
              />
            ))}
      </ul>
    </>
  );
};

export default TodoList;
