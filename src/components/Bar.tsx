import React from "react";
import styled from "styled-components";

import { device } from "../device";

type BarProps = {
  label: string;
  value: number;
  percent: number;
  shortLabel: string;
};

const Bar = ({ label, value, percent, shortLabel }: BarProps) => {
  return (
    <BarWrap>
      <ShortBarLabel>{shortLabel}</ShortBarLabel>
      <LongBarLabel>{label}</LongBarLabel>
      <BarRow>
        <Indicator style={{ width: percent + "%" }}>{value}</Indicator>
      </BarRow>
    </BarWrap>
  );
};

const BarWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LongBarLabel = styled.div`
  font-size: 16px;
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`;

const ShortBarLabel = styled.div`
  font-size: 16px;
  display: block;
  margin-right: 10px;

  @media ${device.laptop} {
    display: none;
  }
`;

const BarRow = styled.div`
  width: 300px;
  height: 30px;
  box-sizing: border-box;
  background-color: #ebebeb;
`;

const Indicator = styled.div`
  background-color: #0d6efd;
  height: 100%;
  line-height: 30px;
  text-align: left;
  padding-left: 5px;
  font-size: 16px;
  color: #fff;
`;

export default Bar;
