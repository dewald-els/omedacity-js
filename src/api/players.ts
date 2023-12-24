import { Axios, AxiosResponse } from "axios";
import { client, createQueryParams } from "./";
import { OmedaCity } from "../types";

/**
 * Find all Players
 * @param {Axios} client
 * @returns
 */
const playersFindAll =
  (client: Axios) =>
  (params?: OmedaCity.PlayersQueryParams): Promise<OmedaCity.Players> => {
    const query = createQueryParams<OmedaCity.PlayersQueryParams>(params);
    return client
      .get<OmedaCity.Matches>("/players.json" + query)
      .then((response: AxiosResponse) => {
        const { data } = response;
        return data;
      });
  };

export const findPlayersWithClient = playersFindAll(client);

/**
 * Find Player by Id
 * @param {Axios} client
 * @returns
 */
const playersFindById = (client: Axios) => (playerId: string) => {
  return client
    .get<OmedaCity.Player>("/players/" + playerId + ".json")
    .then((response: AxiosResponse) => {
      const { data } = response;
      return data;
    });
};

export const findPlayerByIdWithClient = playersFindById(client);
