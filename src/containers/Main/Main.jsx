import styles from "./Main.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import Home from "../../components/Home";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import About from "../../components/About";
import { useState, useEffect } from "react";
import { webDevSkills, visualArtSkills } from "./skillitems";
import { projectitems } from "./projectitems";

const Main = () => {
    // const [offsetY, setOffsetY] = useState(0);
    // const handleScroll = () => setOffsetY(window.pageYOffset);

    // console.log(offsetY);
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);

    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    return (
        <Router>
            <div className={styles.Parallax__top}>
                <Header />
            </div>
            <section className={styles.Main}>
                <div className={styles.Parallax__back} />
                <div className={styles.Parallax__group}>
                    <div className={styles.Parallax__elements}>
                        <Home />
                    </div>
                    <div className={styles.Parallax__elements}>
                        <Skills />
                    </div>
                    <div className={styles.Parallax__elements}>
                        <Projects />
                    </div>
                    <div className={styles.Parallax__elements}>
                        <About />
                    </div>
                </div>
            </section>
            {/* <About /> */}
            {/* <section className={styles.About} id="about">
                <div>
                    <h1 className={styles.Title}>About Me</h1>
                </div>
                <div>
                    <h2>Details</h2>
                    <p>boskovic.danijel@gmail.com</p>
                </div>
            </section> */}
        </Router>
        //
    );
};

export default Main;
