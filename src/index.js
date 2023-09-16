import genDiff from './genDiff.js';
import parseFile from './parsers.js';

const generateDiff = (filepath1, filepath2) => {
  const object1 = parseFile(filepath1);
  const object2 = parseFile(filepath2);
  return genDiff(object1, object2);
};

export default generateDiff;
