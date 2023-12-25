import { client, createQueryParams } from "./";
/**
 * Find all Players
 * @param {Axios} client
 * @returns
 */
const playersFindAll = (client) => (params) => {
    const query = createQueryParams(params);
    return client
        .get("/players.json" + query)
        .then((response) => {
        const { data } = response;
        return data;
    });
};
export const findPlayersWithClient = playersFindAll(client);
/**
 * Find Player by Id
 * @param {Axios} client
 * @returns
 */
const playersFindById = (client) => (playerId) => {
    return client
        .get("/players/" + playerId + ".json")
        .then((response) => {
        const { data } = response;
        return data;
    });
};
export const findPlayerByIdWithClient = playersFindById(client);
