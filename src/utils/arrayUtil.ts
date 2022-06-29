/**
 * 인자로 전달받은 배열의 요소 객체의 키값을 비교한다.
 *
 * @param   {Array<{}>}  arr  [arr description]
 *
 * @return  {boolean}        [return description]
 */
export const compareKeys = (arr: object[]): boolean => {
  if (arr === undefined || arr === null || arr.length < 2) return null;

  let result = false;

  for (let i = 1; i < arr.length; i++) {
    const curKeys = Object.keys(arr[i]);
    const nextKeys = Object.keys(arr[i - 1]);
    const nextMap = new Map();

    nextKeys.forEach((key) => {
      nextMap.set(key, arr[i - 1][key]);
    });

    if (curKeys.length !== nextKeys.length) return false;

    result = curKeys.every((key) => nextMap.has(key));
  }

  return result;
};

/**
 * 전달 받은 배열의 합을 반환한다.
 * @param   {Array<number>}  arr  [arr description]
 *
 * @return  {<number>}            [return description]
 */
export const getSum = (arr: number[]): number =>
  arr.reduce((sum, cur) => (sum += cur), 0);
