import { findHeroByNameWithClient, findHeroesWithClient } from "../api/heroes";
export class HeroesCollection {
    get() {
        return findHeroesWithClient();
    }
    /**
     * Get a hero by name
     * @param {string} name
     * @returns
     */
    getByName(name) {
        return findHeroByNameWithClient(name);
    }
}
