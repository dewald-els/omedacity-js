import { BuildsCollection } from "./collections/builds";
import { HeroesCollection } from "./collections/heroes";
import { ItemsCollection } from "./collections/items";
import { MatchesCollection } from "./collections/matches";
import { PlayerCommonTeammatesCollection } from "./collections/player-common-teammates";
import { PlayerHeroStatisticsCollection } from "./collections/player-hero-statistics";
import { PlayerMatchesCollection } from "./collections/player-matches";
import { PlayerStatisticsCollection } from "./collections/player-statistics";
import { PlayersCollection } from "./collections/players";

export class OmedaCityClient {
  heroes = new HeroesCollection();
  items = new ItemsCollection();
  matches = new MatchesCollection();
  players = new PlayersCollection();
  playerMatches = new PlayerMatchesCollection();
  playerStatistics = new PlayerStatisticsCollection();
  playerHeroStatistics = new PlayerHeroStatisticsCollection();
  playerCommonTeammates = new PlayerCommonTeammatesCollection();
  builds = new BuildsCollection();
}

const client = new OmedaCityClient();
client.builds.get({
  page: 1,
  filter: {
    hero_id: 1,
    modules: false,
  },
});
