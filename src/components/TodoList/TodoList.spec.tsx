import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import { EMPTY_MSG } from "./constants";

describe("Todo List =>", () => {
  it("Should show empty message when list is empty!", () => {
    render(<TodoList todoList={[]} setTodoList={() => {}} />);
    expect(screen.getByText(EMPTY_MSG)).toBeDefined();
  });

  it("Should show 2 items in todo list", () => {
    render(
      <TodoList
        todoList={[
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
        ]}
        setTodoList={() => {}}
      />
    );
    // expect(screen.getByText("Task1").style.textDecoration).toBe("line-through");
    expect(screen.getByText("Task1")).toBeDefined();
    expect(screen.getByText("Task2")).toBeDefined();
  });

  // Should cross check the item that is selected (you have to click it first and then it should apprear as cross checked)

  // Should be deleted from the list when clicked on delete
});
