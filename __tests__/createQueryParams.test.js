import { it } from "node:test";
import assert from "node:assert";
import { createQueryParams } from "../dist/api/index.js";

it("should create a time_frame param", () => {
  const params = createQueryParams({
    time_frame: "1D",
  });

  assert.equal(params, "?time_frame=1D");
});

it("should create a multiple params", () => {
  const params = createQueryParams({
    time_frame: "1D",
    page: 2,
    count: 3,
  });

  assert.equal(params, "?time_frame=1D&page=2&count=3");
});

it("should create a q[name] param", () => {
  const params = createQueryParams({
    q: {
      name: "MrBetaMax",
    },
  });

  assert.equal(params, "?q[name]=MrBetaMax");
});
