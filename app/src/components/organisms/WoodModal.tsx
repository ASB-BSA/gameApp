import styled from 'styled-components';

type Props = {
  bg: string,
  style?: React.CSSProperties,
  heading?: string
}

const WoodModal: React.FC<Props> = ({ children, bg, style, heading }) => {
  return (
    <Modal bg={bg}>
      <div style={style}>
        <ModalHeading>{heading}</ModalHeading>
        {children}
      </div>
    </Modal>
  )
}

const Modal = styled.div.attrs<{ bg: string }>(props => ({
  style: {
    backgroundImage: `url(${props.bg})`,
  }
})) <{ bg: string }>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 5000;
`;

const ModalHeading = styled.div`
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 40px;
`
export default WoodModal;