import { Axios, AxiosResponse } from "axios";
import { createQueryParams } from "./index";
import { PlayersQueryParams, Players, Matches, Player } from "../types";

/**
 * Find all Players
 * @param {Axios} client
 * @returns
 */
export const playersFindAll =
  (client: Axios) =>
  (params?: PlayersQueryParams): Promise<Players> => {
    const query = createQueryParams<PlayersQueryParams>(params);
    return client
      .get<Matches>("/players.json" + query)
      .then((response: AxiosResponse) => {
        const { data } = response;
        return data;
      });
  };

/**
 * Find Player by Id
 * @param {Axios} client
 * @returns
 */
export const playersFindById = (client: Axios) => (playerId: string) => {
  return client
    .get<Player>("/players/" + playerId + ".json")
    .then((response: AxiosResponse) => {
      const { data } = response;
      return data;
    });
};
