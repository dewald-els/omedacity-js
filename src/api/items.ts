import { Axios, AxiosResponse } from "axios";
import { createQueryParams } from "./index";
import { ItemsQueryParams, Items, Item } from "../types";

/**
 * Find all items
 * @param {Axios} client
 * @returns
 */
export const itemsFindAll =
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

/**
 * Find Item by name
 * @param {Axios} client
 * @returns
 */
export const itemsFindByName = (client: Axios) => (itemName: string) => {
  return client
    .get<Item>("/items/" + itemName + ".json")
    .then((response: AxiosResponse) => {
      const { data } = response;
      return data;
    });
};
