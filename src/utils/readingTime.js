//makes the function public
export function calculateReadingTime(wordCount) {
  return `${Math.ceil(wordCount / 200)} min read`;
}