import { findItemByNameWithClient, findItemsWithClient } from "../api/items";
import { OmedaCity } from "../types";

export class ItemsCollection {
  /**
   * Get all items
   * @returns {Promise<OmedaCity.Items>}
   */
  get(params?: OmedaCity.ItemsQueryParams): Promise<OmedaCity.Items> {
    return findItemsWithClient(params);
  }

  /**
   * Get a item by name
   * @param {string} name
   * @returns {Promise<OmedaCity.Item>}
   */
  getByName(name: string): Promise<OmedaCity.Hero> {
    return findItemByNameWithClient(name);
  }
}
