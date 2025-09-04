const BASE_URL = "https://pokeapi.co/api/v2";

const pokemonApi = {
  fetch: (path: string, options: RequestInit) =>
    fetch(`${BASE_URL}${path}`, {
      // Add default headers here
      ...options,
    }),
};

export default pokemonApi;
