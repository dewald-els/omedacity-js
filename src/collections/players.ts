import { Player, Players, PlayersQueryParams } from "../types";
import { playersFindAll, playersFindById } from "../api/players";
import { client } from "../api";

const findPlayersWithClient = playersFindAll(client);
const findPlayerByIdWithClient = playersFindById(client);
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
