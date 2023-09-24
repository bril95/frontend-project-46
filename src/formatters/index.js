import stylish from './stylish.js';
import plain from './plain.js';

const formatName = (tree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
  }
  return '';
};

export default formatName;
