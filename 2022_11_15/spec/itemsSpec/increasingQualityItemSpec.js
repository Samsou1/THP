import IncreasingQualityItem from '../../src/items/increasingQualityItem.js'

describe("IncreasingQualityItem class", () => {
  let Q;
  let S;

  beforeEach(() => {
    Q = Math.floor(Math.random() * 50);
    S = Math.floor(Math.random() * 10);
  });

  it("should create an item", () => {
    const item = new IncreasingQualityItem("Aged Brie", S, Q);
    expect(item.name).toBe("Aged Brie");
    expect(item.sellIn).toBe(S);
    expect(item.quality).toBe(Q);
  });

  it("should increase the quality by one when sellin > 10", () => {
    S += 12;
    const item = new IncreasingQualityItem("Aged Brie", S, Q);
    item.updateQuality();
    expect(item.quality).toBe(Q + 1 <= 50 ? Q + 1 : 50);
  })

  it("should lower the sellIn", () => {
    const item = new IncreasingQualityItem("Aged Brie", S, Q);
    item.updateQuality();
    expect(item.sellIn).toBe(S - 1);
  })

  it("should increase the quality by two when sellin <= 10", () => {
    S = Math.floor(Math.random() * 5) + 7;
    const item = new IncreasingQualityItem("Backstage passes", S, Q);
    item.updateQuality();
    expect(item.quality).toBe(Q + 2 <= 50 ? Q + 2 : 50);
  })

  it("should increase the quality by three when sellin <= 5", () => {
    S = Math.floor(Math.random() * 5);
    const item = new IncreasingQualityItem("Backstage passes", S, Q);
    item.updateQuality();
    expect(item.quality).toBe(Q + 3 <= 50 ? Q + 3 : 50);
  })

  it("should turn the quality to 0 when the expiration date is reached", () => {
    S = - S - 1;
    const item = new IncreasingQualityItem("Backstage passes", 0, 15, 'expirable');
    item.updateQuality();
    expect(item.quality).toBe(0);
  })


});