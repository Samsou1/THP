export default class Item {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }

export const validateQuality = (item) => {
    if (item.quality === undefined) {
      throw new Error('You need to set the quality');
    }
  
    if (item.sellIn === undefined) {
      throw new Error('You need to set the expiration date');
    }
  
    if (item.quality < 0 || item.quality > 50) {
      throw new Error('You need to set the quality between 0 and 50');
    }
  
    return item;
  }
  