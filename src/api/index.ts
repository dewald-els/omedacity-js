import axios from "axios";

export const client = axios.create({
  baseURL: "https://omeda.city",
  headers: {
    "Content-Type": "application/json",
    "x-origin-sdk": "omedacity-js@0.6.3", // Todo: Automate the incrementation
  },
});

/**
 * Create Query Parameters for API Calls
 * @param params {QueryParams}
 * @returns
 */
export const createQueryParams = <T>(params?: T): string => {
  if (!params) return "";
  const addParam = (key: string, value: any): string => {
    if (value === false) {
      return '';
    } else if (Array.isArray(value)) {
      return key + "=" + JSON.stringify(value);
    } else if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      return key + "=" + value;
    } else {
      return Object.entries(value)
        .map(([pKey, pValue]) => addParam(`${key}[${pKey}]`, pValue))
        .filter(param => param !== '')
        .join("&");
    }
  };

  const query = Object.entries(params)
    .map(([key, value]) => addParam(key, value))
    .filter(param => param !== '')
    .join("&");

  return "?" + query;
};


