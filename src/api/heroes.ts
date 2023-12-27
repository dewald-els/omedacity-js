import { Axios, AxiosResponse } from "axios";
import { client } from "./";
import { Heroes, Hero } from "../types";

/**
 * Find all heroes
 * @param {Axios} client
 * @returns
 */
export const heroesFindAll = (client: Axios) => (): Promise<Heroes> => {
  return client.get<Heroes>("/heroes.json").then((response: AxiosResponse) => {
    const { data } = response;
    return data;
  });
};

/**
 * Find Hero by name
 * @param {Axios} client
 * @returns
 */
export const heroesFindByName = (client: Axios) => (heroName: string) => {
  return client
    .get<Hero>("/heroes/" + heroName + ".json")
    .then((response: AxiosResponse) => {
      const { data } = response;
      return data;
    });
};
