"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Shop_1 = require("./Shop");
const shop = new Shop_1.Shop();
const user = new User_1.User('Mason Sinner', 22);
const itemsForSale = shop.getItems();
const itemToAdd = itemsForSale[0];
user.addToCart(itemToAdd);
user.printCart();
user.removeFromCart(itemToAdd);
user.removeQuantityFromCart(itemToAdd, 3);
user.printCart();
const total = user.cartTotal();
console.log('Cart Total:', total);