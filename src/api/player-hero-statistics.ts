import { Axios, AxiosResponse } from "axios";
import { createQueryParams } from ".";
import { PlayerHeroStatisticsOptions, PlayerHeroStatistics } from "../types";

/**
 * Find Player Hero Statistics by Player Id
 * @param {Axios} client
 * @returns
 */
export const playerHeroStatisticsFindByPlayerId =
  (client: Axios) => (options: PlayerHeroStatisticsOptions) => {
    const { playerId, params } = options;
    const query = createQueryParams(params);
    return client
      .get<PlayerHeroStatistics>(
        "/players/" + playerId + "/hero_statistics.json" + query
      )
      .then((response: AxiosResponse) => {
        const { data } = response;
        return data as PlayerHeroStatistics;
      });
  };
