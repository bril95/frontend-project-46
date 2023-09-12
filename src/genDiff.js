import _ from 'lodash';
import path from 'path';
import fs from 'fs';

function getWay(filepath) {
  if (filepath.startsWith('/')) {
    return path.resolve(filepath);
  } return `${process.cwd()}${filepath}`;
}

function parseFile(filepath) {
  const readFile = JSON.parse(fs.readFileSync(getWay(filepath), 'utf8'));
  return readFile;
}

const genDiff = (filepath1, filepath2) => {
  const readFile1 = parseFile(filepath1);
  const keysFile1 = Object.keys(readFile1);
  const readFile2 = parseFile(filepath2);
  const keysFile2 = Object.keys(readFile2);
  const allKeys = _.uniq([...keysFile1, ...keysFile2]);
  const sortedKeys = _.sortBy(allKeys);
  let resultStr = '';
  sortedKeys.map((key) => {
    if (readFile2.hasOwnProperty(key) && !readFile1.hasOwnProperty(key)) {
      resultStr = `${resultStr}\n  +${key}: ${readFile2[key]}`;
    } else if (readFile1.hasOwnProperty(key) && !readFile2.hasOwnProperty(key)) {
      resultStr = `${resultStr}\n  -${key}: ${readFile1[key]}`;
    } else if (readFile1.hasOwnProperty(key) && readFile2.hasOwnProperty(key) && readFile1[key] !== readFile2[key]) {
      resultStr = `${resultStr}\n  -${key}: ${readFile1[key]}\n  +${key}: ${readFile2[key]}`;
    } else {
      resultStr = `${resultStr}\n   ${key}: ${readFile1[key]}`;
    }
    return resultStr;
  });
  return `{${resultStr}\n}`;
};

export default genDiff;
