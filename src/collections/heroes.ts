import { Heroes, Hero } from "../types";
import { findHeroByNameWithClient, findHeroesWithClient } from "../api/heroes";

export class HeroesCollection {
  /**
   * Get all heroes
   * @returns {Promise<Heroes>}
   */
  get(): Promise<Heroes> {
    return findHeroesWithClient();
  }

  /**
   * Get a hero by name
   * @param {string} name
   * @returns {Promise<Hero>}
   */
  getByName(name: string): Promise<Hero> {
    return findHeroByNameWithClient(name);
  }
}
