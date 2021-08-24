import styles from "./Contact.module.scss";
import linkedin from "../../icons/linkedin-new-2020-seeklogo.com.svg";
import artstation from "../../icons/artstation-seeklogo.svg";
import Footer from "../Footer/Footer";

const Contact = () => {
    return (
        <>
            <section className={styles.Contact}>
                <div className={styles.Contact__container} id="contact">
                    <div className={styles.Contact__title}>
                        <h1>Get In Touch</h1>
                        <br />
                        <a href="mailto:boskovic.danijel@gmail.com">
                            <h3>boskovic.danijel@gmail.com</h3>
                        </a>
                        <br />
                    </div>
                    <div className={styles.Contact__icons}>
                        <div className={styles.Contact__box}>
                            <a
                                href="https://www.linkedin.com/in/danijel-boskovic-921332114/"
                                className={styles.Contact__box__icon}
                            >
                                <img src={linkedin} alt="LinkedIn" />
                            </a>
                            <p>
                                <a
                                    href="https://www.linkedin.com/in/danijel-boskovic-921332114/"
                                    className={styles.Skills__box__text}
                                >
                                    LinkedIn
                                </a>
                            </p>
                        </div>
                        <div className={styles.Contact__box}>
                            <a
                                href="https://tessel.artstation.com/"
                                className={styles.Contact__box__icon}
                            >
                                <img src={artstation} alt="ArtStation" />
                            </a>
                            <p>
                                <a
                                    href="https://tessel.artstation.com/"
                                    className={styles.Contact__box__text}
                                >
                                    ArtStation
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer className={styles.Footer} />
        </>
    );
};

export default Contact;
