import {
  forEach,
  myAny,
  myFind,
  myMap,
  myReduce,
  mySort,
  toDictionary,
  where,
} from "../src/array-functions";

declare type Dict = {
  [key: string]: string;
};

declare type Data = { id: number; name: string; desc: string };

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

  it("event numbers", () => {
    const array = [1, 2, 3, 4, 5];

    const func = (item: number) => item % 2 == 0;
    const result = where(array, func);

    expect(result[0]).toBe(2);
    expect(result[1]).toBe(4);
  });

  it("strings that containr letter 'a'", () => {
    const array = ["test", "pera", "zika"];

    const func = (item: string) => item.includes("a");
    const result = where(array, func);

    expect(result[0]).toBe("pera");
    expect(result[1]).toBe("zika");
  });

  it("to dictionary", () => {
    const submissions: Data[] = [
      {
        id: 1,
        name: "sub1",
        desc: "desc1",
      },

      {
        id: 2,
        name: "sub2",
        desc: "desc2",
      },
    ];

    const funcKey = (item: Data) => item.name;
    const funcValue = (item: Data) => item.desc;

    const result = toDictionary(submissions, funcKey, funcValue);

    expect(result["sub1"]).toBe("desc1");
    expect(result["sub2"]).toBe("desc2");
  });

  it("forEach", () => {
    const array = [1, 2, 3];

    let conunter = 0;
    const func = (_element: any) => conunter++;
    forEach(array, func);

    expect(conunter).toBe(3);
  });

  it("myFind", () => {
    const array = [1, 2, 5, 6];

    const func = (element: any): boolean => element > 3;

    const result = myFind(array, func);
    expect(result).toBe(5);
  });

  it("myAny", () => {
    const array = [1, 2, 5, 6];
    const func = (element: any): boolean => element > 3;
    const result = myAny(array, func);
    expect(result).toBe(true);
  });

  it("mySort", () => {
    const nums = [2, 1, 111];
    const sortBy = (element: number) => element;
    const result = mySort(nums, sortBy);

    expect(JSON.stringify(result)).toBe(JSON.stringify([1, 2, 111]));
  });

  it("mySort with squared number", () => {
    const nums = [-4, 1, 111];
    const sortBy = (element: number) => element * element;
    const result = mySort(nums, sortBy);

    expect(JSON.stringify(result)).toBe(JSON.stringify([1, -4, 111]));
  });
});
