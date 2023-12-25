import { client, createQueryParams } from "./";
/**
 * Find all matches
 * @param {Axios} client
 * @returns
 */
const matchesFindAll = (client) => (params) => {
    const query = createQueryParams(params);
    return client
        .get("/matches.json" + query)
        .then((response) => {
        const { data } = response;
        return data;
    });
};
export const findMatchesWithClient = matchesFindAll(client);
/**
 * Find Match by Id
 * @param {Axios} client
 * @returns
 */
const matchesFindById = (client) => (matchId) => {
    return client
        .get("/matches/" + matchId + ".json")
        .then((response) => {
        const { data } = response;
        return data;
    });
};
export const findMatchByIdWithClient = matchesFindById(client);
