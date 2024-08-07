const { validateOutput } = require("../src/output");

// Input 1

test("output for 2 book at 12.49", () => {
  const result = validateOutput("2 book at 12.49");
  expect(result["finalPrice"]).toBe(24.98);
  expect(result["taxes"]).toBe(0);
  expect(result["output"]).toBe("2 book: 24.98");
});

test("output for 1 music CD at 14.99", () => {
  const result = validateOutput("1 music CD at 14.99");
  expect(result["finalPrice"]).toBe(16.49);
  expect(result["taxes"]).toBe(1.5);
  expect(result["output"]).toBe("1 music CD: 16.49");
});

test("output for 1 chocolate bar at 0.85", () => {
  const result = validateOutput("1 chocolate bar at 0.85");
  expect(result["finalPrice"]).toBe(0.85);
  expect(result["taxes"]).toBe(0);
  expect(result["output"]).toBe("1 chocolate bar: 0.85");
});

// Input 2

test("output for 1 imported box of chocolates at 10.00", () => {
  const result = validateOutput("1 imported box of chocolates at 10.00");
  expect(result["finalPrice"]).toBe(10.5);
  expect(result["taxes"]).toBe(0.5);
  expect(result["output"]).toBe("1 imported box of chocolates: 10.50");
});

test("output for 1 imported bottle of perfume at 47.50", () => {
  const result = validateOutput("1 imported bottle of perfume at 47.50");
  expect(result["finalPrice"]).toBe(54.65);
  expect(result["taxes"]).toBe(7.15);
  expect(result["output"]).toBe("1 imported bottle of perfume: 54.65");
});

// Input 3

test("output for 1 imported bottle of perfume at 27.99", () => {
  const result = validateOutput("1 imported bottle of perfume at 27.99");
  expect(result["finalPrice"]).toBe(32.19);
  expect(result["taxes"]).toBe(4.2);
  expect(result["output"]).toBe("1 imported bottle of perfume: 32.19");
});

test("output for 1 bottle of perfume at 18.99", () => {
  const result = validateOutput("1 bottle of perfume at 18.99");
  expect(result["finalPrice"]).toBe(20.89);
  expect(result["taxes"]).toBe(1.9);
  expect(result["output"]).toBe("1 bottle of perfume: 20.89");
});

test("output for 1 packet of headache pills at 9.75", () => {
  const result = validateOutput("1 packet of headache pills at 9.75");
  expect(result["finalPrice"]).toBe(9.75);
  expect(result["taxes"]).toBe(0);
  expect(result["output"]).toBe("1 packet of headache pills: 9.75");
});

test("output for 3 imported boxes of chocolates at 11.25", () => {
  const result = validateOutput("3 imported boxes of chocolates at 11.25");
  expect(result["finalPrice"]).toBe(35.55);
  expect(result["taxes"]).toBe(1.8);
  expect(result["output"]).toBe("3 imported boxes of chocolates: 35.55");
});
