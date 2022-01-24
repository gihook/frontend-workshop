export const myMap = <ArrayValueType, R>(
  array: ArrayValueType[],
  func: (value: ArrayValueType) => R
): R[] => {
  const newArray = [];

  for (let i = 0, len = array.length; i < len; i++) {
    const newValue = func(array[i]);
    newArray.push(newValue);
  }

  return newArray;
};

export const myReduce = <ArrayValueType, StartValueType>(
  array: ArrayValueType[],
  func: (startValue: StartValueType, item: ArrayValueType) => StartValueType,
  startValue: StartValueType
): StartValueType => {
  let currentValue = startValue;

  for (let i = 0, len = array.length; i < len; i++) {
    currentValue = func(currentValue, array[i]);
  }

  return currentValue;
};

export const where = <T>(array: T[], func: (num: T) => boolean) => {
  const newArray = [];

  for (let i = 0, len = array.length; i < len; i++) {
    if (func(array[i])) newArray.push(array[i]);
  }

  return newArray;
};

export const toDictionary = <T, TValue>(
  array: T[],
  funcKey: (item: T) => string,
  funcValue: (item: T) => TValue
): { [key: string]: TValue } => {
  const result: { [key: string]: TValue } = {};

  for (let i = 0; i < array.length; i++) {
    const key = funcKey(array[i]);
    const value = funcValue(array[i]);

    result[key] = value;
  }

  return result;
};

export const forEach = <T>([head, ...tail]: T[], func: (item: T) => void) => {
  if (!head) return;

  func(head);
  forEach(tail, func);
};
