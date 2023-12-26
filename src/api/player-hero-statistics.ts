import { Axios, AxiosResponse } from "axios";
import { client, createQueryParams } from ".";
import { PlayerHeroStatisticsOptions, PlayerHeroStatistics } from "src/types";

/**
 * Find Player Hero Statistics by Player Id
 * @param {Axios} client
 * @returns
 */
const playerHeroStatisticsFindByPlayerId =
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

export const findPlayerHeroStatisticsByPlayerIdWithClient =
  playerHeroStatisticsFindByPlayerId(client);
