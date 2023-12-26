import { PlayerStatistics, PlayerStatisticsOptions } from "../types";
import { findPlayerStatisticsByPlayerIdWithClient } from "../api/player-statistics";

export class PlayerStatisticsCollection {
  /**
   * Get a Statistics for a Player by Player Id
   * @param {PlayerStatisticsOptions} options
   * @returns {Promise<PlayerStatistics>}
   */
  getByPlayerId(options: PlayerStatisticsOptions): Promise<PlayerStatistics> {
    return findPlayerStatisticsByPlayerIdWithClient(options);
  }
}
