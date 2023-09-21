import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
  const keysFile1 = Object.keys(filepath1);
  const keysFile2 = Object.keys(filepath2);
  const allKeys = _.uniq([...keysFile1, ...keysFile2]);
  const sortedKeys = _.sortBy(allKeys);
  const result = sortedKeys.map((key) => {
    if (_.isPlainObject(filepath1[key]) && _.isPlainObject(filepath2[key])) {
      const children = genDiff(filepath1[key], filepath2[key]);
      return {
        status: 'children', key, value: filepath1[key], children,
      };
    }
    if (!_.has(filepath1, key) && _.has(filepath2, key)) {
      return { status: 'added', key, value: filepath2[key] };
    }
    if (_.has(filepath1, key) && !_.has(filepath2, key)) {
      return { status: 'deleted', key, value: filepath1[key] };
    }
    if (filepath1[key] !== filepath2[key]) {
      return {
        status: 'updated', key, value: filepath2[key], oldValue: filepath1[key],
      };
    }
    return { status: 'unchanged', key, value: filepath1[key] };
  });
  return result;
};

export default genDiff;
