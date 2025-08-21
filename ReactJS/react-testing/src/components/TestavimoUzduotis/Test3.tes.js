import { render, screen } from "@testing-library/react";

describe("Profile image 1", () => {
  test("Profile image 1", () => {
    const html = `<img src="https://placekitten.com/200/300"  style="border: 1px solid blue;" />`;
    const HelloWorld = () => <div dangerouslySetInnerHTML={{ __html: html }} />;
    render(<HelloWorld />);
    expect(screen.getByRole("img")).toHaveAttribute(
      "style",
      "border: 1px solid blue;"
    );
  });
});
