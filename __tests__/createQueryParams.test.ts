import { createQueryParams } from "../src/api";

it("should create a time_frame param", () => {
  const params = createQueryParams({
    time_frame: "1D",
  });

  expect(params).toBe("?time_frame=1D");
});

it("should ignore values set to false", () => {
  const params = createQueryParams({
    page: 1,
    filter: {
      modules: false,
    },
  });

  const hasModulesInQuery = params.indexOf("modules");

  expect(hasModulesInQuery).toBe(-1);
});

it("should not ignore 0 values", () => {
  const params = createQueryParams({
    filter: {
      include_inactive: 0,
    },
  });

  const hasZeroValueInQuery = params.indexOf("include_inactive");
  expect(hasZeroValueInQuery).toBeGreaterThan(0);
});

it("should create a multiple params", () => {
  const params = createQueryParams({
    time_frame: "1D",
    page: 2,
    count: 3,
  });

  expect(params).toBe("?time_frame=1D&page=2&count=3");
});

it("should create a q[name] param", () => {
  const params = createQueryParams({
    q: {
      name: "MrBetaMax",
    },
  });

  expect(params).toBe("?q[name]=MrBetaMax");
});
