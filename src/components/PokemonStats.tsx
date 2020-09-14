import React from "react";
import Chart from "./Chart";
import { Pokemon } from "../types/pokemon";

type PokemonStatsProps = {
  pokemon: Pokemon;
};

const PokemonStats = ({ pokemon }: PokemonStatsProps) => {
  return (
    <React.Fragment>
      <Chart range={{ min: 0, max: 150 }} stats={pokemon.stats} />
    </React.Fragment>
  );
};

export default PokemonStats;
