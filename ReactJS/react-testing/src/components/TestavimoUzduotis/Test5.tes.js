import { render, screen } from "@testing-library/react";

describe("Profile image 1", () => {
  test("Profile image 1", () => {
    const price = 12;

    const ProductPrice = () => {
      return <p>Price: {price.toFixed(2)}</p>;
    };

    render(<ProductPrice />);
    expect(screen.getByText(/Price: 12.00/)).toBeInTheDocument();
  });
});
