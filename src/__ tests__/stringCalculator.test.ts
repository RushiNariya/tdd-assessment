import stringCalculator from '@src/utils/stringCalculator';

describe('string calculator test cases', () => {
  test('check test case runnign env.', () => {
    expect(true).toBe(true);
  });

  test('pass empty string', () => {
    expect(stringCalculator('')).toBe(0);
  });

  test('pass single digit string', () => {
    expect(stringCalculator('1')).toBe(1);
  });

  test('pass multiple number string', () => {
    expect(stringCalculator('1,2')).toBe(3);
  });

  test('pass any amount of numbers in input string', () => {
    expect(stringCalculator('1,2,3,4')).toBe(10);
  });

  test('add \n as delimiter in input string', () => {
    expect(stringCalculator('1\n2,3')).toBe(6);
  });

  test('handle different delimiter (;) in input string', () => {
    expect(stringCalculator('//;\n1;2')).toBe(3);
  });

  test('handle different delimiter (#) in input string', () => {
    expect(stringCalculator('//#\n1#2#3')).toBe(6);
  });

  test('handle negative number to throw an exception', () => {
    expect(() => stringCalculator('1,2,-3')).toThrow('negative numbers not allowed: -3');
  });
});
