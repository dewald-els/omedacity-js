import { createQueryParams } from "../src/api";

it("should create a time_frame param", () => {
  const params = createQueryParams({
    time_frame: "1D",
  });

  expect(params).toBe("?time_frame=1D");
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
