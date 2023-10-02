import yaml from 'js-yaml';

const parseFile = ([data, typeFile]) => {
  switch (typeFile) {
    case '.yml':
      return yaml.load(data);
    case '.yaml':
      return yaml.load(data);
    case '.json':
      return JSON.parse(data);
    default:
      throw new Error(`Unknown format: '${typeFile}'!`);
  }
};

export default parseFile;
