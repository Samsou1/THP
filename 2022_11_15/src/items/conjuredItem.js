import Item from '../item.js'
import { validateQuality } from '../item.js';

export default class ConjuredItem extends Item{
    constructor(name, sellIn, quality){
        super(name.startsWith('Conjured')? name: `Conjured ${name}`, sellIn, quality);
        validateQuality(this);
    }

    updateQuality(){
        this.sellIn--;

        if(this.quality <= 0){
            return this;
        }

        if (this.sellIn >= 0){
            this.quality = this.quality - 2 >= 0 ? this.quality - 2 : 0;
            return this;
        }
    
        this.quality = this.quality - 4 >= 0 ? this.quality - 4 : 0;
        return this;
    }
}