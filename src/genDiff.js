import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
  const keysFile1 = Object.keys(filepath1);
  const keysFile2 = Object.keys(filepath2);
  const allKeys = _.uniq([...keysFile1, ...keysFile2]);
  const sortedKeys = _.sortBy(allKeys);
  let resultStr = '';
  sortedKeys.map((key) => {
    if (filepath2.hasOwnProperty(key) && !filepath1.hasOwnProperty(key)) {
      resultStr = `${resultStr}\n  + ${key}: ${filepath2[key]}`;
    } else if (filepath1.hasOwnProperty(key) && !filepath2.hasOwnProperty(key)) {
      resultStr = `${resultStr}\n  - ${key}: ${filepath1[key]}`;
    } else if (filepath1.hasOwnProperty(key) && filepath2.hasOwnProperty(key) && filepath1[key] !== filepath2[key]) {
      resultStr = `${resultStr}\n  - ${key}: ${filepath1[key]}\n  + ${key}: ${filepath2[key]}`;
    } else {
      resultStr = `${resultStr}\n    ${key}: ${filepath1[key]}`;
    }
    return resultStr;
  });
  return `{${resultStr}\n}`;
};

export default genDiff;
