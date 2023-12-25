import { OmedaCity } from "../types";
export declare class ItemsCollection {
    /**
     * Get all items
     * @returns {Promise<OmedaCity.Items>}
     */
    get(params?: OmedaCity.ItemsQueryParams): Promise<OmedaCity.Items>;
    /**
     * Get a item by name
     * @param {string} name
     * @returns {Promise<OmedaCity.Item>}
     */
    getByName(name: string): Promise<OmedaCity.Hero>;
}
