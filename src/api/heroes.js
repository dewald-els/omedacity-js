import { Axios } from "axios";
import { client } from ".";

/**
 * Find all heroes
 * @param {Axios} client
 * @returns
 */
function heroesFindAll(client) {
  return async function () {
    return client.get("/heroes.json").then((response) => {
      const { data } = response;
      /** @type {import("../index.d.ts").OmedaCity.Heroes} */
      const heroes = data;
      return heroes;
    });
  };
}

export const findHeroesWithClient = heroesFindAll(client);

/**
 * Find Hero by name
 * @param {Axios} client
 * @returns
 */
function heroesFindByName(client) {
  /**
   * @param {string} heroName
   */
  return async function (heroName) {
    return client.get("/heroes/" + heroName + ".json").then((response) => {
      const { data } = response;
      /** @type {import("../index.d.ts").OmedaCity.Hero} */
      const heroes = data;
      return heroes;
    });
  };
}

export const findHeroByNameWithClient = heroesFindByName(client);
