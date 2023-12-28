import { Builds, Build, BuildsQueryParams } from "../types";
import { buildsFindAll, buildsFindById } from "../api/builds";
import { client } from "../api";

const findBuildsWithClient = buildsFindAll(client);
const findBuildByIdWithClient = buildsFindById(client);

export class BuildsCollection {
  /**
   * Get all Builds
   * @param {BuildsQueryParams} params
   * @returns {Promise<Builds>}
   */
  get(params?: BuildsQueryParams): Promise<Builds> {
    return findBuildsWithClient(params);
  }

  /**
   * Get a Build by BuildId
   * @param {number} buildId
   * @returns {Promise<Build>}
   */
  getById(buildId: number): Promise<Build> {
    return findBuildByIdWithClient(buildId);
  }
}
