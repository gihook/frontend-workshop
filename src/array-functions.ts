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
