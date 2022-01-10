import { myMap, myReduce } from "../src/array-functions";

declare type Dict = {
  [key: string]: string;
};

describe("array functions", () => {
  it("map function for number", () => {
    const array = [1, 2, 3];

    const func = (value: number) => value * value;
    const newArray = myMap(array, func);

    expect(newArray[0]).toBe(1);
    expect(newArray[1]).toBe(4);
    expect(newArray[2]).toBe(9);
  });

  it("map function for strings", () => {
    const array = ["1", "p", "p"];

    const func = (value: string) => "hello" + value;
    const newArray = myMap(array, func);

    expect(newArray[0]).toBe("hello1");
  });

  it("sum all items in array", () => {
    const array = [1, 2, 3];

    const func = (startValue: number, item: number) => startValue + item;
    const result = myReduce(array, func, 0);

    expect(result).toBe(6);
  });

  it("array to object", () => {
    const array = ["test1", "test2", "test3"];

    const func = (startValue: Dict, item: string) => {
      return { ...startValue, [item]: item };
    };

    const result = myReduce(array, func, {} as Dict);

    expect(result["test1"]).toBe("test1");
  });
});
