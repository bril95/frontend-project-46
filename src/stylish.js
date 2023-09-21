import _ from 'lodash';

const countOfSpace = (depth) => '  '.repeat((depth * 2) - 2);

const makeObjToStr = (obj, depth) => {
  if (!_.isObject(obj)) {
    return obj;
  }
  const objectToString = Object.entries(obj, depth)
    .map(([key, value]) => `${countOfSpace(depth + 1)}    ${key}: ${makeObjToStr(value, depth + 1)}`);
  return `{\n${objectToString.join('\n')}\n${countOfSpace(depth + 1)}}`;
};

const makeInfo = {
  children: (element, depth, iter) => `${countOfSpace(depth)}    ${element.key}: ${iter(element.children, depth + 1)}`,
  unchanged: (element, depth) => `${countOfSpace(depth)}    ${element.key}: ${makeObjToStr(element.value, depth)}`,
  deleted: (element, depth) => `${countOfSpace(depth)}  - ${element.key}: ${makeObjToStr(element.value, depth)}`,
  added: (element, depth) => `${countOfSpace(depth)}  + ${element.key}: ${makeObjToStr(element.value, depth)}`,
  updated: (element, depth) => [
    `${countOfSpace(depth)}  - ${element.key}: ${makeObjToStr(element.oldValue, depth)}`,
    `${countOfSpace(depth)}  + ${element.key}: ${makeObjToStr(element.value, depth)}`,
  ],
};

const stylish = (tree) => {
  const iter = (node, depth) => {
    const dataToString = node.flatMap((elem) => makeInfo[elem.status](elem, depth, iter));
    return `{\n${dataToString.join('\n')}\n${countOfSpace(depth)}}`;
  };
  return iter(tree, 1);
};

export default stylish;
