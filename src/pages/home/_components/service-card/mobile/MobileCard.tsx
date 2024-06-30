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
  const { isMobile } = useWindowDimensions();
  return (
    <div
      className={styles.card}
      style={{
        flexDirection: cardFlip ? "column" : "row",
        width: isMobile ? "100%" : "50%",
      }}
    >
      <img
        className={styles.image}
        src={image}
        style={{
          width: cardFlip ? "100%" : "30%",
          transition: "width 1s",
        }}
      />
      <div
        className={styles.container}
        style={{
          width: cardFlip && isMobile ? "100%" : "70%",
          transition: "width 1s",
        }}
      >
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
