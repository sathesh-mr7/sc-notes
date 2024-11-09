import { useState } from "react";
import sanitizeHtml from "sanitize-html";
import { removeHtmlTags } from "../utils/helper";

const useTextFormatter = (isSanitized?: boolean) => {
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
    let cleanHtml = sanitizeHtml(text);

    if (isSanitized) {
      cleanHtml = removeHtmlTags(text);
    }

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
