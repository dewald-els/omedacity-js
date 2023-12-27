import { Axios, AxiosResponse } from "axios";
import { client, createQueryParams } from ".";
import { PlayerMatchesOptions, PlayerStatistics } from "../types";

/**
 * Find Player Statistics by Player Id
 * @param {Axios} client
 * @returns
 */
const playerStatisticsFindByPlayerId =
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

export const findPlayerStatisticsByPlayerIdWithClient =
  playerStatisticsFindByPlayerId(client);
