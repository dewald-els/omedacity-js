import { OmedaCity } from "../types";
export declare class HeroesCollection {
    /**
     * Get all heroes
     * @returns {Promise<OmedaCity.Heroes>}
     */
    get(): Promise<OmedaCity.Heroes>;
    /**
     * Get a hero by name
     * @param {string} name
     * @returns {Promise<OmedaCity.Hero>}
     */
    getByName(name: string): Promise<OmedaCity.Hero>;
}
