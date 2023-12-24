# OmedaCity JavaScript SDK

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
