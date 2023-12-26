import { ItemsQueryParams, Items, Hero } from "../types";
import { findItemByNameWithClient, findItemsWithClient } from "../api/items";

export class ItemsCollection {
  /**
   * Get all items
   * @returns {Promise<Items>}
   */
  get(params?: ItemsQueryParams): Promise<Items> {
    return findItemsWithClient(params);
  }

  /**
   * Get a item by name
   * @param {string} name
   * @returns {Promise<Item>}
   */
  getByName(name: string): Promise<Hero> {
    return findItemByNameWithClient(name);
  }
}
