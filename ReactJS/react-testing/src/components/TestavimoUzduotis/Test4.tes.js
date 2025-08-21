import { render, screen } from "@testing-library/react";

describe("Profile image 1", () => {
  test("Profile image 1", () => {
    const character = {
      name: "John Doe",
      image: "https://placekitten.com/200/300",
    };
    const HelloWorld = () => (
      <div>
        <img src={character.image} alt={character.name} />
        <h1>{character.name}</h1>
      </div>
    );
    render(<HelloWorld />);
    expect(screen.getByRole("img")).toHaveAttribute("src", character.image);
    expect(screen.getByRole("img")).toHaveAccessibleName(character.name);
    expect(screen.getByRole("heading")).toHaveTextContent(character.name);
  });
});
