import { render, screen } from "@testing-library/react";

describe("Profile image 1", () => {
  test("renders a link with correct href and label", () => {
    const LinkComponent = () => (
      <div>
        <a href="https://openai.com">OpenAI</a>
      </div>
    );
    render(<LinkComponent />);
    const link = screen.getByRole("link", { name: "OpenAI" });
    expect(link).toHaveAttribute("href", "https://openai.com");
  });
});
