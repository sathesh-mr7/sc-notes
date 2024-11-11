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

export const debounce = (callback: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(() => callback(...args), delay);
  };
};

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
      color: "#535353",
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

export function isMobileDevice(): boolean {
  const userAgent = navigator.userAgent;
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(userAgent);
}
