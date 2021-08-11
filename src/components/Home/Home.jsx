import styles from './Home.module.scss'

const Home = () => {
    return (
        <section className={styles.Home} id="home">
            <div className={styles.container}>
                <div className={styles.item}>
                    <h1>Danijel Boskovic</h1>
                    <h2>Junior Web Developer</h2>
                    </div>
                <div className={styles.item}>
                    <p>Hi, thanks for visiting</p>
                    <p>I'm a junior web developer</p>
                </div>
            </div>
	    </section>
    )
}

export default Home;