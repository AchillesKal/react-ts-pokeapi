import React from "react";
import styled from "styled-components";

import { device } from "../device";
import PokemonTypes from "./PokemonTypes";
import { Pokemon } from "../types/pokemon";

type PokemonProfileProps = {
  pokemon: Pokemon;
  description: string;
};

const PokemonProfile = ({ pokemon, description }: PokemonProfileProps) => {
  return (
    <Profile>
      <img width="140" src={pokemon.sprites.front_default} />
      <Attrs>
        <div>Height: {pokemon.height / 10}m</div>
        <div>Weight: {pokemon.weight / 10}kg</div>
      </Attrs>
    </Profile>
  );
};

const Profile = styled.div`
  width: 40%;
`;

const Attrs = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;

  @media ${device.laptop} {
    text-align: left;
    margin-bottom: 0;
  }
`;

export default PokemonProfile;
