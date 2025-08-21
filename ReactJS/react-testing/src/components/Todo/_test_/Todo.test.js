import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /add/i });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("renders same text passed into title prop", () => {
    render(<MockTodo />);

    addTask(["Buy groceries"]);
    const divElement = screen.getByText(/Buy groceries/i);
    expect(divElement).toBeInTheDocument();
  });

  it("renders multiple items", () => {
    render(<MockTodo />);
    addTask(["Buy groceries", "Fix car", "Clean garage"]);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).not.toBe(5);
  });

  it("renders same text passed into title prop", () => {
    render(<MockTodo />);

    addTask(["Buy groceries"]);
    const divElement = screen.getByText(/Buy groceries/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("renders multiple items", () => {
    render(<MockTodo />);
    addTask(["Buy groceries", "Fix car", "Clean garage"]);
    const divElement = screen.getByText("Buy groceries");
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
