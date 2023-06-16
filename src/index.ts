import { User } from './User';
import { Item } from './Item';
import { Shop } from './Shop';

const shop = new Shop();

const user = new User('Mason Sinner', 22);

const itemsForSale = shop.getItems();
const itemToAdd = itemsForSale[0]; 

user.addToCart(itemToAdd);

user.printCart();

user.removeFromCart(itemToAdd);

user.removeQuantityFromCart(itemToAdd, 3);

user.printCart();

const total = user.cartTotal();
console.log('Cart Total:', total);