import { useState } from 'react';
import { componentClassName } from '@/utils';
import styles from '@css/module/formItem.module.scss';
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
    <div
      className={componentClassName(styles.textField, (isFocus || value) && styles.textField_active)}
      onClick={onClick}
      style={style}
    >
      {placeholder && <span className={styles.textField__placeholder} >{placeholder}</span>}
      {rows ? (
        <textarea
          className={styles.textField__body}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={onChange}
          rows={rows < 1 ? 1 : rows}
        >
          {value}
        </textarea>
      ) : (
        <input
          className={styles.textField__body}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={value}
          onChange={onChange}
          type={type}
        />
      )}
    </div>
  )
}

export default TextField;