import { findBuildByIdWithClient, findBuildsWithClient } from "../api/builds";
import { OmedaCity } from "../types";

export class BuildsCollection {
  /**
   * Get all Builds
   * @returns {Promise<OmedaCity.Builds>}
   */
  get(): Promise<OmedaCity.Builds> {
    return findBuildsWithClient();
  }

  /**
   * Get a Build by BuildId
   * @param {string} buildId
   * @returns {Promise<OmedaCity.Build>}
   */
  getById(buildId: string): Promise<OmedaCity.Build> {
    return findBuildByIdWithClient(buildId);
  }
}
