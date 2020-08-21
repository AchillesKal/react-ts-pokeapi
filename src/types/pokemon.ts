export interface Pokemon {
  id: number;
  name: string;
  stats: PokemonStatItem[];
  height: number;
  weight: number;
  sprites: PokemonSprites;
  species: PokemonSpecies;
  types: PokemonTypeItem[]
}

export interface PokemonStatItem {
  base_stat: number;
  effort: number;
  stat: Stat;
};

export interface Stat {
  name: string;
  url: string;
}

export interface PokemonType {
  name: string;
  url: string;
}

export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface PokemonSprites {
  front_default: string;
}

export interface PokemonTypeItem {
  slot: number;
  type: PokemonType
}