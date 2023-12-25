import { OmedaCity } from "../types";
export declare class MatchesCollection {
    /**
     * Get all matches
     * @returns {Promise<OmedaCity.Matches>}
     */
    get(params?: OmedaCity.ItemsQueryParams): Promise<OmedaCity.Matches>;
    /**
     * Get a match by Id
     * @param {string} matchId
     * @returns {Promise<OmedaCity.Match>}
     */
    getById(matchId: string): Promise<OmedaCity.Match>;
}
