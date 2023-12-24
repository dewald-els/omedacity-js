import { client } from "./";
/**
 * Find all heroes
 * @param {Axios} client
 * @returns
 */
const heroesFindAll = (client) => () => {
    return client
        .get("/heroes.json")
        .then((response) => {
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
const heroesFindByName = (client) => (heroName) => {
    return client
        .get("/heroes/" + heroName + ".json")
        .then((response) => {
        const { data } = response;
        return data;
    });
};
export const findHeroByNameWithClient = heroesFindByName(client);
