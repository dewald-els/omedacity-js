# OmedaCity JavaScript SDK - Collections

Currently the Collections are an abstraction over the functions making the API request. This was intentionally done to allow for future updates like caching the results.

## Collection definitions

```typescript
interface HeroesCollection {
  get(): Promise<Heroes>;
  getByName(name: string): Promise<Hero>;
}

interface BuildsCollection {
  get(): Promise<Builds>;
  getById(buildId: string): Promise<Build>;
}

interface ItemsCollection {
  get(params?: ItemsQueryParams): Promise<Items>;
  getByName(name: string): Promise<Hero>;
}

interface MatchesCollection {
  get(params?: ItemsQueryParams): Promise<Matches>;
  getById(matchId: string): Promise<Match>;
}

interface PlayerCommonTeammatesCollection {
  getByPlayerId(
    options: PlayerCommonTeammatesOptions
  ): Promise<PlayerCommonTeammates>;
}

interface PlayerHeroStatisticsCollection {
  getByPlayerId(
    options: PlayerHeroStatisticsOptions
  ): Promise<PlayerHeroStatistics>;
}

interface PlayerMatchesCollection {
  getByPlayerId(options: PlayerMatchesOptions): Promise<Matches>;
}

interface PlayerStatisticsCollection {
  getByPlayerId(options: PlayerStatisticsOptions): Promise<PlayerStatistics>;
}

interface PlayersCollection {
  get(params?: PlayersQueryParams): Promise<Players>;
  getById(playerId: string): Promise<Match>;
}
```
