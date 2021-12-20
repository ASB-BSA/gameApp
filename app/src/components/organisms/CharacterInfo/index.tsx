import type { CharacterDataType } from '@/types/CharacterDataType'
import type { TeamType } from '@/types/TeamType';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { characterDataState } from '@/recolis/charcterData'
import styled from 'styled-components';
import namePlateBg from '@imgs/team/name-plate.png';
import settingIcon from '@imgs/team/setting-icon.png';
import typeIcon from '@imgs/team/type-icon.png';
import { Status, CircleButton, TypeIcon } from '@/components/atoms';
import { Link } from 'react-router-dom';

type Props = {
  handleModalOpen?: any,
  currentChar: TeamType,
}

const CharacterInfo: React.FC<Props> = ({ handleModalOpen, currentChar }) => {
  const [src, setSrc] = useState<string>('');
  const [currentCharData, setCurrentCharData] = useState<CharacterDataType>()
  const characterData = useRecoilValue(characterDataState);

  console.log(currentChar)

  useEffect(() => {
    const current = characterData.find(data => data.id === currentChar.characterId)
    if(current) {
      setSrc(current.img);
      setCurrentCharData(current);
    }
  }, [currentChar]);

  return (
    <Wrapper>
      <CircleButton
        onClick={handleModalOpen}
        icon={settingIcon}
        style={{
          position: 'absolute',
          top: 20,
          right: 28
        }}
      />
      <Char>
        <Link to={`/mypage/team/${currentChar.id}/change`}>
          {currentChar.characterId && <CharImage src={`${process.env.REACT_APP_BASE_URL}/image/${src}`} />}
        </Link>
      </Char>
      <Inner>
        <TypeIcon
          icon={typeIcon}
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 28px)',
            left: 0,
          }}
        />
        <NamePlate>{currentCharData?.name}</NamePlate>
        <Datas>
          <Data>
            <DataHeading>ステータス</DataHeading>
            <DataBody>
              <Status
                attack={currentChar.attack} defence={currentChar.defence}
                avoidance={currentChar.avoidance} criticalRate={currentChar.criticalRate}
                agility={currentChar.agility} hp={currentChar.hp}
              />
            </DataBody>
          </Data>
          <Data>
            <DataHeading>特性</DataHeading>
            <DataBody>
              <CharacteristicDescription>
                ターン開始時、自分のHPが100％以下の場合、<br />相手のキャラ全体のHPを0にする
              </CharacteristicDescription>
            </DataBody>
          </Data>
        </Datas>
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 15px;
`;

const Inner = styled.div`
  position: relative;
  border: 1px solid #4d2b0e;
  border-radius: 10px;
  background-color: rgba(255,255,255,0.32);
  padding: 49px 23px 49px 28px;
  z-index: 200;
`;

const Char = styled.div`
  position: relative;
  height: 424px;
  width: 424px;
  margin: 0 auto;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 424px;
    height: 424px;
    background-color: #f2ebd8;
    border-radius: 50%;
    z-index: 150;
  }
`;

const CharImage = styled.div.attrs<{ src: string }>(props => ({
  style: {
    backgroundImage: `url(${props.src})`,
  }
})) <{ src?: string }>`
  position: relative;
  height: 424px;
  width: 424px;
  z-index: 200;
  background-size: cover;
`;

const Datas = styled.div`
  width: 100%;
`;

const Data = styled.div`
  background-color: #fff;
  border: 1px solid #845b46;
  border-radius: 10px;
  overflow: hidden;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const DataHeading = styled.div`
  height: 41px;
  background-color: #e6e2d6;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
`;

const DataBody = styled.div`
  padding: 15px 30px;
`;

const CharacteristicDescription = styled.p`
  font-size: 26px;
  line-height: ${(33 / 26)};
`;

const NamePlate = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 385px;
  height: 90px;
  color: #fff;
  display: flex;
  justify-content: center;
  background-image: url(${namePlateBg});
  background-position: center;
  background-size: cover;
  padding-top: 14px;
`;

export default CharacterInfo;