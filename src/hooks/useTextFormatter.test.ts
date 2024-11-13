import { renderHook, act } from "@testing-library/react";
import useTextFormatter from "./useTextFormatter";

describe("useTextFormatter", () => {
  it("should format text with given options", () => {
    const { result } = renderHook(() => useTextFormatter(false));
    const formatOption = {
      color: "red",
      fontSize: 16,
      italic: true,
      bold: true,
      underline: true,
    };

    act(() => {
      result.current.formatText("Hello World", formatOption);
    });

    expect(result.current.formattedText).toBe(
      '<span style="color: red; font-size: 16px; font-style: italic; font-weight: bold; text-decoration: underline">Hello World</span>'
    );
  });

  it("should sanitize and format text when isSanitized is true", () => {
    const { result } = renderHook(() => useTextFormatter(true));
    const formatOption = {
      color: "green",
      fontSize: 14,
      italic: false,
      bold: false,
      underline: false,
    };

    act(() => {
      result.current.formatText("<script>alert('Hello')</script> World", formatOption);
    });

    expect(result.current.formattedText).toBe(
      `<span style="color: green; font-size: 14px; font-style: normal; font-weight: normal; text-decoration: none">alert('Hello') World</span>`
    );
  });

  it("should remove HTML tags when isSanitized is true", () => {
    const { result } = renderHook(() => useTextFormatter(true));
    const formatOption = {
      color: "green",
      fontSize: 14,
      italic: false,
      bold: false,
      underline: false,
    };

    act(() => {
      result.current.formatText("<b>Bold</b> and <i>Italic</i>", formatOption);
    });

    expect(result.current.formattedText).toBe(
      '<span style="color: green; font-size: 14px; font-style: normal; font-weight: normal; text-decoration: none">Bold and Italic</span>'
    );
  });
});