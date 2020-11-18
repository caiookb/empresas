import React, { useState } from "react";
import Icon from "../Icon/Icon";
import styles from "./TextInput.module.css";

const Input = (props) => {
  const {
    icon,
    type,
    required,
    error,
    placeholder,
    onChange,
    onBlur,
    name,
  } = props;

  const [inputType, setInputVisibilty] = useState(type);

  const onChangeVisibility = (type) =>
    setInputVisibilty(type === "password" ? "text" : "password");

  const ErrorRounded = () => <Icon name={"error"} color={"red"} />;

  const ClearIcon = () => (
    <Icon onClick={() => onChange("")} name={"close"} color={"white"} />
  );

  const PasswordVisibility = () => (
    <div className={styles.visibilityIcon}>
      <Icon
        onClick={() => onChangeVisibility(inputType)}
        name={inputType !== "password" ? "visibility" : "visibility_off"}
      />
    </div>
  );

  const HandleIcon = () =>
    name === "password" && !error ? (
      <PasswordVisibility />
    ) : error ? (
      <ErrorRounded />
    ) : placeholder === "Pesquisar" ? (
      <ClearIcon />
    ) : null;

  const handleColor = () =>
    error
      ? "solid 0.6px #ff0f44"
      : placeholder === "Pesquisar"
      ? "solid 0.6px #ffffff"
      : null;

  const handleInputColor = () => (placeholder === "Pesquisar" ? "white" : null);
  return (
    <div className={styles.input} style={{ borderBottom: handleColor() }}>
      <img className={styles.icon} src={icon} />
      <div className={styles.field}>
        <input
          type={inputType}
          onChange={(e) => onChange(e.target.value)}
          onBlur={(e) => onBlur(e.target.value)}
          placeholder={placeholder}
          required={required}
          style={{ color: handleInputColor() }}
          name={name}
        />
      </div>
      <HandleIcon />
    </div>
  );
};

export default Input;

Input.defaultProps = {
  onChange: () => null,
  onBlur: () => null,
  type: "text",
  required: false,
  name: null,
};
