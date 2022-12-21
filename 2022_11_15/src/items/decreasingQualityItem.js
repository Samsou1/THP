import Item from '../item.js'
import { validateQuality } from '../item.js';

export default class DecreasingQualityItem extends Item{
    constructor(name, sellIn, quality){
        super(name, sellIn, quality);
        validateQuality(this);
    }

    updateQuality(){
        this.sellIn--;
        
        if(this.quality <= 0){
            return this;
        }

        if (this.sellIn >= 0) {
            this.quality = this.quality - 1 >= 0 ? this.quality - 1 : 0;
            return this;
        }
    
        this.quality = this.quality - 2 >= 0 ? this.quality - 2 : 0;
        return this;
    }

}