import {
  findPlayerByIdWithClient,
  findPlayersWithClient,
} from "../api/players";
import { OmedaCity } from "../types";

export class PlayersCollection {
  /**
   * Get all Players
   * @returns {Promise<OmedaCity.Players>}
   */
  get(params?: OmedaCity.PlayersQueryParams): Promise<OmedaCity.Players> {
    return findPlayersWithClient(params);
  }

  /**
   * Get a Player by Id
   * @param {string} playerId
   * @returns {Promise<OmedaCity.Player>}
   */
  getById(playerId: string): Promise<OmedaCity.Match> {
    return findPlayerByIdWithClient(playerId);
  }
}
