import { matchesFindAll, matchesFindById } from "../../src/api/matches";
import { mockAxios } from "../../mocks/axios";
import { Match, Matches } from "../../src/types";

it("should find the matches", async () => {
  const expected: Matches = {
    matches: [
      {
        id: "1",
        start_time: "2023-12-12",
        end_time: "2023-12-12",
        game_duration: 1234,
        game_region: "region",
        region: "region",
        winning_team: "team1",
        game_mode: "pvp",
        players: [],
      },
      {
        id: "2",
        start_time: "2023-12-13",
        end_time: "2023-12-13",
        game_duration: 1235,
        game_region: "region",
        region: "region",
        winning_team: "team2",
        game_mode: "pvp",
        players: [],
      },
    ],
  };

  const client = mockAxios(expected);
  const withClient = matchesFindAll(client);
  const response = await withClient();
  expect(response).toEqual(expected);
  expect(response.matches.length).toEqual(expected.matches.length);
  expect(response.matches[0].id).toBe(expected.matches[0].id);
});

it("should find a match by id", async () => {
  const expected: Match = {
    id: "1",
    start_time: "2023-12-12",
    end_time: "2023-12-12",
    game_duration: 1234,
    game_region: "region",
    region: "region",
    winning_team: "team1",
    game_mode: "pvp",
    players: [],
  };

  const client = mockAxios(expected);
  const withClient = matchesFindById(client);
  const response = await withClient("1");
  expect(response).toEqual(expected);
  expect(response.id).toBe(expected.id);
});
