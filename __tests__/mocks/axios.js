export const mockAxios = (response) => ({
  get: (url) => {
    return new Promise((resolve) => {
      resolve({
        data: response,
      });
    });
  },
});
