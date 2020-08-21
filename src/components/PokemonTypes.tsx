import React from 'react';
import styled from 'styled-components';

import { PokemonTypeItem } from '../types/pokemon';

type PokemonTypesProps = {
  types: PokemonTypeItem[];
};

function PokemonTypes({types}: PokemonTypesProps) {
  return (
    <TypeWrapper>
      <TypeLable>
       Type:
      </TypeLable> 
      { types.map((item, index) => {
        return <Type key={index}>{item.type.name}</Type>;
      })}
    </TypeWrapper>
  )
}

const TypeWrapper = styled.div`
  margin: 10px 0;
  font-size: 16px;
  text-align: left;
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

const TypeLable = styled.div`
  text-transform: capitalize;
  margin-right: 10px;
`;

const Type = styled.div`
  margin-right: 10px;
  text-transform: capitalize;
  border: solid 1px #CCC;
  padding: 3px 5px;
  border-radius: 4px;
`;

export default PokemonTypes;