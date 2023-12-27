import { PlayerStatistics, PlayerStatisticsOptions } from "../types";
import { playerStatisticsFindByPlayerId } from "../api/player-statistics";
import { client } from "../api";

const findPlayerStatisticsByPlayerIdWithClient =
  playerStatisticsFindByPlayerId(client);

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
