import React from "react";
import styles from "./Spinner.module.css";

const Spinner = ({ loading }) => {
  return loading ? (
    <div className={styles.spinner}>
      <div className={styles.load}>
        <div className={styles.loader}></div>
      </div>
    </div>
  ) : null;
};

export default Spinner;
