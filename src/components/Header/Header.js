import React, { useState } from "react";
import styles from "./Header.module.css";
import { Logo, Input } from "../../components";
import { logo_nav } from "../../assets/images/images";
import { search_icon } from "../../assets/icons/icons";
import * as AuthController from "../../controllers/AuthController";
import Icon from "../Icon/Icon";

const ExpandedHeader = ({ setValue, value }) => (
  <div className={styles.expandedHeader}>
    <Input
      icon={search_icon}
      placeholder={"Pesquisar"}
      name={"search"}
      type={"text"}
      onChange={setValue}
      value={value}
    />
  </div>
);

const NormalHeader = ({ setExpanded, canFetch }) => (
  <div className={styles.normalHeader}>
    <p></p>
    <Logo width={"200px"} logo={logo_nav} />
    <Icon
      name={"search"}
      onClick={() => {
        setExpanded(true);
        canFetch(true);
      }}
    />
  </div>
);

const GoBackHeader = ({ history, title }) => (
  <div className={styles.goBackHeader}>
    <Icon name={"arrow_back"} onClick={() => history.goBack()} />
    <p style={{ marginLeft: 20 }}>{title?.toUpperCase()}</p>
  </div>
);

const Header = (props) => {
  const { value, setValue, goBack, history, title, canFetch } = props;

  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.options}>
        {expanded ? (
          <ExpandedHeader value={value} setValue={setValue} />
        ) : goBack ? (
          <GoBackHeader history={history} title={title} />
        ) : (
          <NormalHeader setExpanded={setExpanded} canFetch={canFetch} />
        )}
      </div>
      <div
        className={styles.logout}
        style={{ cursor: "pointer" }}
        onClick={() => AuthController.logout(history)}
      >
        <Icon name={"login"} label={"Logout"} />
      </div>
    </div>
  );
};

export default Header;
