import { HeroesCollection } from "./collections/heroes";
import { ItemsCollection } from "./collections/items";
import { MatchesCollection } from "./collections/matches";
import { PlayerMatchesCollection } from "./collections/player-matches";
import { PlayerStatisticsCollection } from "./collections/player-statistics";
import { PlayersCollection } from "./collections/players";
import { OmedaCity } from "./types";
class OmedaCityClient {
    heroes = new HeroesCollection();
    items = new ItemsCollection();
    matches = new MatchesCollection();
    players = new PlayersCollection();
    playerMatches = new PlayerMatchesCollection();
    playerStatistics = new PlayerStatisticsCollection();
}
export default OmedaCityClient;
const client = new OmedaCityClient();
client.playerStatistics.getByPlayerId({
    playerId: "1",
    params: {
        time_frame: OmedaCity.TimeFrame.OneDay,
    },
});
