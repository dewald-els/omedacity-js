import axios from "axios";

export const client = axios.create({
  baseURL: "https://omeda.city",
});

/**
 * Create Query Parameters for API Calls
 * @param params {OmedaCity.QueryParams}
 * @returns
 */
export const createQueryParams = <T>(params?: T): string => {
  if (!params) return "";

  const query: string[] = [];
  for (const key in params) {
    const param = params[key];

    if (typeof param !== "string" && typeof param !== "number") {
      for (const pKey in param) {
        if (query.length === 0) {
          query.push("?" + key + "[" + pKey + "]" + "=" + param[pKey]);
        } else {
          query.push(key + "[" + pKey + "]" + "=" + param[pKey]);
        }
      }
    } else {
      if (query.length === 0) {
        query.push("?" + key + "=" + params[key]);
      } else {
        query.push(key + "=" + params[key]);
      }
    }
  }
  return query.join("&") ?? "";
};
