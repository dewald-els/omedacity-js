import { Matches, PlayerMatchesOptions } from "../types";
import { findPlayerMatchesByPlayerIdWithClient } from "../api/player-matches";

export class PlayerMatchesCollection {
  /**
   * Get a matches for a Player by Player Id
   * @param {PlayerMatchesOptions} options
   * @returns {Promise<Matches>}
   */
  getByPlayerId(options: PlayerMatchesOptions): Promise<Matches> {
    return findPlayerMatchesByPlayerIdWithClient(options);
  }
}
