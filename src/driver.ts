import { Shop } from './Shop';
import { User } from './User';
import { Item } from './Item';


const shop = new Shop();


const user = new User('Mason', 22);


const item1 = shop.getItems()[0];
const item2 = shop.getItems()[1];
const item3 = shop.getItems()[2];

user.addToCart(item1);
user.addToCart(item2);
user.addToCart(item3);
user.addToCart(item3);
user.addToCart(item3);


user.printCart();


user.removeFromCart(item2);


const itemToRemoveQuantity = shop.getItems()[0];
const quantityToRemove = 2;

user.removeQuantityFromCart(itemToRemoveQuantity, quantityToRemove);

user.printCart();


const total = user.cartTotal();
console.log('Cart Total:', total);