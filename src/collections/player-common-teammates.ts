import { PlayerCommonTeammates, PlayerCommonTeammatesOptions } from "../types";
import { playerCommonTeammatesFindByPlayerId } from "../api/player-common-teammates";
import { client } from "../api";

const findPlayerCommonTeammatesByPlayerIdWithClient =
  playerCommonTeammatesFindByPlayerId(client);
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
