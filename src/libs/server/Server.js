import axios from "axios";

const domain = {
  PRODUCTION: "https://empresas.ioasys.com.br/api/v1/",
};

const urlPrefix = domain.PRODUCTION;

const url = (path) => {
  return urlPrefix.concat(path.join("/"));
};

export default (config) => {
  const { method, path, body } = config;

  const headersStorage = JSON.parse(localStorage.getItem("headers"));

  const headers = {
    "access-token": headersStorage?.accessToken,
    client: headersStorage?.client,
    uid: headersStorage?.uid,
  };
  const isAuth = url(path).includes("auth/sign_in");

  const opt = {
    method,
    data: body,
    headers: isAuth ? {} : headers,
  };

  return axios(url(path), opt)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};
