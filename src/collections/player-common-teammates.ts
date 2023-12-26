import { PlayerCommonTeammates, PlayerCommonTeammatesOptions } from "../types";
import { findPlayerCommonTeammatesByPlayerIdWithClient } from "../api/player-common-teammates";

export class PlayerCommonTeammatesCollection {
  /**
   * Get a common teammates of a Player.
   * @param {PlayerCommonTeammatesOptions} options
   * @returns {Promise<PlayerCommonTeammates>}
   */
  getByPlayerId(
    options: PlayerCommonTeammatesOptions
  ): Promise<PlayerCommonTeammates> {
    return findPlayerCommonTeammatesByPlayerIdWithClient(options);
  }
}
