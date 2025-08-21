import { render, screen } from "@testing-library/react";

describe("Profile image 1", () => {
  test("Profile image 1", () => {
    const imagePath = "https://placekitten.com/200/300";
    const HelloWorld = () => <img src={`${imagePath}`} />;
    render(<HelloWorld />);
    expect(screen.getByRole("img")).toHaveAttribute("src", imagePath);
  });
});
