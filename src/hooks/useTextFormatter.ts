import { useState } from "react";
import sanitizeHtml from 'sanitize-html';

const useTextFormatter = () => {
  const [formattedText, setFormattedText] = useState("");
  const formatText = (
    text: string,
    formatOption: TextFormatOption,
  ) => {
    const styled = {
      "color": formatOption.color,
      "font-size": `${formatOption.fontSize}px`,
      "font-style": formatOption.italic ? "italic" : "normal",
      "font-weight": formatOption.bold ? "bold" : "normal",
      "text-decoration": formatOption.underline ? "underline" : "none",
    };

    const cleanHtml = sanitizeHtml(text);

    const newText = cleanHtml.replace(
      cleanHtml,
      `<span style="${
        Object.entries(styled).map(([key, value]) => `${key}: ${value}`).join(
          "; ",
        )
      }">${cleanHtml}</span>`,
    );
    setFormattedText(() => newText);
  };

  return { formattedText, formatText };
};

export default useTextFormatter;
