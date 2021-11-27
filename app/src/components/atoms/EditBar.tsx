import { useState } from 'react';
import styled from 'styled-components';
import { onXX } from '@/types/onXX';

type Props = onXX & {
  name?: string,
  value: number,
  icon?: string,
  style?: React.CSSProperties,
}

const EditBar: React.FC<Props> = ({ name, value, icon, style, onChange }) => {
  const max = 500;

  return (
    <Wrapper style={style}>
      <Header>
        <Icon></Icon>
        <Heading>{name}</Heading>
        <Value>{value}</Value>
      </Header>
      <ProgressBar>
        <Range
          type="range"
          min={0}
          max={max}
          value={value}
          onFocus={onChange}
        />
        <Progress style={{ width: `${value / max * 100}%` }} />
        <Bg />
      </ProgressBar>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  position: relative;
  height: 55px;
  background-color: #d1a886;
  font-size: 26px;
  padding: 0 20px 0 36px;
  display: flex;
  align-items: center;
`

const Header = styled.div`
  display: flex;
`;

const Heading = styled.div`
  &::after {
    content: ':';
    display: inline-block;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const Value = styled.div`
`;

const Icon = styled.div`

`;

const ProgressBar = styled.div`
  position: relative;
  height:  32px;
  width: 300px;
  margin-left: auto;
`;

const Range = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  z-index:1000;
  &::-webkit-slider-thumb {
    -webkit-appearance: none; // デフォルトのつまみのスタイルを解除
    background: #907969; // 背景色
    width: 36px; // 幅
    height: 36px; // 高さ
    border-radius: 50%; // 円形に
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15); // 影
  }
  // -moz-向けのつまみ
  &::-moz-range-thumb {
    background: #907969; // 背景色
    width: 36px; // 幅
    height: 36px; // 高さ
    border-radius: 50%; // 円形に
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15); // 影
    border: none; // デフォルトの線を消す
  }`;

const Progress = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 16px;
  width: 20%;
  background-color: #8b3c2d;
  z-index:10;
  border-radius: 8px 0 0 8px;
`;

const Bg = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 16px;
  width: 100%;
  background-color: #d2c5a5;
  border-radius: 8px 8px 8px 8px;
`;

export default EditBar;