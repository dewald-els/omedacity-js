import { Heroes, Hero } from "../types";
import { heroesFindAll, heroesFindByName } from "../api/heroes";
import { client } from "src/api";

const findHeroByNameWithClient = heroesFindByName(client);
const findHeroesWithClient = heroesFindAll(client);
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
