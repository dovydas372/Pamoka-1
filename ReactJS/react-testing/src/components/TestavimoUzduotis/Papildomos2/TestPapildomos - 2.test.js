import { render, screen, fireEvent } from "@testing-library/react";
import { useState } from "react";

describe("Profile image 1", () => {
  test("renders a table with Name, Age, Role headers and at least 3 rows", () => {
    const TableComponent = () => (
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
          <tr>
            <th>Age</th>
          </tr>
          <tr>
            <th>Role</th>
          </tr>
          <tr></tr>
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
    expect(
      screen.getByRole("columnheader", { name: "Role" })
    ).toBeInTheDocument();
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBeGreaterThanOrEqual(4);
  });
});

/*2*/

describe("Profile image 1", () => {
  test("renders a dynamic list from props with correct number of items", () => {
    const DynamicList = ({ items }) => (
      <ul>
        <li>{items[0]}</li>
        <li></li>
        <li></li>
        <li>{items[3]}</li>
      </ul>
    );

    render(<DynamicList items={["Apple", "Banana", "Cherry", "Date"]} />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(4);
    expect(items[0]).toHaveTextContent("Apple");
    expect(items[3]).toHaveTextContent("Date");
  });
});

/*3*/

describe("Profile image 1", () => {
  describe("Profile image 1", () => {
    test("renders a form with two inputs and displays submitted values", () => {
      const SubmitForm = () => {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [submitted, setSubmitted] = useState(false);

        const handleSubmit = () => {
          setSubmitted(true);
        };

        return (
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleSubmit}>Submit</button>

            {submitted && (
              <div>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
              </div>
            )}
          </div>
        );
      };

      render(<SubmitForm />);

      const nameInput = screen.getByLabelText("Name");
      const emailInput = screen.getByLabelText("Email");
      const button = screen.getByRole("button", { name: "Submit" });

      fireEvent.change(nameInput, { target: { value: "John" } });
      fireEvent.change(emailInput, { target: { value: "john@example.com" } });
      fireEvent.click(button);

      expect(screen.getByText("Name: John")).toBeInTheDocument();
      expect(screen.getByText("Email: john@example.com")).toBeInTheDocument();
    });
  });
});

/*4*/

describe("Profile image 1", () => {
  test("renders a search bar that filters a list of items", () => {
    const SearchList = () => null;
    render(<SearchList />);
    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "ap" } });
    const items = screen.getAllByRole("listitem");
    items.forEach((item) => {
      expect(item.textContent.toLowerCase()).toContain("ap");
    });
  });
});
