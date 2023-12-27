import { Axios, AxiosResponse } from "axios";
import { client, createQueryParams } from ".";
import { PlayerCommonTeammatesOptions, PlayerCommonTeammates } from "../types";

/**
 * Find Player by Id
 * @param {Axios} client
 * @returns
 */
const playerCommonTeammatesFindByPlayerId =
  (client: Axios) => (options: PlayerCommonTeammatesOptions) => {
    const { playerId, params } = options;
    const query = createQueryParams(params);
    return client
      .get<PlayerCommonTeammates>(
        "/players/" + playerId + "/common_teammates.json" + query
      )
      .then((response: AxiosResponse) => {
        const { data } = response;
        return data as PlayerCommonTeammates;
      });
  };

export const findPlayerCommonTeammatesByPlayerIdWithClient =
  playerCommonTeammatesFindByPlayerId(client);
