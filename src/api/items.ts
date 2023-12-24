import { Axios, AxiosResponse } from "axios";
import { client, createQueryParams } from "./";
import { OmedaCity } from "../types";

/**
 * Find all items
 * @param {Axios} client
 * @returns
 */
const itemsFindAll =
  (client: Axios) =>
  (params?: OmedaCity.ItemsQueryParams): Promise<OmedaCity.Items> => {
    const query = createQueryParams<OmedaCity.ItemsQueryParams>(params);
    return client
      .get<OmedaCity.Items>("/items.json" + query)
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
    .get<OmedaCity.Item>("/items/" + itemName + ".json")
    .then((response: AxiosResponse) => {
      const { data } = response;
      return data;
    });
};

export const findItemByNameWithClient = itemsFindByName(client);
