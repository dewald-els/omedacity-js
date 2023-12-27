import { Builds, Build } from "../types";
import { buildsFindAll, buildsFindById } from "../api/builds";
import { client } from "src/api";

const findBuildsWithClient = buildsFindAll(client);
const findBuildByIdWithClient = buildsFindById(client);

export class BuildsCollection {
  /**
   * Get all Builds
   * @returns {Promise<Builds>}
   */
  get(): Promise<Builds> {
    return findBuildsWithClient();
  }

  /**
   * Get a Build by BuildId
   * @param {string} buildId
   * @returns {Promise<Build>}
   */
  getById(buildId: string): Promise<Build> {
    return findBuildByIdWithClient(buildId);
  }
}
