import { ItemsQueryParams, Items, Hero } from "../types";
import { itemsFindAll, itemsFindByName } from "../api/items";
import { client } from "../api";

const findItemByNameWithClient = itemsFindByName(client);
const findItemsWithClient = itemsFindAll(client);

export class ItemsCollection {
  /**
   * Get all items
   * @returns {Promise<Items>}
   */
  get(params?: ItemsQueryParams): Promise<Items> {
    return findItemsWithClient(params);
  }

  /**
   * Get an item by name
   * @param {string} name
   * @returns {Promise<Item>}
   */
  getByName(name: string): Promise<Hero> {
    return findItemByNameWithClient(name);
  }
}
