"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const uuid_1 = require("uuid");
class Item {
    constructor(name, price, description, quantity = 1) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getDescription() {
        return this.description;
    }
    getQuantity() {
        return this.quantity;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
}
exports.Item = Item;
