import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  it("renders without crashing", () => {
    render(<Input value="" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("displays the correct value", () => {
    render(<Input value="test value" />);
    expect(screen.getByRole("textbox")).toHaveValue("test value");
  });

  it("calls onChange handler when value changes", () => {
    const handleChange = jest.fn();
    render(<Input value="" onChange={handleChange} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "new value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    render(<Input value="" className="custom-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });

  it("spreads additional props to the input element", () => {
    render(<Input value="" data-testid="custom-input" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("data-testid", "custom-input");
  });
});