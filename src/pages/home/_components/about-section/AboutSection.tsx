import styles from "./AboutSection.module.css";
import ProfileImage from "../../../../_assets/profile-photo.jpg";
import { useWindowDimensions } from "../../../../_hooks/use-window-dimensions";

export const AboutSection = () => {
  const { isMobile } = useWindowDimensions();
  return (
    <div className={styles.about}>
      <div className={isMobile ? styles.bodyMobile : styles.body}>
        <img
          className={isMobile ? styles.imageMobile : styles.image}
          src={ProfileImage}
          style={{ marginBottom: isMobile ? "20px" : "0px" }}
        />
        <div className={styles.content}>
          <div className={styles.aboutTitle}>About Me</div>
          <div className={styles.aboutText}>
            I am dedicated to providing the best care for your pets. I am
            passionate about animals and committed to ensuring the well-being of
            your pets. I have over 30 years experience in having owned my own
            dogs/cats and caring for other peoples. My goal is to make sure your
            pets are safe, healthy, happy, and loved whilst in my care. I live
            in the Bradford-on-Avon area. I am fully Insured. DBS approved. I
            offer a range of services
          </div>
          <div className={styles.contactTitle}>Contact Details</div>
          <div className={styles.aboutText}>Phone Number: 07545450347</div>
          <div className={styles.aboutText}>
            Email Address: jojomc49@hotmail.com
          </div>
        </div>
      </div>
    </div>
  );
};
