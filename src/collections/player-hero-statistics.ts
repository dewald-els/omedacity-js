import { PlayerHeroStatisticsOptions, PlayerHeroStatistics } from "../types";
import { findPlayerHeroStatisticsByPlayerIdWithClient } from "../api/player-hero-statistics";

export class PlayerHeroStatisticsCollection {
  /**
   * Get a Hero Statistics for a Player by Player Id
   * @param {PlayerHeroStatisticsOptions} options
   * @returns {Promise<PlayerHeroStatistics>}
   */
  getByPlayerId(
    options: PlayerHeroStatisticsOptions
  ): Promise<PlayerHeroStatistics> {
    return findPlayerHeroStatisticsByPlayerIdWithClient(options);
  }
}
