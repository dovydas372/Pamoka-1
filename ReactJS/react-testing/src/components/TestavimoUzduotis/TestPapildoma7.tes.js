import { render, screen } from "@testing-library/react";

describe("Profile image 1", () => {
  test("renders input with accessible label", () => {
    const NameForm = () => (
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div>
    );
    render(<NameForm />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });
});
