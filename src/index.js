import genDiff from './genDiff.js';
import parseFile from './parsers.js';
import formatName from './formatters/index.js';

const generateDiff = (filepath1, filepath2, format = 'stylish') => {
  const object1 = parseFile(filepath1);
  const object2 = parseFile(filepath2);
  const compareObj = formatName(genDiff(object1, object2), format);
  return compareObj;
};

export default generateDiff;
