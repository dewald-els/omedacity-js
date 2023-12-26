import { findPlayerStatisticsByPlayerIdWithClient } from "../api/player-statistics";
import { OmedaCity } from "../types";

export class PlayerStatisticsCollection {
  /**
   * Get a Statistics for a Player by Player Id
   * @param {OmedaCity.PlayerStatisticsOptions} options
   * @returns {Promise<OmedaCity.PlayerStatistics>}
   */
  getByPlayerId(
    options: OmedaCity.PlayerStatisticsOptions
  ): Promise<OmedaCity.PlayerStatistics> {
    return findPlayerStatisticsByPlayerIdWithClient(options);
  }
}
