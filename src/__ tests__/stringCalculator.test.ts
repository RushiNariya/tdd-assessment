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

  test('pass any amonut of numbers in input string', () => {
    expect(stringCalculator('1,2,3,4')).toBe(10);
  });
});
