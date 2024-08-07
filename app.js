const { validateOutput } = require("./src/output");
const { sumArray } = require("./src/utils/operations");
const { roundUpToNearest05 } = require("./src/utils/parseFloats");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
const values = [];
const taxes = [];
const total = [];
console.log(
  "Enter Sale: '<#cuantity> <product> at <unitary_price> ' (type 'DONE' on a new line to finish)"
);
console.log("Input:");

rl.on("line", (input) => {
  if (input.trim().toUpperCase() === "DONE") {
    rl.close();
    console.log("Output:\n" + values.join("\n"));
    console.log(`Sales Taxes: ${roundUpToNearest05(sumArray(taxes))}`);
    console.log(`Total: ${sumArray(total)}`);
  } else {
    lines.push(input);
    const value = validateOutput(input);
    if (value) {
      values.push(value.output);
      taxes.push(value.taxes);
      total.push(value.finalPrice);
    }
  }
});
