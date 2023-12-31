import { ItemsQueryParams, Items, Item } from "../types";
import { itemsFindAll, itemsFindByName } from "../api/items";
import { client } from "../api";

const findItemByNameWithClient = itemsFindByName(client);
const findItemsWithClient = itemsFindAll(client);

export class ItemsCollection {
  items: Items = [];
  /**
   * Get all items
   * @returns {Promise<Items>}
   */
  async get(params?: ItemsQueryParams): Promise<Items> {
    if (this.items.length > 0) {
      return Promise.resolve(this.items);
    }

    try {
      const response = await findItemsWithClient(params);
      this.items = response;
      return this.items;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * Get an item by name
   * @param {string} name
   * @returns {Promise<Item>}
   */
  getByName(name: string): Promise<Item> {
    let cachedItem;
    if (this.items.length > 0) {
      cachedItem = this.items.find((item) => item.name === name);
    }
    if (!cachedItem) {
      return findItemByNameWithClient(name);
    }
    return Promise.resolve(cachedItem);
  }
}
