import { findPlayerStatisticsByPlayerIdWithClient } from "../api/player-statistics";
export class PlayerStatisticsCollection {
    /**
     * Get a Statistics for a Player by Player Id
     * @param {string} playerId
     * @returns {Promise<OmedaCity.PlayerStatistics>}
     */
    getByPlayerId(options) {
        return findPlayerStatisticsByPlayerIdWithClient(options);
    }
}
