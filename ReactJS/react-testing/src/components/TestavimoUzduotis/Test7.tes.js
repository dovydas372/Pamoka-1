import { render, screen } from "@testing-library/react";

describe("Profile image 1", () => {
  test("Profile image 1", () => {
    const html = `
   <section data-testid = "blueberry"><h1>BlueBerry INC</h1></section>`;
    const HelloWorld = () => <div dangerouslySetInnerHTML={{ __html: html }} />;
    render(<HelloWorld />);
    expect(screen.getByTestId("blueberry")).toBeInTheDocument();
  });
});
