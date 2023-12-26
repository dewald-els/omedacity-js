import { ItemsQueryParams, Matches, Match } from "../types";
import { findMatchByIdWithClient, findMatchesWithClient } from "../api/matches";

export class MatchesCollection {
  /**
   * Get all matches
   * @returns {Promise<Matches>}
   */
  get(params?: ItemsQueryParams): Promise<Matches> {
    return findMatchesWithClient(params);
  }

  /**
   * Get a match by Id
   * @param {string} matchId
   * @returns {Promise<Match>}
   */
  getById(matchId: string): Promise<Match> {
    return findMatchByIdWithClient(matchId);
  }
}
