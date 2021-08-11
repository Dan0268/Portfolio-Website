import styles from './About.module.scss'

const About = () => {
    return (
        <section className={styles.About} id="about">
            <div><h1 className={styles.Title}>About Me</h1></div>
            <div><h2>Details</h2></div>
	    </section>
    )
}

export default About;