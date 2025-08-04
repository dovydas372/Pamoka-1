import { render, screen, fireEvent } from "@testing-library/react";
import { useState } from "react";

describe("Profile image 1", () => {
  test("increments count on button click", () => {
    const Counter = () => {
      const [count, setCount] = useState(0);
      return (
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      );
    };

    render(<Counter />);

    const button = screen.getByRole("button", { name: "Count: 0" });
    fireEvent.click(button);

    expect(
      screen.getByRole("button", { name: "Count: 1" })
    ).toBeInTheDocument();
  });
});
