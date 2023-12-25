import { Axios, AxiosResponse } from "axios";
import { client, createQueryParams } from ".";
import { OmedaCity } from "../types";

/**
 * Find Player by Id
 * @param {Axios} client
 * @returns
 */
const playerMatchesFindByPlayerId =
  (client: Axios) => (options: OmedaCity.PlayerMatchesOptions) => {
    const { playerId, params } = options;
    const query = createQueryParams(params);
    return client
      .get<OmedaCity.Matches>("/players/" + playerId + "/matches.json" + query)
      .then((response: AxiosResponse) => {
        const { data } = response;
        return data as OmedaCity.Matches;
      });
  };

export const findPlayerMatchesByPlayerIdWithClient =
  playerMatchesFindByPlayerId(client);
