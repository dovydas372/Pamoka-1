import { render, screen, fireEvent } from "@testing-library/react";
import { useState } from "react";

describe("Profile image 1", () => {
  test("renders a table with Name and Age headers", () => {
    const TableComponent = () => (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
      </table>
    );
    render(<TableComponent />);
    expect(
      screen.getByRole("columnheader", { name: "Name" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Age" })
    ).toBeInTheDocument();
  });
});
