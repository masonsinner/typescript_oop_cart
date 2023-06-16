"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
const Item_1 = require("./Item");
class Shop {
    constructor() {
        this.items = [];
        this.initializeItems();
    }
    getItems() {
        return this.items;
    }
    initializeItems() {
        const item1 = new Item_1.Item('Banana Peel', 15, 'Slippery! Look out!');
        const item2 = new Item_1.Item('Bullet Bill', 25, 'Like being on autopilot, except on a dangerous giant bullet!');
        const item3 = new Item_1.Item('Star Power', 35, "Literally just a cheat code, just don't go falling off the map");
        this.items.push(item1, item2, item3);
    }
}
exports.Shop = Shop;
