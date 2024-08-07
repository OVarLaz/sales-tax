const { sumArray } = require("../../src/utils/operations");

test("should return the correct sum", () => {
  expect(sumArray([24.98, 16.49, 0.85])).toBe(42.32);
  expect(sumArray([10.5, 54.65])).toBe(65.15);
  expect(sumArray([32.19, 20.89, 9.75, 35.55])).toBe(98.38);
});
