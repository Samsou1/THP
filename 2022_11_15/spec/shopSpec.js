import Shop from "../src/shop.js";
import {items} from "./items.js"

describe("Shop class", () => {

    it("should create a shop", () => {
      const shop = new Shop([...items]);
      expect(shop.items[0]).toBe(items[0]);
    });

    it("should update the quality and selling date of every item", () => {
      const shop = new Shop([...items]);
      const qualities = shop.items.map((element) => element.quality);
      shop.updateQualityAll();
      expect(shop.items[0].quality).toBe(qualities[0] - 1);
      expect(shop.items[1].quality).toBe(qualities[1] - 2);
      expect(shop.items[2].quality).toBe(qualities[2] - 1);
    });
  });