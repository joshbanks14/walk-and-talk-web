import { useState } from "react";
import styles from "./MobileCard.module.css";
import { useWindowDimensions } from "../../../../../_hooks/use-window-dimensions";

type ServiceSectionProps = {
  image: string;
  header: string;
  body: string;
  info: string;
};

const MobileCard = ({ image, header, body, info }: ServiceSectionProps) => {
  const [cardFlip, setCardFlip] = useState(false);
  return (
    <div
      className={styles.card}
      style={{ height: cardFlip ? "fit-content" : "300px" }}
    >
      <img
        className={styles.image}
        src={image}
        style={{
          height: cardFlip ? "100%" : "40%",
          transition: "height 1s",
        }}
      />
      <div className={styles.container}>
        <div className={styles.title}>{header}</div>
        <div className={styles.text}>{cardFlip ? info : body}</div>
        <div className={styles.buttonContainer}>
          <div className={styles.button} onClick={() => setCardFlip(!cardFlip)}>
            {cardFlip ? "Close" : "More Info"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
