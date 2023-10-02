import yaml from 'js-yaml';
import _ from 'lodash';

const parseFile = ([data, typeFile]) => {
  if (_.isEqual(typeFile, '.yml')) {
    return yaml.load(data);
  }
  if (_.isEqual(typeFile, '.yaml')) {
    return yaml.load(data);
  }
  if (_.isEqual(typeFile, '.json')) {
    return JSON.parse(data);
  }
  return (`Unknown format: '${typeFile}'!`);
};

export default parseFile;
