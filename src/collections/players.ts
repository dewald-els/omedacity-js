import { Player, Players, PlayersQueryParams } from "../types";
import {
  findPlayerByIdWithClient,
  findPlayersWithClient,
} from "../api/players";

export class PlayersCollection {
  /**
   * Get all Players
   * @returns {Promise<Players>}
   */
  get(params?: PlayersQueryParams): Promise<Players> {
    return findPlayersWithClient(params);
  }

  /**
   * Get a Player by Id
   * @param {string} playerId
   * @returns {Promise<Player>}
   */
  getById(playerId: string): Promise<Player> {
    return findPlayerByIdWithClient(playerId);
  }
}
