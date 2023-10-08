import yaml from 'js-yaml';

const parseFile = (data, typeFile) => {
  const objWithTypeFile = {
    json: () => JSON.parse(data),
    yml: () => yaml.load(data),
    yaml: () => yaml.load(data),
  };
  return objWithTypeFile[typeFile](data);
};

export default parseFile;
