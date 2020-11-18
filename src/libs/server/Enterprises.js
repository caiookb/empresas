import fetchServer from "./Server";

export const getCompanies = () => {
  return fetchServer({
    method: "GET",
    path: ["enterprises"],
  });
};

export const getCompanyDetail = (id) => {
  return fetchServer({
    method: "GET",
    path: ["enterprises", `${id}`],
  });
};

export const getCompanyByType = (id) => {
  return fetchServer({
    method: "GET",
    path: ["enterprises", id === 0 ? "" : `?enterprise_types=${id}`],
  });
};

export const getCompanyByName = (name) => {
  return fetchServer({
    method: "GET",
    path: ["enterprises", `?name=${name}`],
  });
};
