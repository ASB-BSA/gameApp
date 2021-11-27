import styled from 'styled-components';
import namePlateBg from '@imgs/team/name-plate.png';
import dummyChar from '@imgs/common/dummy-char.png';
import settingIcon from '@imgs/team/setting-icon.png';
import typeIcon from '@imgs/team/type-icon.png';
import { Status, CircleButton, TypeIcon } from '@/components/atoms';


type Props = {
}

const CharacterInfo: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <CircleButton
        icon={settingIcon}
        style={{
          position: 'absolute',
          top: 20,
          right: 28
        }}
      />
      <Char>
        <CharImage src={dummyChar} />
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
        <NamePlate>くまくまくま</NamePlate>
        <Datas>
          <Data>
            <DataHeading>ステータス</DataHeading>
            <DataBody>
              <Status
                attack={0} defence={0}
                avoidance={0} critical={0}
                agility={0} hp={0}
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