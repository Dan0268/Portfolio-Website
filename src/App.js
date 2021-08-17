import styles from "./App.module.scss";
import Main from "./containers/Main";

const App = () => {
    return (
        <>
            <div className={styles.App}>
                <Main />
            </div>
        </>
    );
};

export default App;
