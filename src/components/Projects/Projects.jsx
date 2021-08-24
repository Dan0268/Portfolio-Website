import styles from "./Projects.module.scss";
import { projectitems } from "./projectitems";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <section className={styles.Projects} id="projects">
            <div className={styles.Projects__container}>
                <div className={styles.Projects__Title}>
                    <h1>Projects</h1>
                    <h2>Web Development</h2>
                </div>
                <div className={styles.Projects__Cards}>
                    {projectitems.map((project) => (
                        <div className={styles.Projects__Card}>
                            <img src={project.image} alt={project.name} />

                            <div className={styles.Projects__Card_Details}>
                                <h3>{project.name}</h3>
                                {project.github ? (
                                    <a href={project.github}>
                                        <p>Github Link</p>
                                    </a>
                                ) : (
                                    <>
                                        <p></p>
                                    </>
                                )}

                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
