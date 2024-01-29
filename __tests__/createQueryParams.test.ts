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

it("should create a list of strings param", () => {
  const params = createQueryParams({
    ids: ["1", "2", "3"]
  });

  expect(params).toBe("?ids=[\"1\",\"2\",\"3\"]");
});

it("do not add 'false' booleans at any level as parameters", () => {
  const params = createQueryParams({
    include: false,
    filter: {
      include_inactive: 0,
      test_request: false
    }
  });

  expect(params).toBe("?filter[include_inactive]=0");
});

it("add 'true' booleans at any level as parameters", () => {
  const params = createQueryParams({
    include: true,
    filter: {
      include_inactive: 0,
      test_request: true
    }
  });

  expect(params).toBe("?include=true&filter[include_inactive]=0&filter[test_request]=true");
});
