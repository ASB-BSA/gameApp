import styled from 'styled-components';
import cardBorder from '@imgs/team/card__border.png';
import { onXX } from '@/types/onXX';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Props = onXX & {
  src?: string
}

const CharacterCard: React.FC<Props> = ({ src }) => {
  return (
    <Body>
      <Inner>
        <Character>
          <LazyLoadImage
            src={src}
            width="217"
            height="250"
          />
        </Character>
      </Inner>
    </Body>
  )
}

const Body = styled.div`
  position: relative;
  background-color: #8e6441;
  height: 291px;
  border-radius: 10px;
  padding: 11px 15px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${cardBorder});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 208px;
    height: 269px;
    z-index: 100;
  }
`;

const Inner = styled.div`
  border-radius: 10px;
  background-color: #713b00;
  height: 100%;
  overflow: hidden;
`;

const Character = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 250px;
    object-fit: cover;
    object-position: top center;
    display: block;
    width: calc(100% + 30px);
  }
`;

export default CharacterCard;