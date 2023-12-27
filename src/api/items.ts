import { Axios, AxiosResponse } from "axios";
import { client, createQueryParams } from "./";
import { ItemsQueryParams, Items, Item } from "../types";

/**
 * Find all items
 * @param {Axios} client
 * @returns
 */
const itemsFindAll =
  (client: Axios) =>
  (params?: ItemsQueryParams): Promise<Items> => {
    const query = createQueryParams<ItemsQueryParams>(params);
    return client
      .get<Items>("/items.json" + query)
      .then((response: AxiosResponse) => {
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
const itemsFindByName = (client: Axios) => (itemName: string) => {
  return client
    .get<Item>("/items/" + itemName + ".json")
    .then((response: AxiosResponse) => {
      const { data } = response;
      return data;
    });
};

export const findItemByNameWithClient = itemsFindByName(client);
