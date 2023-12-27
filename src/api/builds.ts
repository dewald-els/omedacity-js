import { Axios, AxiosResponse } from "axios";
import { Build, Builds, Heroes } from "../types";

/**
 * Find all builds
 * @param {Axios} client
 * @returns
 */
export const buildsFindAll = (client: Axios) => (): Promise<Builds> => {
  return client.get<Heroes>("/builds.json").then((response: AxiosResponse) => {
    const { data } = response;
    return data as Builds;
  });
};

/**
 * Find Build by BuildId
 * @param {Axios} client
 * @returns
 */
export const buildsFindById = (client: Axios) => (buildId: string) => {
  return client
    .get<Build>("/builds/" + buildId + ".json")
    .then((response: AxiosResponse) => {
      const { data } = response;
      return data as Build;
    });
};
