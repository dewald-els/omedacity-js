import { Axios, AxiosResponse } from "axios";
import { client } from "./";
import { OmedaCity } from "../types";

/**
 * Find all heroes
 * @param {Axios} client
 * @returns
 */
const heroesFindAll = (client: Axios) => (): Promise<OmedaCity.Heroes> => {
  return client
    .get<OmedaCity.Heroes>("/heroes.json")
    .then((response: AxiosResponse) => {
      const { data } = response;
      return data;
    });
};

export const findHeroesWithClient = heroesFindAll(client);

/**
 * Find Hero by name
 * @param {Axios} client
 * @returns
 */
const heroesFindByName = (client: Axios) => (heroName: string) => {
  return client
    .get<OmedaCity.Hero>("/heroes/" + heroName + ".json")
    .then((response: AxiosResponse) => {
      const { data } = response;
      return data;
    });
};

export const findHeroByNameWithClient = heroesFindByName(client);
