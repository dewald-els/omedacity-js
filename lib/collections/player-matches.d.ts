import { OmedaCity } from "../types";
export declare class PlayerMatchesCollection {
    /**
     * Get a matches for a Player by Player Id
     * @param {string} playerId
     * @returns {Promise<OmedaCity.Player>}
     */
    getByPlayerId(options: OmedaCity.PlayerMatchesOptions): Promise<OmedaCity.Matches>;
}
