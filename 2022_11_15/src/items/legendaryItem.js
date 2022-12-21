import Item from '../item.js'

export default class LegendaryItem extends Item{
    constructor(name, sellIn, quality){
        if(quality < 0 || quality === undefined){
            throw new Error('Quality for a new legendary must be defined and positive');
        }
        super(name, null, quality);
    }

    updateQuality() {
        return this;
    }
}