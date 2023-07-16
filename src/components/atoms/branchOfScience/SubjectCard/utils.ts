import { SubjectCardProps } from "./types";

function formatWordCount(count: number) {
  if (count === 1) {
    return `${count} pojęcie`;
  } else if (
    count % 10 >= 2 &&
    count % 10 <= 4 &&
    (count % 100 < 10 || count % 100 >= 20)
  ) {
    return `${count} pojęcia`;
  } else {
    return `${count} pojęć`;
  }
}

export const numberOfTerms = (objects: SubjectCardProps["studySets"]) => {
  const totalWordCount = objects.reduce(
    (count, obj) => count + obj.words.length,
    0
  );
  const formattedWordCount = formatWordCount(totalWordCount);

  return formattedWordCount;
};
