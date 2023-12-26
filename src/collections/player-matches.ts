import { findPlayerMatchesByPlayerIdWithClient } from "../api/player-matches";
import { OmedaCity } from "../types";

export class PlayerMatchesCollection {
  /**
   * Get a matches for a Player by Player Id
   * @param {OmedaCity.PlayerMatchesOptions} options
   * @returns {Promise<OmedaCity.Player>}
   */
  getByPlayerId(
    options: OmedaCity.PlayerMatchesOptions
  ): Promise<OmedaCity.Matches> {
    return findPlayerMatchesByPlayerIdWithClient(options);
  }
}
