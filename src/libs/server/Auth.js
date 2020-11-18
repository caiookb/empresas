import fetchServer from "./Server";

export const login = (body) => {
  return fetchServer({
    method: "POST",
    path: ["users", "auth", "sign_in"],
    body,
  });
};
