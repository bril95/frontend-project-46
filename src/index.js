import genDiff from './genDiff.js';
import parseFile from './parsers.js';
import stylish from './stylish.js';

const generateDiff = (filepath1, filepath2, format = 'stylish') => {
  const object1 = parseFile(filepath1);
  const object2 = parseFile(filepath2);
  const compareObj = stylish(genDiff(object1, object2));
  return compareObj;
};

export default generateDiff;
