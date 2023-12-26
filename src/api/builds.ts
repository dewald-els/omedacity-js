import { Axios, AxiosResponse } from "axios";
import { client } from "./";
import { Build, Builds, Heroes } from "../types";

/**
 * Find all builds
 * @param {Axios} client
 * @returns
 */
const buildsFindAll = (client: Axios) => (): Promise<Builds> => {
  return client.get<Heroes>("/builds.json").then((response: AxiosResponse) => {
    const { data } = response;
    return data as Builds;
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
    .get<Build>("/builds/" + buildId + ".json")
    .then((response: AxiosResponse) => {
      const { data } = response;
      return data as Build;
    });
};

export const findBuildByIdWithClient = buildsFindById(client);
