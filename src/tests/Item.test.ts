import Item from "../Item";

it.each([
  ["56", [56, 11]],
  ["65", [65, 11]],
  ["74", [74, 11]],
  ["100", [100, 1]],
  ["99", [99, 18]],
  ["68", [68, 14]],
  ["86", [86, 14]],
  ["90", [90, 9]],
  ["180", [180, 9]],
])("Item from value %s is correctly parsed", (value, expected) => {
  const item = new Item(value);

  expect(item.value).toBe(expected[0]);
  expect(item.weight).toBe(expected[1]);
});
