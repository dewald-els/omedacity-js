import { findHeroByNameWithClient, findHeroesWithClient } from "../api/heroes";
import { OmedaCity } from "../types";

export class HeroesCollection {
  /**
   * Get all heroes
   * @returns {Promise<OmedaCity.Heroes>}
   */
  get(): Promise<OmedaCity.Heroes> {
    return findHeroesWithClient();
  }

  /**
   * Get a hero by name
   * @param {string} name
   * @returns {Promise<OmedaCity.Hero>}
   */
  getByName(name: string): Promise<OmedaCity.Hero> {
    return findHeroByNameWithClient(name);
  }
}
