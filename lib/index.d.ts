import { HeroesCollection } from "./collections/heroes";
import { ItemsCollection } from "./collections/items";
import { MatchesCollection } from "./collections/matches";
import { PlayerMatchesCollection } from "./collections/player-matches";
import { PlayerStatisticsCollection } from "./collections/player-statistics";
import { PlayersCollection } from "./collections/players";
declare class OmedaCityClient {
    heroes: HeroesCollection;
    items: ItemsCollection;
    matches: MatchesCollection;
    players: PlayersCollection;
    playerMatches: PlayerMatchesCollection;
    playerStatistics: PlayerStatisticsCollection;
}
export default OmedaCityClient;
