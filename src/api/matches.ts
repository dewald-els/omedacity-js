import { Axios, AxiosResponse } from "axios";
import { createQueryParams } from "./index";
import { Match, Matches, MatchesQueryParams } from "../types";

/**
 * Find all matches
 * @param {Axios} client
 * @returns
 */
export const matchesFindAll =
  (client: Axios) =>
  (params?: MatchesQueryParams): Promise<Matches> => {
    const query = createQueryParams<MatchesQueryParams>(params);
    return client
      .get<Matches>("/matches.json" + query)
      .then((response: AxiosResponse) => {
        const { data } = response;
        return data;
      });
  };

/**
 * Find Match by Id
 * @param {Axios} client
 * @returns
 */
export const matchesFindById = (client: Axios) => (matchId: string) => {
  return client
    .get<Match>("/matches/" + matchId + ".json")
    .then((response: AxiosResponse) => {
      const { data } = response;
      return data;
    });
};
