# OmedaCity JavaScript SDK (PREVIEW)

## Please note, this is a work in progress and not ready for production.

## Examples

### Fetch Heroes

```typescript
import { OmedaCityClient } from "omedacity-js"


/**
 * Example implementation
 */
const client = new OmedaCityClient();
try {
    const heroes = await client.heroes.get();
    const hero = await client.heroes.getByName("Crunch");
}
catch(error) {
    // Handle Error.
}
```

### Fetch Player Matches

```typescript
import { OmedaCityClient } from "omedacity-js";
import { OmedaCity } from "omedacity-js/types";

const client = new OmedaCityClient();

client.playerMatches.getByPlayerId({
  playerId: "12345",
  params: {
    match_filter: {
      role: OmedaCity.Roles.Carry
    }
  }
})
```

### Fetch Player Statistics

```typescript
import { OmedaCityClient } from "omedacity-js";
import { OmedaCity } from "omedacity-js/types";

const client = new OmedaCityClient();

client.playerStatistics.getByPlayerId({
  playerId: "1",
  params: {
    time_frame: OmedaCity.TimeFrame.OneDay,
  },
});
```
