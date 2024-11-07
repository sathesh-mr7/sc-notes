import { render, fireEvent, screen } from "@testing-library/react";
import AddNotesButton from "./AddNotesButton";

describe("AddNotesButton", () => {
  it("renders correctly with correct text and icon", () => {
    render(<AddNotesButton onClick={() => {}} />);
    expect(screen.getByText("Add Notes")).toBeInTheDocument();
    expect(screen.getByAltText("+")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<AddNotesButton onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("has the correct class name", () => {
    render(<AddNotesButton onClick={() => {}} />);
    expect(screen.getByRole("button")).toHaveClass("addNotesButton");
  });
});