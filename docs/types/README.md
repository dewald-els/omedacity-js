# OmedaCity JavaScript SDK - Types

Types are available to import from [`omedacity-js/types`](../../src/types/index.ts)

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
