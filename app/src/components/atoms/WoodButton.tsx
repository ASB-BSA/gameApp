import styled from 'styled-components';
import { onXX } from '@/types/onXX';
import woodButton from '@imgs/common/wood-button__bg.png';

type Props = onXX & {
  value?: string
  style?: React.CSSProperties;
}

const WoodButton: React.FC<Props> = ({
  onClick, value, style
}) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      style={style}
    >
      <span>{value}</span>
    </Button>

  )
}

const Button = styled.button`
  background-image: url(${woodButton});
  width: 359px;
  height: 106px;
  color: #e6e5d1;
  font-size: 48px;
  padding: 18px 16px 18px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export default WoodButton;