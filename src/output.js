const { correctStructure } = require("./validators/structure");
const { roundDigit, roundUpToNearest05 } = require("./utils/parseFloats");
const { isImported } = require("./validators/imported");
const { isApplicableGeneralTax } = require("./validators/general-tax");

const validateOutput = (text) => {
  const match = correctStructure(text);

  if (match) {
    let taxes = 0.0;
    const quantity = Number(match[1]);
    const item = match[2].trim();
    const price = Number(match[3]);

    if (isImported(item.toLowerCase())) {
      taxes = taxes + 0.05;
    }

    if (isApplicableGeneralTax(item.toLowerCase())) {
      taxes = taxes + 0.1;
    }

    const finalTax = roundUpToNearest05(roundDigit(taxes, 2) * price);
    const finalPrice = (quantity * (finalTax + price)).toFixed(2);
    const output = `${quantity} ${item}: ${finalPrice.toString()}`;
    return {
      output: output,
      finalPrice: Number(finalPrice),
      taxes: roundDigit(finalTax * quantity, 2),
    };
  } else {
    console.log("Invalid format");
  }
};

module.exports = { validateOutput };
