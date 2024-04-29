import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe("TodoItem =>", () => {
  it("Should call handleDelete when clicked on Delete", () => {
    const handleDelete = jest.fn();
    render(
      <TodoItem
        id={1}
        name="Task1"
        isCompleted={false}
        handleDelete={handleDelete}
        handleSelect={() => {}}
        handleEdit={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("delete-1"));
    expect(handleDelete).toHaveBeenCalledWith(1);
  });

  it("Should call handleSelect when clicked on Checkbox", () => {
    const handleSelect = jest.fn();
    render(
      <TodoItem
        id={1}
        name="Task1"
        isCompleted={false}
        handleDelete={() => {}}
        handleSelect={handleSelect}
        handleEdit={() => {}}
      />
    );
    fireEvent.click(screen.getByTestId("check-1"));
    expect(handleSelect).toHaveBeenCalledWith(1, true);
  });
});
