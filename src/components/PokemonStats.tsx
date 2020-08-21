import React from 'react';

import { beutifyLabel } from '../services/utilityService';
import Chart from './Chart';
import { Pokemon } from '../types/pokemon';

type PokemonStatsProps = {
  pokemon: Pokemon;
}

function PokemonStats({pokemon}: PokemonStatsProps) {
  return (
    <React.Fragment>
      <Chart range={{min: 0, max: 150}} stats={pokemon.stats} />
    </React.Fragment>
  )
}

export default PokemonStats;