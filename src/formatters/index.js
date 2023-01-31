import stylish from './stylish.js';

const getFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};

export default getFormat;