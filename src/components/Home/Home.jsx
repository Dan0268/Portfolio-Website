import styles from "./Home.module.scss";

const Home = () => {
    return (
        <section className={styles.Home} id="home">
            <div className={styles.Home__container}>
                <div className={styles.Home__container__title}>
                    <h1>Danijel Boskovic</h1>
                    <h2>Software Developer</h2>
                </div>

                <div className={styles.Home__container__description}>
                    <div>
                        <h2>Hello, thanks for stopping by!</h2>
                        <br />
                    </div>
                    <p>
                        I am a software developer based in Sydney, Australia,
                        with a background in Nanotechnology and 3D visual art. I
                        apply my skills towards innovative tech applications,
                        scientific visualisation and beautiful 3D graphics.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home;
