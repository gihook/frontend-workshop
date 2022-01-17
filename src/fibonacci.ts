export const getFibonacciCalculator = () => {
  const memo: { [key: number]: number } = {};

  const calculateFibonacci = (number: number): number => {
    if (number == 0) return 0;
    if (number == 1) return 1;

    if (memo[number]) return memo[number];

    const result =
      calculateFibonacci(number - 1) + calculateFibonacci(number - 2);

    memo[number] = result;

    return result;
  };

  return calculateFibonacci;
};
