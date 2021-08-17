import styles from "./Projects.module.scss";
import { projectitems } from "./projectitems";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <section className={styles.Projects} id="projects">
            <div className={styles.Projects__container}>
                <div>
                    <h1 className={styles.Projects__Title}>Projects</h1>
                </div>
                <div>
                    <h2>Web Development</h2>
                </div>
                {projectitems.map((project) => (
                    <div className={styles.Projects__Card}>
                        <div className={styles.Projects__Card_Image}>
                            <img
                                src={project.image}
                                alt={project.name}
                                height="200px"
                            />
                        </div>
                        <div className={styles.Projects__Card_Details}>
                            <h3>{project.name}</h3>
                            {/* <p><Link to= {project.github}>github</Link></p> */}
                            <p>
                                <a href={project.github}>github</a>
                            </p>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
