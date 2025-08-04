import { render, screen } from "@testing-library/react";

describe("Profile image 1", () => {
  test("Profile image 1", () => {
    const html = `
    <div>
    <h1>John Doe</h1>
    <img src="https://placekitten.com/200/300"  style="border: 1px solid blue;" />
    </div>`;
    const HelloWorld = () => <div dangerouslySetInnerHTML={{ __html: html }} />;
    render(<HelloWorld />);
    expect(screen.getByRole("heading")).toHaveTextContent(/John Doe/);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
