import { compareKeys, getSum } from '@utils/arrayUtil';
import { difference } from '@utils/objectUtil';

import Data from './json/data.json';

const originDatas = Data.originDatas;

const nextDatas = Data.nextDatas;
console.log(originDatas[0]);
console.log(nextDatas[0]);

console.log(difference(nextDatas[8], originDatas[8]));

const updatedList = nextDatas.filter((i) => i.dirty !== undefined);
console.log(updatedList.length);
