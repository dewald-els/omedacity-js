import { PlayerHeroStatisticsOptions, PlayerHeroStatistics } from "../types";
import { playerHeroStatisticsFindByPlayerId } from "../api/player-hero-statistics";
import { client } from "../api";

const findPlayerHeroStatisticsByPlayerIdWithClient =
  playerHeroStatisticsFindByPlayerId(client);

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
