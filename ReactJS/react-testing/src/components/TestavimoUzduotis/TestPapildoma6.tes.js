import { render, screen } from "@testing-library/react";

describe("Profile image 1", () => {
  test("renders message when isLoggedIn is true", () => {
    const WelcomeMessage = ({ isLoggedIn }) => <div>Welcome back!</div>;
    render(<WelcomeMessage isLoggedIn={true} />);
    expect(screen.getByText("Welcome back!")).toBeInTheDocument();
  });
});
