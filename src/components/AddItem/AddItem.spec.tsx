import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AddItem from "./AddItem";

describe("AddItem =>", () => {
  it("Should not submit if input field is empty", () => {
    const setTodoList = jest.fn();
    render(<AddItem todoList={[]} setTodoList={setTodoList} />);
    const inputLm = screen.getByTestId("add") as HTMLInputElement;
    expect(inputLm.value).toBe("");
    fireEvent.click(screen.getByText("Add New Item"));
    expect(setTodoList).not.toHaveBeenCalled();
  });

  it("Should update todoList when new item is added by clicking submit", () => {
    const setTodoList = jest.fn();
    render(
      <AddItem
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
        setTodoList={setTodoList}
      />
    );
    const inputLm = screen.getByTestId("add") as HTMLInputElement;
    fireEvent.change(inputLm, { target: { value: "Task5" } });
    fireEvent.click(screen.getByText("Add New Item"));
    expect(setTodoList.mock.calls[0][0]).toHaveLength(3);
    expect(setTodoList.mock.calls[0][0][0]).toMatchObject({
      id: expect.any(Number),
      name: "Task5",
      isCompleted: false,
    });
  });
});
