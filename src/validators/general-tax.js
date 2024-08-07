const books = ["book", "novel", "reading", "bigraphy", "chapter"];
const medical = [
  "medical",
  "medication",
  "healthcare",
  "pill",
  "supplies",
  "drug",
];
const food = [
  "food",
  "chocolate",
  "ice cream",
  "sweets",
  "candy",
  "soda",
  "water",
  "meal",
  "snack",
  "dessert",
  "side dish",
  "salad",
  "soup",
  "vegetable",
  "fruit",
  "meat",
  "grains",
  "spices",
  "condiments",
  "sauce",
  "oil",
];

function containsKeywords(sentence, keywords) {
  return keywords.some((keyword) => sentence.includes(keyword));
}

const isApplicableGeneralTax = (sentence) => {
  const bookContains = containsKeywords(sentence, books);
  const medicalContains = containsKeywords(sentence, medical);
  const foodContains = containsKeywords(sentence, food);

  const avoidTax = bookContains || medicalContains || foodContains;
  return !avoidTax;
};

module.exports = { isApplicableGeneralTax };
