import { componentClassName } from '@/utils';
import styles from '@css/module/home.module.scss';
import playButton from '@imgs/home/home__play-button.png';
import logo from '@imgs/home/home__logo.png';

type Props = {
  status: number,
  onClick?: any;
}

const Start: React.FC<Props> = ({ status, onClick }) => {
  return (
    <>
      <div className={componentClassName(styles.logo, status > 0 && styles.logo_active)}>
        <img src={logo} alt="boomin ファイターズ" />
      </div>
      <button
        type="button"
        className={componentClassName(styles.playButton, status > 0 && styles.playButton_active)}
        onClick={onClick}
      >
        <img src={playButton} alt="play" />
      </button>
    </>
  )
}

export default Start;