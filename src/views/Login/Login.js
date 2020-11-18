import React, { useState } from "react";
import { CustomButton, Input, Spinner } from "../../components";
import { email_icon, password_icon } from "../../assets/icons/icons";
import styles from "./Login.module.css";
import Logo from "../../components/Logo/Logo";
import * as AuthController from "../../controllers/AuthController";
import { ioasys_logo } from "../../assets/images/images";

const Login = (props) => {
  const { history } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const validator = () => email !== "" && password !== "";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validator) {
      setLoading(true);
      const body = { email, password };
      AuthController.login(body)
        .then((res) => {
          setError(false);
          setTimeout(() => {
            setLoading(false);
            return history.push("/enterprises");
          }, 1500);
        })
        .catch((err) => {
          setError(true);
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        });
    }
  };

  return (
    <div className={styles.container}>
      <Spinner loading={loading} />
      <form
        className={styles.login}
        style={{ filter: loading ? "blur(2px)" : "none" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Logo logo={ioasys_logo} width={"100%"} />
        <h2>BEM-VINDO AO EMPRESAS</h2>
        <h3>
          Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.
        </h3>
        <Input
          placeholder={"E-mail"}
          icon={email_icon}
          name={"email"}
          error={error}
          value={email}
          onChange={setEmail}
          type={"email"}
          required={true}
        />
        <Input
          placeholder={"Senha"}
          type={"password"}
          name={"password"}
          icon={password_icon}
          error={error}
          value={password}
          onChange={setPassword}
          required={true}
        />
        {error ? (
          <p className={styles.errorText}>
            Credenciais informadas são inválidas, tente novamente.
          </p>
        ) : null}
        <CustomButton title={"ENTRAR"} color={"#57bbbc"} onClick={() => null} />
      </form>
    </div>
  );
};

export default Login;
