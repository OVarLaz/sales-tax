const { isApplicableGeneralTax } = require("../../src/validators/general-tax");

test("should apply general tax by falsy", () => {
  expect(isApplicableGeneralTax("book")).toBe(false);
  expect(isApplicableGeneralTax("chocolate bar")).toBe(false);
  expect(isApplicableGeneralTax("imported box of chocolates")).toBe(false);
  expect(isApplicableGeneralTax("packet of headache pills")).toBe(false);
});

test("should apply general tax by truly", () => {
  expect(isApplicableGeneralTax("music CD")).toBe(true);
  expect(isApplicableGeneralTax("imported bottle of perfume")).toBe(true);
  expect(isApplicableGeneralTax("bottle of perfume")).toBe(true);
});
