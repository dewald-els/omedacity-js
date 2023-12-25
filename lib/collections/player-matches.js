import { findPlayerMatchesByPlayerIdWithClient } from "../api/player-matches";
export class PlayerMatchesCollection {
    /**
     * Get a matches for a Player by Player Id
     * @param {string} playerId
     * @returns {Promise<OmedaCity.Player>}
     */
    getByPlayerId(options) {
        return findPlayerMatchesByPlayerIdWithClient(options);
    }
}
