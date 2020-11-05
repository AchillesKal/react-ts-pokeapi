import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

import PokemonStats from "./PokemonStats";
import PokemonProfile from "./PokemonProfile";
import PokemonTypes from "./PokemonTypes";
import { device } from "../device";
import { Pokemon } from "../types/pokemon";

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const [pokemonDescription, setPokemonDescription] = useState<string>("");
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const fetchPokemonSpecies = async () => {
      const result = await fetch(pokemon.species.url);
      return await result.json();
    };

    fetchPokemonSpecies().then((data) => {
      const description = data.flavor_text_entries
        .filter((item) => {
          return item.language.name === "en";
        })[0]
        .flavor_text.replace(/[^a-zA-Z é . , ']/g, " ");
      setPokemonDescription(description);
      setIsReady(true);
    });
  });

  return (
    <PokemonCardContainer>
      {isReady && (
        <div>
          <PokemonCardTitle>{pokemon.name}</PokemonCardTitle>
          <PokemonTypes types={pokemon.types} />
          <DoubleColumnCard>
            <PokemonProfile
              pokemon={pokemon}
              description={pokemonDescription}
            />
            <StatsWrapper>
              <PokemonStats pokemon={pokemon} />
            </StatsWrapper>
          </DoubleColumnCard>
          <PokemonDescription>{pokemonDescription}</PokemonDescription>
        </div>
      )}
      {!isReady && (
        <div className="d-flex justify-content-center mb-4">
          <Loader
            type="Puff"
            color="#CCC"
            height={100}
            width={100}
          />
        </div>
      )}
    </PokemonCardContainer>
  );
};

const PokemonCardContainer = styled.div`
  font-size: 1.5em;
  border-radius: 4px;
`;

const PokemonCardTitle = styled.h3`
  text-transform: capitalize;
  text-align: center;
`;

const DoubleColumnCard = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const StatsWrapper = styled.div`
  @media ${device.laptop} {
    width: 60%;
  }
`;

const PokemonDescription = styled.div`
  font-size: 16px;
  text-align: left;
  margin-top: 20px;
`;

export default PokemonCard;
