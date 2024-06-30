import { useState } from "react";
import styles from "./DesktopCard.module.css";
import { useWindowDimensions } from "../../../../../_hooks/use-window-dimensions";

type ServiceSectionProps = {
  image: string;
  header: string;
  body: string;
  info: string;
};

const DesktopCard = ({ image, header, info }: ServiceSectionProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} />
      <div className={styles.container}>
        <div className={styles.title}>{header}</div>
        <div className={styles.text}>{info}</div>
      </div>
    </div>
  );
};

export default DesktopCard;
