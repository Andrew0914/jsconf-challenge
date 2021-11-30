import Item from "./Item";

export function parseList(list: string): Item[] {
  return list.length > 0
    ? list.split(" ").map((strValue) => new Item(strValue))
    : [];
}

export function orderItems(items: Item[]) {
  return items.sort((a: Item, b: Item) => {
    if (a.weight === b.weight) {
      return a.value.toString().localeCompare(b.value.toString());
    }
    return a.weight - b.weight;
  });
}

// Result ✨
const entryList = "56 65 74 100 99 68 86 180 90";

const orderedList = orderItems(parseList(entryList))
  .map((item) => item.value)
  .join(" ");

console.log(`🍕 Entry list: ${entryList.length > 0 ? entryList : 'empty'}`);
console.log(`🍕 Result ordered list: ${orderedList.length > 0 ? orderedList : "empty"}`);
