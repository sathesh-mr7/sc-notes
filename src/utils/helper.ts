/**
 * @param date
 * @returns string eg: 'Mar 24, 2024'
 */
export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
}

export function eventDebounce(callback: () => void, delay: number): () => void {
  let timer: NodeJS.Timeout;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(callback, delay);
  };
}

export function removeHtmlTags(text: string): string {
  const clean = /<.*?>/g;
  return text.replace(clean, "");
}

export function extractInlineStyles(html: string): { [key: string]: string } {
  const styleObject: { [key: string]: string } = {};
  const styleRegex = /style="([^"]*)"/;
  const match = html.match(styleRegex);
  if (match && match[1]) {
    const styles = match[1].split(";");
    styles.forEach((style) => {
      const [key, value] = style.split(":").map((s) => s.trim());
      if (key && value) {
        styleObject[key] = value;
      }
    });
  }
  return styleObject;
}

export function getTextFormatOptionFormHtml(html: string): TextFormatOption {
  const styleObject = extractInlineStyles(html);
  if (JSON.stringify(styleObject) === "{}") {
    return {
      bold: false,
      italic: false,
      underline: false,
      color: 'black',
      fontSize: 12,
    };
  }
  return {
    bold: styleObject["font-weight"] === "bold",
    italic: styleObject["font-style"] === "italic",
    underline: styleObject["text-decoration"] === "underline",
    color: styleObject["color"] || "black",
    fontSize: parseInt(styleObject["font-size"]) || 16,
  };
}