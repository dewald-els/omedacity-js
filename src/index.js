import { HeroesCollection } from "./collections/heroes.js";
import { Heroes } from "./constants/heroes.js";

class OmedaCityClient {
  heroes = new HeroesCollection();
}

export default OmedaCityClient;

const client = new OmedaCityClient();
const heroes = await client.heroes.get();
const hero = await client.heroes.getByName(Heroes.Crunch);
