export const shortenedText = () => {
  const wordCount = 340;
  const shortenText = description.slice(0, wordCount);
  const wordArray = shortenText.split(" ");

  let prevText = "";
  for (let i = 0; i < wordArray.length; i++) {
    if (i === wordArray.length - 1) {
      const prevString = prevText.trim();
      prevText = prevString;
      prevText += "...";
    } else {
      prevText += wordArray[i] + " ";
    }
  }
};
