import { useState } from "react";
import "./style.scss";
import { TaskName } from "../../types";

interface TodoListProps {
  todoList: TaskName[];
  setTodoList: React.Dispatch<React.SetStateAction<TaskName[]>>;
}

const AddItem = ({ todoList, setTodoList }: TodoListProps) => {
  const [value, setValue] = useState("");
  const { faker } = require("@faker-js/faker");
  const handleAdd = (value: string) => {
    const id: number = faker.number.int({ max: 200 });
    const todoListCopy = [...todoList];
    todoListCopy.unshift({
      id,
      name: value,
      isCompleted: false,
    });
    setTodoList(todoListCopy);
    setValue("");
  };

  return (
    <div className="Add-btn">
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Add new to-do item here!"
      />
      <button
        onClick={() => {
          handleAdd(value);
        }}
      >
        Add New Item
      </button>
    </div>
  );
};

export default AddItem;
