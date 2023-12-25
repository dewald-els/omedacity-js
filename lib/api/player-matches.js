import { client, createQueryParams } from ".";
/**
 * Find Player by Id
 * @param {Axios} client
 * @returns
 */
const playerMatchesFindByPlayerId = (client) => (options) => {
    const { playerId, params } = options;
    const query = createQueryParams(params);
    return client
        .get("/players/" + playerId + "/matches.json" + query)
        .then((response) => {
        const { data } = response;
        return data;
    });
};
export const findPlayerMatchesByPlayerIdWithClient = playerMatchesFindByPlayerId(client);
