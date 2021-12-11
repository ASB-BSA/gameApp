import { useState } from 'react';
import styled from 'styled-components';
import { onXX } from '@/types/onXX';

type Props = onXX & {
  value?: string;
  type?: string;
  placeholder?: string;
  rows?: number;
  style?: React.CSSProperties;
}

const TextField: React.FC<Props> = ({
  rows, value, type, placeholder, onChange, onClick, style
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <Wrapper
      onClick={onClick}
      style={style}
    >
      {placeholder && <Placeholder isActive={isFocus || value}>{placeholder}</Placeholder>}
      {rows ? (
        <TextareaBody
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={onChange}
          rows={rows < 1 ? 1 : rows}
        >
          {value}
        </TextareaBody>
      ) : (
        <InputBody
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={value}
          onChange={onChange}
          type={type ?? 'text'}
        />
      )}
    </Wrapper>
  )
}

const transitionDuration = '0.5s';

const Wrapper = styled.div`
  position: relative;
  font-size: 32px;
`

const Placeholder = styled.label.attrs<{ isActive?: boolean | string }>(props => ({
  style: {
    opacity: props.isActive ? 0.3 : 1,
    transform: props.isActive ? 'scale(0.6) translate(22px, 10px)' : 'translate(16px, 26px)',
  }
})) <{ isActive?: boolean | string }>`
  position: absolute;
  top: 0;
  left: 0;
  transition: all ${transitionDuration};
  transform-origin: left top;
  pointer-events: none;
  color: #7c766f;
`

const TextFieldBodyStyle = `
  display: block;
  width: 100%;
  height: 100%;
  padding: 31px 16px 7px;
  transition: all ${transitionDuration};
  border: 1px solid #000;
  background-color: #e6e5d1;
  `

const InputBody = styled.input`${TextFieldBodyStyle};`;

const TextareaBody = styled.textarea`${TextFieldBodyStyle}`;


export default TextField;