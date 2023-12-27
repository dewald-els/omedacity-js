import { itemsFindAll, itemsFindByName } from "../../src/api/items";
import { mockAxios } from "../../mocks/axios";
import { Item, Items } from "../../src/types";

it("should find the items", async () => {
  const expected: Items = [
    {
      id: 1,
      game_id: 1,
      name: "Item 1",
      display_name: "Item 1",
      image: "https://image.url",
      price: 100,
      total_price: 100,
      slot_type: "slot",
      rarity: "rarity",
      aggression_type: "type",
      hero_class: "class",
      required_level: 1,
      effects: [],
      requirements: [],
      build_paths: [],
      stats: {
        magical_power: 10,
        physical_power: 20,
        critical_chance: 30,
      },
    },
    {
      id: 2,
      game_id: 2,
      name: "Item 2",
      display_name: "Item 2",
      image: "https://image.url",
      price: 100,
      total_price: 100,
      slot_type: "slot",
      rarity: "rarity",
      aggression_type: "type",
      hero_class: "class",
      required_level: 2,
      effects: [],
      requirements: [],
      build_paths: [],
      stats: {
        magical_power: 20,
        magical_penetration: 20,
        health_regeneration: 30,
      },
    },
  ];

  const client = mockAxios(expected);
  const withClient = itemsFindAll(client);
  const response = await withClient();
  expect(response).toEqual(expected);
});

it("should find a item by name", async () => {
  const expected: Item = {
    id: 2,
    game_id: 2,
    name: "Item 2",
    display_name: "Item 2",
    image: "https://image.url",
    price: 100,
    total_price: 100,
    slot_type: "slot",
    rarity: "rarity",
    aggression_type: "type",
    hero_class: "class",
    required_level: 2,
    effects: [],
    requirements: [],
    build_paths: [],
    stats: {
      magical_power: 20,
      magical_penetration: 20,
      health_regeneration: 30,
    },
  };

  const client = mockAxios(expected);
  const withClient = itemsFindByName(client);
  const response = await withClient("Item 2");
  expect(response).toEqual(expected);
  expect(response.name).toBe(expected.name);
});
