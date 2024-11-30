export default function stringCalculator(numbers: string) {
  if (!numbers) {
    return 0;
  }

  const numArr = numbers;

  return numArr
    .split(',')
    .map((item) => +item)
    .reduce((prev, curr) => prev + Number(curr), 0);
}
