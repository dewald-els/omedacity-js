import { Axios, AxiosResponse } from "axios";
import { client, createQueryParams } from ".";
import { OmedaCity } from "../types";

/**
 * Find Player Statistics by Player Id
 * @param {Axios} client
 * @returns
 */
const playerStatisticsFindByPlayerId =
  (client: Axios) => (options: OmedaCity.PlayerMatchesOptions) => {
    const { playerId, params } = options;
    const query = createQueryParams(params);
    return client
      .get<OmedaCity.PlayerStatistics>(
        "/players/" + playerId + "/statistics.json" + query
      )
      .then((response: AxiosResponse) => {
        const { data } = response;
        return data as OmedaCity.PlayerStatistics;
      });
  };

export const findPlayerStatisticsByPlayerIdWithClient =
  playerStatisticsFindByPlayerId(client);
