import styles from "./Header.module.scss";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    return (
        <header className={styles.Header}>
            <span className={styles.Header__left}>
                <h2>
                    <HashLink
                        className={styles.nav_link}
                        activeClassName={styles.nav_link_active}
                        smooth
                        to="/#home"
                    >
                        Home
                    </HashLink>
                </h2>
            </span>
            <span className={styles.Header__right}>
                <h2>
                    <HashLink
                        className={styles.nav_link}
                        activeClassName={styles.nav_link_active}
                        smooth
                        to="/#skills"
                    >
                        Skills
                    </HashLink>
                </h2>
                <h2>
                    <HashLink
                        className={styles.nav_link}
                        activeClassName={styles.nav_link_active}
                        smooth
                        to="/#projects"
                    >
                        Projects
                    </HashLink>
                </h2>
                <h2>
                    <HashLink
                        className={styles.nav_link}
                        activeClassName={styles.nav_link_active}
                        smooth
                        to="/#contact"
                    >
                        Contact
                    </HashLink>
                </h2>
            </span>
        </header>
    );
};

export default Header;
