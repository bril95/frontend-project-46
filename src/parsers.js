import yaml from 'js-yaml';

const parseFile = (data, typeFile) => {
  const objWithTypeFile = {
    yml: yaml.load(data),
    yaml: yaml.load(data),
    json: JSON.parse(data),
  };
  return objWithTypeFile[typeFile.slice(1)];
};

export default parseFile;
