const { correctStructure } = require("../../src/validators/structure");

test("should contain the correct structure", () => {
  expect(correctStructure("2 book at 12.49").slice(0, 4)).toEqual([
    "2 book at 12.49",
    "2",
    "book",
    "12.49",
  ]);
  expect(correctStructure("1 music CD at 14.99").slice(0, 4)).toEqual([
    "1 music CD at 14.99",
    "1",
    "music CD",
    "14.99",
  ]);
  expect(correctStructure("1 chocolate bar at 0.85").slice(0, 4)).toEqual([
    "1 chocolate bar at 0.85",
    "1",
    "chocolate bar",
    "0.85",
  ]);
  expect(
    correctStructure("1 imported box of chocolates at 10.00").slice(0, 4)
  ).toEqual([
    "1 imported box of chocolates at 10.00",
    "1",
    "imported box of chocolates",
    "10.00",
  ]);
  expect(
    correctStructure("1 imported bottle of perfume at 47.50").slice(0, 4)
  ).toEqual([
    "1 imported bottle of perfume at 47.50",
    "1",
    "imported bottle of perfume",
    "47.50",
  ]);
  expect(
    correctStructure("1 imported bottle of perfume at 27.99").slice(0, 4)
  ).toEqual([
    "1 imported bottle of perfume at 27.99",
    "1",
    "imported bottle of perfume",
    "27.99",
  ]);
  expect(correctStructure("1 bottle of perfume at 18.99").slice(0, 4)).toEqual([
    "1 bottle of perfume at 18.99",
    "1",
    "bottle of perfume",
    "18.99",
  ]);
  expect(
    correctStructure("1 packet of headache pills at 9.75").slice(0, 4)
  ).toEqual([
    "1 packet of headache pills at 9.75",
    "1",
    "packet of headache pills",
    "9.75",
  ]);
  expect(
    correctStructure("3 imported boxes of chocolates at 11.25").slice(0, 4)
  ).toEqual([
    "3 imported boxes of chocolates at 11.25",
    "3",
    "imported boxes of chocolates",
    "11.25",
  ]);
});

test("should be returned as null", () => {
  expect(correctStructure("hello")).toBe(null);
  expect(correctStructure("1 music CD")).toBe(null);
  expect(correctStructure("1 chocolate bar = 0.85")).toBe(null);
  expect(correctStructure("1 packet of headache pills at")).toBe(null);
  expect(correctStructure("1 packet of headache pills 9.75")).toBe(null);
  expect(correctStructure("bottle of perfume at 18.99")).toBe(null);
});
