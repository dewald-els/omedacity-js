import { findPlayerHeroStatisticsByPlayerIdWithClient } from "../api/player-hero-statistics";
import { OmedaCity } from "../types";

export class PlayerHeroStatisticsCollection {
  /**
   * Get a Hero Statistics for a Player by Player Id
   * @param {OmedaCity.PlayerHeroStatisticsOptions} options
   * @returns {Promise<OmedaCity.PlayerHeroStatistics>}
   */
  getByPlayerId(
    options: OmedaCity.PlayerHeroStatisticsOptions
  ): Promise<OmedaCity.PlayerHeroStatistics> {
    return findPlayerHeroStatisticsByPlayerIdWithClient(options);
  }
}
