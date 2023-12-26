# OmedaCity JavaScript SDK - Examples

## Builds

### Get all builds

```typescript
import { OmedaCityClient } from "omedacity-js";
const client = new OmedaCityClient();
const builds = await client.builds.get();
```

### Get build by Id

```typescript
import { OmedaCityClient } from "omedacity-js";
const client = new OmedaCityClient();
const build = await client.builds.getById("<build-id>");
```

## Heroes

### Get all heroes

```typescript
import { OmedaCityClient } from "omedacity-js";
const client = new OmedaCityClient();
const heroes = await client.heroes.get();
```

### Get Hero by name

```typescript
import { OmedaCityClient } from "omedacity-js";
const client = new OmedaCityClient();
const hero = await client.heroes.getByName("Crunch");
```

## Items

### Get all items

```typescript
import { OmedaCityClient } from "omedacity-js";
const client = new OmedaCityClient();
const items = await client.items.get();
```

### Get items by name

```typescript
import { OmedaCityClient } from "omedacity-js";
const client = new OmedaCityClient();
const item = await client.items.getByName("Wraith_SonarDrone");
```

## Matches

### Get all matches

```typescript
import { OmedaCityClient } from "omedacity-js";
const client = new OmedaCityClient();
const matches = await client.matches.get();
```

### Get match by Id

```typescript
import { OmedaCityClient } from "omedacity-js";
const client = new OmedaCityClient();
const match = await client.matches.getById("<match-id>");
```

## Player Common Teammates

### Get common teammates for a Player

```typescript
import { OmedaCityClient } from "omedacity-js";
import { TimeFrame } from "omedacity-js/types";

const client = new OmedaCityClient();

const commonTeammates = await client.playerCommonTeammates.getByPlayerId({
    playerId: "<player-id>",
    params: {
        time_frame: TimeFrame.OneDay,
        count: 10
    }
});
```

## Player Statistics

### Get statistics for a Player

```typescript
import { OmedaCityClient } from "omedacity-js";

const client = new OmedaCityClient();

const playerStats = await client.playerStatistics.getByPlayerId({
    playerId: "<player-id>",
    params: {
        hero_ids: ["1", "2", "3"]
    }
});
```

## Player Matches

### Get matches for a Player

```typescript
import { OmedaCityClient } from "omedacity-js";
import { TimeFrame, Roles } from "omedacity-js/types";

const client = new OmedaCityClient();

const playerMatches = await client.playerMatches.getByPlayerId({
    playerId: "<player-id>",
    params: {
        time_frame: TimeFrame.OneWeek;
        page: 1;
        matches_per_page: 10;
        match_filter: {
            hero_id: "1"; // The hero the player used.
            role: Roles.Offlane; // Role of the Player Id provided
            occuring_hero_id: "1"; // Additional heroes that were present (Not the player being queried)
            player_name: "C0re"; // Other players present in match
        };
    }
});
```

## Player Hero Statistics

### Get statistics for a Hero player played

```typescript
import { OmedaCityClient } from "omedacity-js";

const client = new OmedaCityClient();

const heroStats = await client.playerHeroStatistics.getByPlayerId({
    playerId: "<player-id>",
    params: {
       hero_ids: ["1", "2"]
    }
});
```

## Players

### Get all Players

```typescript
import { OmedaCityClient } from "omedacity-js";
const client = new OmedaCityClient();
const players = await client.players.get();
```

### Get Player by Id

```typescript
import { OmedaCityClient } from "omedacity-js";
const client = new OmedaCityClient();
const player = await client.players.getById("<player-id>");
```
