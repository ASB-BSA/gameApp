import styles from '@css/module/formItem.module.scss';
import { onXX } from '@/types/onXX';

type Props = onXX & {
  value?: string
  style?: React.CSSProperties;
}

const WoodButton: React.FC<Props> = ({
  onClick, value, style
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.woodButton}
      style={style}
    >
      <span>{value}</span>
    </button>)
}

export default WoodButton;