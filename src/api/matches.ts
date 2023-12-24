import { Axios, AxiosResponse } from "axios";
import { client, createQueryParams } from "./";
import { OmedaCity } from "../types";

/**
 * Find all matches
 * @param {Axios} client
 * @returns
 */
const matchesFindAll =
  (client: Axios) =>
  (params?: OmedaCity.MatchesQueryParams): Promise<OmedaCity.Matches> => {
    const query = createQueryParams<OmedaCity.MatchesQueryParams>(params);
    return client
      .get<OmedaCity.Matches>("/matches.json" + query)
      .then((response: AxiosResponse) => {
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
const matchesFindById = (client: Axios) => (matchId: string) => {
  return client
    .get<OmedaCity.Match>("/matches/" + matchId + ".json")
    .then((response: AxiosResponse) => {
      const { data } = response;
      return data;
    });
};

export const findMatchByIdWithClient = matchesFindById(client);
