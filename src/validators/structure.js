const correctStructure = (text) => {
  const regex = /(\d+)\s+([a-zA-Z\s]+)\s+at\s+([\d.]+)/;
  return text.match(regex);
};

module.exports = { correctStructure };
