import { it } from "node:test";
import assert from "node:assert";
import { buildsFindAll, buildsFindById } from "../../dist/api/builds.js";
import { mockAxios } from "../mocks/axios.js";

it("should find the builds", async () => {
  const expected = [
    {
      id: 1,
      title: "Test Item",
      description: "Test Item",
      hero_id: "1",
      crest_id: 1,
      item1_id: 1,
      item2_id: 2,
      item3_id: 3,
      item4_id: 4,
      item5_id: 5,
      created_at: "2023-12-12",
      updated_at: "2023-12-12",
      url: "",
    },
  ];

  const client = mockAxios(expected);
  const withClient = buildsFindAll(client);
  const response = await withClient();
  assert.deepEqual(response, expected);
});

it("should find a build by Id", async () => {
  const expected = {
    id: 1,
    title: "Test Item",
    description: "Test Item",
    hero_id: "1",
    crest_id: 1,
    item1_id: 1,
    item2_id: 2,
    item3_id: 3,
    item4_id: 4,
    item5_id: 5,
    created_at: "2023-12-12",
    updated_at: "2023-12-12",
    url: "",
  };

  const client = mockAxios(expected);
  const withClient = buildsFindById(client);
  const response = await withClient();
  assert.deepEqual(response, expected);
});
