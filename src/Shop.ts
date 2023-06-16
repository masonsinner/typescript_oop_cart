import { Item } from './Item';

export class Shop {
  private items: Item[];

  constructor() {
    this.items = [];
    this.initializeItems();
  }


  getItems(): Item[] {
    return this.items;
  }

  private initializeItems(): void {
    const item1 = new Item('Banana Peel', 15, 'Slippery! Look out!');
    const item2 = new Item('Bullet Bill', 25, 'Like being on autopilot, except on a dangerous giant bullet!');
    const item3 = new Item('Star Power', 35, "Literally just a cheat code, just don't go falling off the map");
    this.items.push(item1, item2, item3);
  }
}