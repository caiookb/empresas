import React from "react";
import styles from "./Buttons.module.css";

export const CustomButton = (props) => {
  const { title, color, onClick } = props;

  return (
    <button
      className={styles.buttons}
      style={{ backgroundColor: color }}
      onClick={() => onclick}
    >
      {title}
    </button>
  );
};
