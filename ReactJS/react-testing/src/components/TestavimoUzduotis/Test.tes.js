import { render, screen } from "@testing-library/react";

describe("JSX basics", () => {
  test("hello john doe", () => {
    const name = "John Doe";
    const HelloWorld = () => <div>Hello, {name}</div>;
    render(<HelloWorld />);
    expect(screen.getByText(/Hello, John Doe/)).toBeInTheDocument;
  });
});
