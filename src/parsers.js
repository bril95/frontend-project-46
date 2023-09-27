import yaml from 'js-yaml';

function parseFile([file, typeFile]) {
  switch (typeFile) {
    case '.yml':
      return yaml.load(file);
    case '.yaml':
      return yaml.load(file);
    case '.json':
      return JSON.parse(file);
    default:
      throw new Error(`Unknown format: '${typeFile}'!`);
  }
}

export default parseFile;
