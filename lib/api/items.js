import { client, createQueryParams } from "./";
/**
 * Find all items
 * @param {Axios} client
 * @returns
 */
const itemsFindAll = (client) => (params) => {
    const query = createQueryParams(params);
    return client
        .get("/items.json" + query)
        .then((response) => {
        const { data } = response;
        return data;
    });
};
export const findItemsWithClient = itemsFindAll(client);
/**
 * Find Item by name
 * @param {Axios} client
 * @returns
 */
const itemsFindByName = (client) => (itemName) => {
    return client
        .get("/items/" + itemName + ".json")
        .then((response) => {
        const { data } = response;
        return data;
    });
};
export const findItemByNameWithClient = itemsFindByName(client);
