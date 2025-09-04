import { useQuery } from "@tanstack/react-query";
import pokemonApi from ".";

// Response type
type GetPokemonResponse = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }>;
  forms: Array<{
    name: string;
    url: string;
  }>;
  game_indices: Array<{
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }>;
  held_items: Array<{
    item: {
      name: string;
      url: string;
    };
    version_details: Array<{
      rarity: number;
      version: {
        name: string;
        url: string;
      };
    }>;
  }>;
  location_area_encounters: string;
  moves: Array<{
    move: {
      name: string;
      url: string;
    };
    version_group_details: Array<{
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      order: number | null;
      version_group: {
        name: string;
        url: string;
      };
    }>;
  }>;
  species: {
    name: string;
    url: string;
  };
  sprites: {
    front_default: string;
    [key: string]: string;
  };
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }>;
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
};

// Fetch function
const fetchGetPokemon = async (name: string) => {
  const response = await pokemonApi.fetch(`/pokemon/${name}`, {
    method: "GET",
  });
  return response.json() as Promise<GetPokemonResponse>;
};

// React Query hook
const useGetPokemon = (name: string) => {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => fetchGetPokemon(name),
  });
};

export default useGetPokemon;
