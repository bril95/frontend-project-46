import _ from 'lodash';
import stylish from './stylish.js';
import plain from './plain.js';

const format = (tree, formatFile) => {
  if (_.isEqual(formatFile, 'stylish')) {
    return stylish(tree);
  }
  if (_.isEqual(formatFile, 'plain')) {
    return plain(tree);
  }
  if (_.isEqual(formatFile, 'json')) {
    return JSON.stringify(tree);
  }
  return (`Unknown format: '${formatFile}'!`);
};

export default format;
