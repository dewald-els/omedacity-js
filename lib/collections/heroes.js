import { findHeroByNameWithClient, findHeroesWithClient } from "../api/heroes";
export class HeroesCollection {
    /**
     * Get all heroes
     * @returns {Promise<OmedaCity.Heroes>}
     */
    get() {
        return findHeroesWithClient();
    }
    /**
     * Get a hero by name
     * @param {string} name
     * @returns {Promise<OmedaCity.Hero>}
     */
    getByName(name) {
        return findHeroByNameWithClient(name);
    }
}
