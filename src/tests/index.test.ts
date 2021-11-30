import { parseList, orderItems } from "../index";
import Item from "../Item";

it("Getting a  list of items from string", () => {
  const strList = "56 65 74 100 99 68 86 180 90";

  expect(parseList(strList)).toEqual([
    {
      value: 56,
      weight: 11,
    },
    {
      value: 65,
      weight: 11,
    },
    {
      value: 74,
      weight: 11,
    },
    {
      value: 100,
      weight: 1,
    },
    {
      value: 99,
      weight: 18,
    },
    {
      value: 68,
      weight: 14,
    },
    {
      value: 86,
      weight: 14,
    },
    {
      value: 180,
      weight: 9,
    },
    {
      value: 90,
      weight: 9,
    },
  ]);
});

it("Get an empty list from empty string", () => {
  const strList = "";

  expect(parseList(strList)).toEqual([]);
});

it("Ordering two different numbers with same weight are ordered as string", () => {
  const items = [new Item("201"), new Item("102")];
  const orderedItems = orderItems(items);

  expect(orderedItems).toEqual([
    { value: 102, weight: 3 },
    { value: 201, weight: 3 },
  ]);
});

it("Ordering two different numbers with differemt weight ", () => {
  const items = [new Item("89"), new Item("56")];
  const orderedItems = orderItems(items);

  expect(orderedItems).toEqual([
    { value: 56, weight: 11 },
    { value: 89, weight: 17 },
  ]);
});
