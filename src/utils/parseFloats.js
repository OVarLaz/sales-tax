const roundDigit = (value, digit) => {
  return parseFloat(value.toFixed(digit));
};

const roundUpToNearest05 = (value) => {
  return Math.ceil(value / 0.05) * 0.05;
};

module.exports = { roundDigit, roundUpToNearest05 };
