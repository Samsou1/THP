import Item from "../src/item.js";

describe("Item class", () => {

  it("should create an item", () => {
      const item = new Item("Pants", 10, 5);
      expect(item.name).toBe("Pants");
      expect(item.sellIn).toBe(10);
      expect(item.quality).toBe(5);
    });
    
  });