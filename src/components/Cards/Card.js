import React from "react";
import styles from "./Card.module.css";

const Card = ({ item, onClick }) => {
  const enterprise_name = item?.enterprise_name;
  const country = item?.country;
  const photo = item?.photo;
  const enterprise_type_name = item?.enterprise_type.enterprise_type_name;

  return (
    <div className={styles.card} onClick={onClick}>
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
      </div>
    </div>
  );
};

export default Card;
