import { client, createQueryParams } from ".";
/**
 * Find Player Statistics by Player Id
 * @param {Axios} client
 * @returns
 */
const playerStatisticsFindByPlayerId = (client) => (options) => {
    const { playerId, params } = options;
    const query = createQueryParams(params);
    return client
        .get("/players/" + playerId + "/statistics.json" + query)
        .then((response) => {
        const { data } = response;
        return data;
    });
};
export const findPlayerStatisticsByPlayerIdWithClient = playerStatisticsFindByPlayerId(client);
