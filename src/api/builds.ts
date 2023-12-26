import { Axios, AxiosResponse } from "axios";
import { client } from "./";
import { OmedaCity } from "../types";

/**
 * Find all builds
 * @param {Axios} client
 * @returns
 */
const buildsFindAll = (client: Axios) => (): Promise<OmedaCity.Builds> => {
  return client
    .get<OmedaCity.Heroes>("/builds.json")
    .then((response: AxiosResponse) => {
      const { data } = response;
      return data as OmedaCity.Builds;
    });
};

export const findBuildsWithClient = buildsFindAll(client);

/**
 * Find Build by BuildId
 * @param {Axios} client
 * @returns
 */
const buildsFindById = (client: Axios) => (buildId: string) => {
  return client
    .get<OmedaCity.Build>("/builds/" + buildId + ".json")
    .then((response: AxiosResponse) => {
      const { data } = response;
      return data as OmedaCity.Build;
    });
};

export const findBuildByIdWithClient = buildsFindById(client);
