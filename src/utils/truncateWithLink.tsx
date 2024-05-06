export const truncateWithLink = (
  inputText: string,
  maxWords: number,
  href: string,
) => {
  const words = inputText.split(/\s+/);
  const truncatedText = words.slice(0, maxWords).join(" ");

  return `${truncatedText} <a style="text-decoration: underline" href="${href}">подробнее...</a>`;
};
