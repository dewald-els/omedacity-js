import { buildsFindAll, buildsFindById } from "../../src/api/builds";
import { mockAxios } from "../../mocks/axios";

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
      url: "https://example1.com",
    },
    {
      id: 2,
      title: "Test Item 2",
      description: "Test Item 2",
      hero_id: "2",
      crest_id: 2,
      item1_id: 3,
      item2_id: 4,
      item3_id: 5,
      item4_id: 6,
      item5_id: 5,
      created_at: "2023-12-12",
      updated_at: "2023-12-12",
      url: "https://example1.com",
    },
  ];

  const client = mockAxios(expected);
  const withClient = buildsFindAll(client);
  const response = await withClient();
  expect(response).toEqual(expected);
  expect(response.length).toBe(expected.length);
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
  const response = await withClient("1");
  expect(response).toEqual(expected);
});
