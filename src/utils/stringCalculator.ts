export default function stringCalculator(numbers: string) {
  if (!numbers) {
    return 0;
  }

  let delimiters = [',', '\n'];
  let numArr = numbers;

  if (numArr.startsWith('//')) {
    const delimiterEnd = numArr.indexOf('\n');
    const dynamicDelimiters = numArr.slice(2, delimiterEnd);

    delimiters = [dynamicDelimiters];

    numArr = numArr.slice(delimiterEnd + 1);
  }

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
