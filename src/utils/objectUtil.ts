const _ = require('lodash');

/**
 *
 * 두 객체를 파라미터로 받아, prev 객체와 비교해 next 객체가 변한 요소를 반환한다. (객체 간 깊은 비교)
 * @author  uhjee
 * @param   {object}  next  비교 대상 객체 1
 * @param   {object}  prev  비교 대상 객체 2
 *
 * @return  {object}      변경된 프로퍼티의 key, value
 */
export const difference = (next: {}, prev: {}) => {
  function changes(next, prev) {
    return _.transform(next, function (result, value, key) {
      if (!_.isEqual(value, prev[key])) {
        result[key] =
          _.isObject(value) && _.isObject(prev[key])
            ? changes(value, prev[key])
            : value;
      }
    });
  }
  return changes(next, prev);
};
