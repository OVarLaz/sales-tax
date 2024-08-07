const { isImported } = require("../../src/validators/imported");

test("should contain imported word by truly", () => {
  expect(isImported("imported box of chocolates")).toBe(true);
  expect(isImported("imported bottle of perfume")).toBe(true);
});

test("should contain imported word by false", () => {
  expect(isImported("book")).toBe(false);
  expect(isImported("music CD")).toBe(false);
  expect(isImported("chocolate bar")).toBe(false);
  expect(isImported("packet of headache pills")).toBe(false);
  expect(isImported("bottle of perfume")).toBe(false);
});
