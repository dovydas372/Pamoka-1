import { render, screen } from "@testing-library/react";

describe("Profile image 1", () => {
  test("renders an image with src and alt text", () => {
    const ImgComponent = () => (
      <div>
        <img src="https://placekitten.com/200/300" alt="Cute cat" />
      </div>
    );
    render(<ImgComponent />);
    const img = screen.getByRole("img", { name: "Cute cat" });
    expect(img).toHaveAttribute("src", "https://placekitten.com/200/300");
  });
});
