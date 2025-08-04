import { render, screen } from "@testing-library/react";

describe("Profile image 1", () => {
  test("renders heading from props", () => {
    const Title = ({ text }) => <h1>{text}</h1>;
    render(<Title text="Dynamic Title" />);
    expect(screen.getByRole("heading")).toHaveTextContent("Dynamic Title");
  });
});
