import { useState } from "react";
import styles from "./ServiceSection.module.css";
import ReactCardFlip from "react-card-flip";

type ServiceSectionProps = {
  image: string;
  header: string;
  body: string;
  info: string;
};

const ServiceSection = ({ image, header, body, info }: ServiceSectionProps) => {
  const [cardFlip, setCardFlip] = useState(false);
  return (
    <ReactCardFlip isFlipped={cardFlip} flipDirection="vertical">
      <div className={styles.front}>
        <img className={styles.image} src={image} />
        <div className={styles.container}>
          <div className={styles.title}>{header}</div>
          <div className={styles.text}>{body}</div>
          <div className={styles.buttonContainer}>
            <div
              className={styles.button}
              onClick={() => setCardFlip(!cardFlip)}
            >
              More Info
            </div>
          </div>
        </div>
      </div>
      <div className={styles.back} onClick={() => setCardFlip(!cardFlip)}>
        <div className={styles.backText}>{info}</div>
      </div>
    </ReactCardFlip>
  );
};

export default ServiceSection;
