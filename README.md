# OmedaCity JavaScript SDK (PREVIEW)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white) ![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)

## Table of Contents

- [Examples](#examples)
- [Types](#types)
- [Enums](#enums)
- [OmedaCityClient](#omedacityclient)
- [Collections](#collections)
- [License](#license)
- [Author](#author)
- [Credits](#credits)

## ⚠️ Please note, this is a work in progress and not ready for production

## Examples

### Fetch Heroes

```typescript
import { OmedaCityClient } from "omedacity-js";

/**
 * Example implementation
 */
const client = new OmedaCityClient();
try {
  const heroes = await client.heroes.get();
  const hero = await client.heroes.getByName("Crunch");
} catch (error) {
  // Handle Error.
}
```

### Fetch Player(s) By Matching name

```typescript
import { OmedaCityClient } from "omedacity-js";
const client = new OmedaCityClient();

const players = await client.players.get({
  q: {
    name: "MrBetaMax",
  },
});
```

### Fetch Player Matches

```typescript
import { OmedaCityClient } from "omedacity-js";
import { Roles } from "omedacity-js/types";

const client = new OmedaCityClient();

const playerMatches = await client.playerMatches.getByPlayerId({
  playerId: "1234", // Found from the players.get() response
  params: {
    match_filter: {
      role: Roles.Carry,
    },
  },
});
```

### Fetch Player Statistics

```typescript
import { OmedaCityClient } from "omedacity-js";
import { TimeFrame } from "omedacity-js/types";

const client = new OmedaCityClient();

const stats = await client.playerStatistics.getByPlayerId({
  playerId: "1234", // Found from the players.get() response
  params: {
    time_frame: TimeFrame.OneDay,
  },
});
```

## Types

Types are available to import from [`omedacity-js/types`](src/types/index.ts)

As an example, when using the Offlane Role: `Roles.Offlane`.

## Enums

### Roles

The Roles type can be used to pass to the query parameter `role`.

```typescript
enum Roles {
  Offlane = "offlane",
  Jungle = "jungle",
  Midlane = "midlane",
  Carry = "carry",
  Support = "support",
}
```

### TimeFrame

The `TimeFrame` type can be used to pass to the query parameter `time_frame`.

```typescript
enum TimeFrame {
  All = "ALL",
  ThreeMonths = "3M",
  TwoMonths = "2M",
  OneMonth = "1M",
  OneDay = "1D",
  OneWeek = "1W",
  TwoWeeks = "2W",
  ThreeWeeks = "3W",
}
```

## OmedaCityClient

The library exposes a OmedaCityClient class that can be instantiated to gain access to all endpoints.

```typescript
import { OmedaCityClient } from "omedacity-js";

const client = new OmedaCityClient();
```

### Definition

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

## Collections

Find the definitions for each collection in the [`collections`](./src/collections/) folder.

### Collection definitions

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

## License

- [MIT](./LICENSE.md)

## Author

- [@dewald-els](https://github.com/dewald-els)

## Credits

- Thanks to the devs at [https://com](https://com) for providing a public API.
- Thanks to [@bslie](https://github.com/bslie) for taking initiative to create the [C# SDK](https://github.com/bslie/OmedaCity).
