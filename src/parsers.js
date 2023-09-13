import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

function getWay(filepath) {
  if (filepath.startsWith('/')) {
    return path.resolve(filepath);
  } return `${process.cwd()}/__fixtures__/${filepath}`;
}

function parseFile(filepath) {
  const readFile = fs.readFileSync(getWay(filepath), 'utf8');
  if (filepath.slice(-4) === 'json') {
    return JSON.parse(readFile);
  } return yaml.load(readFile);
}

export default parseFile;
