import { render, screen } from "@testing-library/react";

describe("Profile image 1", () => {
  test("renders a button with label 'Click Me'", () => {
    const ClickButton = () => <button>Click Me</button>;
    render(<ClickButton />);
    expect(screen.getByRole("button")).toHaveTextContent("Click Me");
  });
});
