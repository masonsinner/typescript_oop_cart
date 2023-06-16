"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor(name, age) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.age = age;
        this.cart = [];
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getCart() {
        return this.cart;
    }
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(item) {
        this.cart = this.cart.filter((cartItem) => cartItem.getId() !== item.getId());
    }
    removeQuantityFromCart(item, quantity) {
        const existingItem = this.cart.find((cartItem) => cartItem.getId() === item.getId());
        if (existingItem) {
            if (existingItem.getQuantity() <= quantity) {
                this.removeFromCart(existingItem);
            }
            else {
                existingItem.setQuantity(existingItem.getQuantity() - quantity);
            }
        }
    }
    cartTotal() {
        return this.cart.reduce((total, item) => total + item.getPrice(), 0);
    }
    printCart() {
        console.log('Cart Contents:');
        for (const item of this.cart) {
            console.log(`- ${item.getName()}: $${item.getPrice()}`);
        }
    }
}
exports.User = User;
