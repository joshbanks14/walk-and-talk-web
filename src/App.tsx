import styles from "./App.module.css";
import HomePage from "./pages/home";
import Logo from "./_assets/logo-no-text.jpg";

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img className={styles.logo} src={Logo} />
        <div>Walk & Talk Pet Services</div>
      </header>
      <main className={styles.main}>
        <HomePage />
      </main>
    </div>
  );
};

export default App;
