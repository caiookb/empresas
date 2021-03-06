import React from "react";
import styles from "./ExpandedCard.module.css";

const ExpandedCard = ({ enterprise }) => {
  const enterprise_name = enterprise?.enterprise_name;
  const country = enterprise?.country;
  const enterprise_type_name = enterprise?.enterprise_type.enterprise_type_name;
  const description = enterprise?.description;
  const share_price = enterprise?.share_price;
  const photo = enterprise?.photo;

  return (
    <div className={styles.card}>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url(https://empresas.ioasys.com.br${photo})`,
        }}
      >
        {enterprise_name?.charAt(enterprise_name[0])}
        {enterprise_name?.charAt(enterprise_name.length - 1).toUpperCase()}
      </div>
      <div className={styles.info}>
        <strong>{enterprise_name}</strong>
        <p>{enterprise_type_name}</p>
        <p>{country}</p>
        <p style={{ color: "green" }}>${share_price}</p>
        <p style={{ color: "#8d8c8c", marginTop: 30 }}>{description}</p>
      </div>
    </div>
  );
};

export default ExpandedCard;
