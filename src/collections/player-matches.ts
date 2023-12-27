import { Matches, PlayerMatchesOptions } from "../types";
import { playerMatchesFindByPlayerId } from "../api/player-matches";
import { client } from "../api";

const findPlayerMatchesByPlayerIdWithClient =
  playerMatchesFindByPlayerId(client);

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
