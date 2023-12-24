import { HeroesCollection } from "./collections/heroes";
import { ItemsCollection } from "./collections/items";
import { MatchesCollection } from "./collections/matches";
import { PlayerMatchesCollection } from "./collections/player-matches";
import { PlayersCollection } from "./collections/players";
import { OmedaCity } from "./types";

class OmedaCityClient {
  heroes = new HeroesCollection();
  items = new ItemsCollection();
  matches = new MatchesCollection();
  players = new PlayersCollection();
  playerMatches = new PlayerMatchesCollection();
}

export default OmedaCityClient;
const client = new OmedaCityClient();

client.playerMatches.getByPlayerId({
  playerId: "qwer",
  params: {
    match_filter: {
      role: OmedaCity.Roles.Carry
    }
  }
})