import { findPlayerByIdWithClient, findPlayersWithClient, } from "../api/players";
export class PlayersCollection {
    /**
     * Get all matches
     * @returns {Promise<OmedaCity.Players>}
     */
    get(params) {
        return findPlayersWithClient(params);
    }
    /**
     * Get a match by Id
     * @param {string} playerId
     * @returns {Promise<OmedaCity.Player>}
     */
    getById(playerId) {
        return findPlayerByIdWithClient(playerId);
    }
}
