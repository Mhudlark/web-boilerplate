const BASE_URL = "https://pokeapi.co/api/v2";

const pokemonApi = {
  fetch: (path: string, options: RequestInit) =>
    fetch(`${BASE_URL}${path}`, {
      // Add default headers here
      ...options,
    }),
  throwApiError: async (response: Response) => {
    if (response.body) {
      const error = await response.text();
      throw new Error(error);
    } else {
      throw new Error("Something went wrong, please try again later");
    }
  },
};

export default pokemonApi;
