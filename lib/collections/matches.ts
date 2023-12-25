import { findMatchByIdWithClient, findMatchesWithClient } from "../api/matches";
import { OmedaCity } from "../types";

export class MatchesCollection {
  /**
   * Get all matches
   * @returns {Promise<OmedaCity.Matches>}
   */
  get(params?: OmedaCity.ItemsQueryParams): Promise<OmedaCity.Matches> {
    return findMatchesWithClient(params);
  }

  /**
   * Get a match by Id
   * @param {string} matchId
   * @returns {Promise<OmedaCity.Match>}
   */
  getById(matchId: string): Promise<OmedaCity.Match> {
    return findMatchByIdWithClient(matchId);
  }
}
