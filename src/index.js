import genDiff from './genDiff.js';
import parseFile from './parsers.js';

const generateDiff = (filepath1, filepath2) => {
  const readFile1 = parseFile(filepath1);
  const readFile2 = parseFile(filepath2);
  return genDiff(readFile1, readFile2);
};

export default generateDiff;
