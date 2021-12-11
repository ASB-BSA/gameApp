import styled from 'styled-components';
import { CharacterCard } from '@/components/atoms';
import bg from '@imgs/team/team__bg.jpg';

const ChangeIllustModal: React.FC = () => {
  return (
    <Wrapper bg={bg}>
      <Header>キャラクターイラスト変更</Header>
      <Inner>
        <CardList>
          <Card>
            <CharacterCard />
          </Card>
        </CardList>
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ bg: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  z-index:10000;
  padding: 120px 26px 26px;
`;

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  height: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 36px;
  color: #fff;
  background-color: #8e6441;
`;

const Inner = styled.div`
  max-height: 100%;
  overflow: scroll;
`;

const CardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px 24px;
  padding-top: 32px;
  padding-bottom: 250px;
`;

const Card = styled.li`
  width: 217px;
`;


export default ChangeIllustModal;