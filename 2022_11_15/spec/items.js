import ConjuredItem from "../src/items/conjuredItem.js";
import DecreasingQualityItem from "../src/items/decreasingQualityItem.js";
import IncreasingQualityItem from "../src/items/increasingQualityItem.js";
import LegendaryItem from "../src/items/legendaryItem.js";

export const items = [
    new DecreasingQualityItem('Yellow vest', 10, 30),
    new DecreasingQualityItem('Brown pants', -5, 10),
    new DecreasingQualityItem('Purple hat', 5, 10),

    new IncreasingQualityItem('Backstage passes to a TAFKAL80ETC concert', 20, 5),
    new IncreasingQualityItem('Backstage passes to a TAFKAL80ETC concert', 30, 10 ),
    new IncreasingQualityItem('Backstage passes to a TAFKAL80ETC concert', 10, 50),

    new LegendaryItem("Sulfuras, Hand of Ragnaros", -10, 80),
    new LegendaryItem("Sulfuras, Hand of Ragnaros", 5, 80),
    new LegendaryItem("Sulfuras, Hand of Ragnaros", null, 80),
    
    new ConjuredItem("Conjured staff of power", 5, 10),
    new ConjuredItem("Trinket of stamina", -5, 5),
    new ConjuredItem("Conjured boots of almighty",10, 30)

]
