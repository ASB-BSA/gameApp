import styled, { css } from 'styled-components';
import { onXX } from '@/types/onXX';

type Props = onXX & {
  bg?: string,
  color?: string,
  style?: React.CSSProperties,
  as?: 'a' | 'button' | 'div' | 'input',
  value?: string,
  href?: string,
}

const RectangleButton: React.FC<Props> = ({
  style, as, color, bg, value, href,
  onClick, onFocus, onBlur, children
}) => {
  return (
    <Wrapper
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      style={style}
    >
      {
        as === 'a' ? <Ancher color={color} bg={bg} href={href}>{children}</Ancher> :
          as === 'div' ? <Div color={color} bg={bg}>{children}</Div> :
            as === 'input' ? <Input color={color} bg={bg} type={'submit'} value={value} /> :
              <Button color={color} bg={bg}>{children}</Button>
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-block;
`;

const ButtonStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 366px;
  min-height: 82px;
  padding: 16px 32px;
  background-color: #907969;
  border-radius: 10px;
  color: #fff;
  font-size: 32px;
  cursor: pointer;
`;

type ButtonProps = { color?: string, bg?: string };

const ButtonCallbackFunc = (props: ButtonProps) => ({
  backgroundColor: props.bg,
  color: props.color
});

const Ancher = styled.a.attrs((props: ButtonProps) => ButtonCallbackFunc(props)) <ButtonProps>`${ButtonStyle}`;
const Button = styled.button.attrs((props: ButtonProps) => ButtonCallbackFunc(props)) <ButtonProps>`${ButtonStyle}`;
const Div = styled.div.attrs((props: ButtonProps) => ButtonCallbackFunc(props)) <ButtonProps>`${ButtonStyle}`;
const Input = styled.input.attrs((props: ButtonProps) => ButtonCallbackFunc(props)) <ButtonProps>`${ButtonStyle}`;

export default RectangleButton;