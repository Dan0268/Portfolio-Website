import styles from "./Header.module.scss"
import {HashLink} from 'react-router-hash-link'

const Header = () => {
    return (
        <header className={styles.header}>
            <h3><HashLink className={styles.nav_link} activeClassName={styles.nav_link_active} smooth to='/#home'>Home</HashLink></h3>
            <h3><HashLink className={styles.nav_link} activeClassName={styles.nav_link_active} smooth to='/#skills'>Skills</HashLink></h3>
            <h3><HashLink className={styles.nav_link} activeClassName={styles.nav_link_active} smooth to='/#projects'>Projects</HashLink></h3>
            <h3><HashLink className={styles.nav_link} activeClassName={styles.nav_link_active} smooth to='/#about'>About</HashLink></h3>
        </header>
    )
}

export default Header;