import React from "react";
import styled from "styled-components";

import Bar from "./Bar";
import { beutifyLabel, shortifyLabel } from "../services/utilityService";
import { StatRange } from "../types/chart";
import { PokemonStatItem } from "../types/pokemon";

type ChartProps = {
  range: StatRange;
  stats: PokemonStatItem[];
};

const Chart = ({ range, stats }: ChartProps) => {
  return (
    <ChartRow>
      {stats.map((item, index) => {
        const percent: number = Math.trunc((item.base_stat / range.max) * 100);
        return (
          <Bar
            key={index}
            label={beutifyLabel(item.stat.name)}
            shortLabel={shortifyLabel(item.stat.name)}
            value={item.base_stat}
            percent={percent}
          />
        );
      })}
    </ChartRow>
  );
};

const ChartRow = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  overflow: hidden;
`;

export default Chart;
