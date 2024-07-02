import styles from "./App.module.css";
import HomePage from "./pages/home";
import { RiFacebookCircleLine } from "react-icons/ri";

const App = () => {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <HomePage />
      </main>
    </div>
  );
};

export default App;
