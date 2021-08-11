import styles from "./Skills.module.scss";
import { webDevSkills, visualArtSkills } from "./skillitems";

const Skills = () => {
    return (
        <section className={styles.Skills} id="skills">
            <div>
                <h1 className={styles.title}>My Skills</h1>
            </div>
            <div>
                <h2>Web Development</h2>
            </div>
            <div className={styles.icon_flex}>
                {webDevSkills.map((skill) => (
                    <div className={styles.box}>
                        <img
                            src={skill.image}
                            alt={skill.name}
                            width="60px"
                            height="60px"
                        />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
            <div>
                <h2>Visual Art and Animation</h2>
            </div>
            <div className={styles.icon_flex}>
                {visualArtSkills.map((skill) => (
                    <div className={styles.box}>
                        <img
                            src={skill.image}
                            alt={skill.name}
                            width="60px"
                            height="60px"
                        />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
