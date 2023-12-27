import { Axios } from "axios";

export const mockAxios = (response: unknown) =>
  ({
    get: (_url: string) => {
      return new Promise((resolve) => {
        resolve({
          data: response,
        });
      });
    },
  } as unknown as Axios);
