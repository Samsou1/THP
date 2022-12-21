import LegendaryItem from '../../src/items/legendaryItem.js'

describe("LegendaryItem class", () => {
    it("should create an item", () => {
      const item = new LegendaryItem("Sulfuras, Hand of Ragnaros", null, 80);
      expect(item.name).toBe("Sulfuras, Hand of Ragnaros");
      expect(item.sellIn).toBe(null);
      expect(item.quality).toBe(80);
    });

    it("should not update the quality", () => {
      const item = new LegendaryItem("Sulfuras, Hand of Ragnaros", null, 80);
      item.updateQuality();
      expect(item.quality).toBe(80);
    })
  });