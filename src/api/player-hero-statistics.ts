import { Axios, AxiosResponse } from "axios";
import { client, createQueryParams } from ".";
import { OmedaCity } from "../types";

/**
 * Find Player Hero Statistics by Player Id
 * @param {Axios} client
 * @returns
 */
const playerHeroStatisticsFindByPlayerId =
  (client: Axios) => (options: OmedaCity.PlayerHeroStatisticsOptions) => {
    const { playerId, params } = options;
    const query = createQueryParams(params);
    return client
      .get<OmedaCity.PlayerHeroStatistics>(
        "/players/" + playerId + "/hero_statistics.json" + query
      )
      .then((response: AxiosResponse) => {
        const { data } = response;
        return data as OmedaCity.PlayerHeroStatistics;
      });
  };

export const findPlayerHeroStatisticsByPlayerIdWithClient =
  playerHeroStatisticsFindByPlayerId(client);
