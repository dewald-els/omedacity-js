import { findMatchByIdWithClient, findMatchesWithClient } from "../api/matches";
export class MatchesCollection {
    /**
     * Get all matches
     * @returns {Promise<OmedaCity.Matches>}
     */
    get(params) {
        return findMatchesWithClient(params);
    }
    /**
     * Get a match by Id
     * @param {string} matchId
     * @returns {Promise<OmedaCity.Match>}
     */
    getById(matchId) {
        return findMatchByIdWithClient(matchId);
    }
}
