import { findPlayerCommonTeammatesByPlayerIdWithClient } from "../api/player-common-teammates";
import { OmedaCity } from "../types";

export class PlayerCommonTeammatesCollection {
  /**
   * Get a common teammates of a Player.
   * @param {PlayerCommonTeammatesOptions} options
   * @returns {Promise<OmedaCity.PlayerCommonTeammates>}
   */
  getByPlayerId(
    options: OmedaCity.PlayerCommonTeammatesOptions
  ): Promise<OmedaCity.PlayerCommonTeammates> {
    return findPlayerCommonTeammatesByPlayerIdWithClient(options);
  }
}
