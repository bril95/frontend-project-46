import fs from 'fs';
import path from 'path';
import genDiff from './genDiff.js';
import parseFile from './parsers.js';
import formatName from './formatters/index.js';

function getWay(filepath) {
  if (filepath.startsWith('/')) {
    return path.resolve(filepath);
  } return `${process.cwd()}/__fixtures__/${filepath}`;
}

function readFile(filepath) {
  const readFiles = fs.readFileSync(getWay(filepath), 'utf8');
  const typeFile = path.extname(filepath);
  return [readFiles, typeFile];
}

const generateDiff = (filepath1, filepath2, format = 'stylish') => {
  const object1 = parseFile(readFile(filepath1));
  const object2 = parseFile(readFile(filepath2));
  const compareObj = formatName(genDiff(object1, object2), format);
  return compareObj;
};

export default generateDiff;
