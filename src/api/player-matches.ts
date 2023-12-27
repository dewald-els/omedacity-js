import { Axios, AxiosResponse } from "axios";
import { createQueryParams } from "./index";
import { PlayerMatchesOptions, Matches } from "../types";

/**
 * Find Player by Id
 * @param {Axios} client
 * @returns
 */
export const playerMatchesFindByPlayerId =
  (client: Axios) => (options: PlayerMatchesOptions) => {
    const { playerId, params } = options;
    const query = createQueryParams(params);
    return client
      .get<Matches>("/players/" + playerId + "/matches.json" + query)
      .then((response: AxiosResponse) => {
        const { data } = response;
        return data as Matches;
      });
  };
