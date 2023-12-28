import { Axios, AxiosResponse } from "axios";
import { Build, Builds, BuildsQueryParams } from "../types";
import { createQueryParams } from ".";

/**
 * Find all builds
 * @param {Axios} client
 * @returns
 */
export const buildsFindAll =
  (client: Axios) =>
  (params?: BuildsQueryParams): Promise<Builds> => {
    const query = createQueryParams(params);
    return client
      .get<Builds>("/builds.json" + query)
      .then((response: AxiosResponse) => {
        const { data } = response;
        return data as Builds;
      });
  };

/**
 * Find Build by BuildId
 * @param {Axios} client
 * @returns
 */
export const buildsFindById = (client: Axios) => (buildId: number) => {
  return client
    .get<Build>("/builds/" + buildId + ".json")
    .then((response: AxiosResponse) => {
      const { data } = response;
      return data as Build;
    });
};
