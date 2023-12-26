import { Builds, Build } from "../types";
import { findBuildByIdWithClient, findBuildsWithClient } from "../api/builds";

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
