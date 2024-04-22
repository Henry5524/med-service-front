export function truncateText(inputText: string, maxNumWords: number): string {
  const words = inputText.split(/\s+/);
  const truncated = words.slice(0, maxNumWords);
  return truncated.join(' ');
}
