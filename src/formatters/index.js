import stylish from './stylish.js';
import plain from './plain.js';

const formatName = (tree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
    default:
      throw new Error(`Unknown sign: '${format}'!`);
  }
};

export default formatName;
