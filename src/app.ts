// import { data } from '@/json/data.json';

import { compareKeys, getSum } from '@utils/arrayUtil';
import { isEmpty, isNil } from 'lodash';
import { difference } from '@/utils/objectUtil';
import { detailData, tableArr } from './dir/76684_pm';

// 2022-06-29 / PM 관리 더미 데이터들
console.log({ tableArr });
console.log({ detailData });

const testFunction = (arr: number[]) => {
  const newArr = arr.map((i) => i + 100);
  return newArr;
};

const testArr = Array.from(Array(9), (_, i) => i);

testFunction(testArr);
