import styles from "./About.module.scss";

const About = () => {
    return (
        <section className={styles.About} id="about">
            <div className={styles.About__container}>
                <div>
                    <h1 className={styles.Title}>About Me</h1>
                </div>
                <div>
                    <h2>Details</h2>
                </div>
                <p>boskovic.danijel@gmail.com</p>
            </div>
        </section>
    );
};

export default About;
