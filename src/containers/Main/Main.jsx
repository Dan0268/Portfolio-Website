import styles from "./Main.module.scss";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "../../components/Header/Header";
import Home from "../../components/Home";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import About from "../../components/About";


const Main = () => {
    return (
        <div className={styles.Main}>
            <Router>
                <Header />
                <Home />
                <Skills />
                <Projects />
                <About />
            </Router>
        </ div>
    )
}

export default Main;