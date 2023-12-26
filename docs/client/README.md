# OmedaCity JavaScript SDK - OmedaCityClient

The library exposes a OmedaCityClient class that can be instantiated to gain access to all endpoints.

```typescript
import { OmedaCityClient } from "omedacity-js";

const client = new OmedaCityClient();
```

## Definition

```typescript
class OmedaCityClient {
  builds: BuildsCollection;
  heroes: HeroesCollection;
  matches: MatchesCollection;
  players: PlayersCollection;
  items: ItemsCollection;
  playerMatches: PlayerMatchesCollection;
  playerStatistics: PlayerStatisticsCollection;
  playerHeroStatistics: PlayerHeroStatisticsCollection;
  playerCommonTeammates: PlayerCommonTeammatesCollection;
}
```
