import { Axios, AxiosResponse } from "axios";
import { createQueryParams } from ".";
import { PlayerMatchesOptions, PlayerStatistics } from "../types";

/**
 * Find Player Statistics by Player Id
 * @param {Axios} client
 * @returns
 */
export const playerStatisticsFindByPlayerId =
  (client: Axios) => (options: PlayerMatchesOptions) => {
    const { playerId, params } = options;
    const query = createQueryParams(params);
    return client
      .get<PlayerStatistics>(
        "/players/" + playerId + "/statistics.json" + query
      )
      .then((response: AxiosResponse) => {
        const { data } = response;
        return data as PlayerStatistics;
      });
  };
