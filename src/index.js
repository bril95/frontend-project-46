import fs from 'fs';
import path from 'path';
import generateTree from './generateTree.js';
import parseFile from './parsers.js';
import format from './formatters/index.js';

const getWay = (filepath) => {
  if (filepath.startsWith('/')) {
    return path.resolve(filepath);
  } return `${process.cwd()}/__fixtures__/${filepath}`;
};

const readFile = (filepath) => {
  const readFiles = fs.readFileSync(getWay(filepath), 'utf8');
  const typeFile = path.extname(filepath);
  return [readFiles, typeFile];
};

const generateDiff = (filepath1, filepath2, formatFile = 'stylish') => {
  const object1 = parseFile(readFile(filepath1));
  const object2 = parseFile(readFile(filepath2));
  const compareObj = format(generateTree(object1, object2), formatFile);
  return compareObj;
};

export default generateDiff;
