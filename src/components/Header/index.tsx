import LogoImg from '../../assets/Logo.svg'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img src={LogoImg} alt="Todo List Logo" />
    </div>
  )
}
