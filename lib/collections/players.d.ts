import { OmedaCity } from "../types";
export declare class PlayersCollection {
    /**
     * Get all matches
     * @returns {Promise<OmedaCity.Players>}
     */
    get(params?: OmedaCity.PlayersQueryParams): Promise<OmedaCity.Players>;
    /**
     * Get a match by Id
     * @param {string} playerId
     * @returns {Promise<OmedaCity.Player>}
     */
    getById(playerId: string): Promise<OmedaCity.Match>;
}
