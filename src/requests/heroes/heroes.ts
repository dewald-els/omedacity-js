import { Heroes, SDKResponse } from "../../types";

export const getHeroes = async (): Promise<SDKResponse<Heroes>> => {
  return {
    data: [],
    error: null,
  };
};
