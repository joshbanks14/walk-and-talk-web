import styles from "./index.module.css";
import { AboutSection } from "./_components/about-section/AboutSection";
import { useWindowDimensions } from "../../_hooks/use-window-dimensions";
import { ServiceSection } from "./_components/service-section/ServiceSection";

const HomePage = () => {
  const { isMobile } = useWindowDimensions();
  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <div style={{ fontSize: "3rem", fontWeight: "800" }}>
          Walk and Talk.
        </div>
        <div style={{ fontSize: "3rem", fontWeight: "100" }}>Welcome.</div>
      </div>
      <AboutSection />
      <ServiceSection />
    </div>
  );
};

export default HomePage;
