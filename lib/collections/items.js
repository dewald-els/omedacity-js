import { findItemByNameWithClient, findItemsWithClient } from "../api/items";
export class ItemsCollection {
    /**
     * Get all items
     * @returns {Promise<OmedaCity.Items>}
     */
    get(params) {
        return findItemsWithClient(params);
    }
    /**
     * Get a item by name
     * @param {string} name
     * @returns {Promise<OmedaCity.Item>}
     */
    getByName(name) {
        return findItemByNameWithClient(name);
    }
}
