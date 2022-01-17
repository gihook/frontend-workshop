import { getFibonacciCalculator } from "../src/fibonacci";

describe("fibonacci", () => {
  it("calculateFibonacci()", () => {
    const calculateFibonacci = getFibonacciCalculator();

    expect(calculateFibonacci(0)).toBe(0);
    expect(calculateFibonacci(1)).toBe(1);
    expect(calculateFibonacci(2)).toBe(1);
    expect(calculateFibonacci(7)).toBe(13);
    expect(calculateFibonacci(8)).toBe(21);

    const t1 = performance.now();
    const result = calculateFibonacci(40);
    const t2 = performance.now();

    expect(result).toBe(102334155);
    expect(t2 - t1).toBeLessThan(10);
  });
});
