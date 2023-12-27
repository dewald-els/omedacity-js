import { playersFindAll, playersFindById } from "../../src/api/players";
import { mockAxios } from "../../mocks/axios";
import { Player, Players } from "../../src/types";

it("should find the players", async () => {
  const expected: Players = [
    {
      id: "1",
      display_name: "Player 1",
      region: "Region 1",
      rank: 1,
      rank_active: 1,
      is_active: true,
      rank_title: "Title 1",
      rank_image: "https://image.url",
      is_ranked: true,
      mmr: 1,
      flags: [
        {
          identifier: "1",
          text: "Flag 1",
          color: "Red",
        },
      ],
    },
    {
      id: "2",
      display_name: "Player 2",
      region: "",
      rank: 1,
      rank_active: 1,
      is_active: true,
      rank_title: "Rank 2",
      rank_image: "https://image.url",
      is_ranked: true,
      mmr: 1,
      flags: [
        {
          identifier: "1",
          text: "Flag 1",
          color: "Red",
        },
      ],
    },
  ];

  const client = mockAxios(expected);
  const withClient = playersFindAll(client);
  const response = await withClient();
  expect(response).toEqual(expected);
  expect(response.length).toEqual(expected.length);
  expect(response[0].id).toBe(expected[0].id);
  expect(response[0].rank_title).toBe("Title 1");
});

it("should find a player by id", async () => {
  const expected: Player = {
    id: "1",
    display_name: "Player 1",
    region: "Region 1",
    rank: 1,
    rank_active: 1,
    is_active: true,
    rank_title: "Title 1",
    rank_image: "https://image.url",
    is_ranked: true,
    mmr: 1,
    flags: [
      {
        identifier: "1",
        text: "Flag 1",
        color: "Red",
      },
    ],
  };

  const client = mockAxios(expected);
  const withClient = playersFindById(client);
  const response = await withClient("1");
  expect(response).toEqual(expected);
  expect(response.id).toBe(expected.id);
  expect(response.display_name).toBe(expected.display_name);
});
