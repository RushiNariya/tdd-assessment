export default function stringCalculator(numbers: string) {
  if (!numbers) {
    return 0;
  }

  const delimiters = [',', '\n'];

  const numArr = numbers;

  const splittedString = splitString(numArr, delimiters);

  return splittedString
    .map((item) => +item)
    .reduce((prev, curr) => prev + Number(curr), 0);
}

function splitString(input: string, delimiters: string[]) {
  let result = [input];

  delimiters.forEach((delimiter) => {
    const temp: string[] = [];
    result.forEach((subStr) => {
      temp.push(...subStr.split(delimiter));
    });

    result = temp;
  });
  return result;
}
