import { useNavigate } from 'react-router';
import styles from '@css/module/mypage.module.scss';
import dummyChar from '@imgs/mypage/dummy-char.png';
import gem from '@imgs/mypage/gem.png';

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <nav className={styles.status}>
        <div className={styles.status__inner}>
          <div className={styles.status__item_user}>
            <div className={styles.user}>
              <span className={styles.user__name}>サクヤさん</span>
            </div>
          </div>
          <div className={styles.status__item_gems}>
            <div className={styles.gems}>
              <div className={styles.gems__gem}><img src={gem} alt=""/></div>
              <span className={styles.gems__count}>99999</span>
            </div>
          </div>
        </div>
      </nav>
      <div className={styles.character}>
        <figure className={styles.character__img}>
          <img src={dummyChar} alt="dummy" />
        </figure>
      </div>
      <nav className={styles.navigation}>
        <div
          className={styles.navigation__button_team}
          onClick={() => navigate('/mypage/team')}
        >
          <span className={styles.navigation__label_team}>チーム編成</span>
        </div>
        <div
          className={styles.navigation__button_buttle}
          onClick={() => navigate('/match')}
        >
          <span className={styles.navigation__label_buttle}>対戦</span>
        </div>
        <div
          className={styles.navigation__button_history}
          onClick={() => navigate('/mypage/history')}
        >
          <span className={styles.navigation__label_history}>戦歴</span>
        </div>
      </nav>
    </div>
  )
}

export default MyPage;