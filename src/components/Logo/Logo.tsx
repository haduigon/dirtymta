import styles from './Logo.module.css';
import logo from '../../assets/img/dirtymta2.png';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
        <div className={styles.logoBox}>
          <div className={styles.logo1}>Dirty</div>
        <div className={styles.logo2}>MTA</div>
        </div>
        <div className={styles.logoImage}><img src={logo} alt="logo" className={styles.logoImage}/></div>
      </div>
  )
}

export default Logo;