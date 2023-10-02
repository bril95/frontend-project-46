import stylish from './stylish.js';
import plain from './plain.js';

const format = (tree, formatFile) => {
  switch (formatFile) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error(`Unknown format: '${formatFile}'!`);
  }
};

export default format;
