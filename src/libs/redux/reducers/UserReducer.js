import { UserTypes } from "../types";

const initialState = {
  user: [],
  isAuth: undefined,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserTypes.SAVE_USER:
      return { ...state, user: payload };
    case UserTypes.IS_AUTH:
      return { ...state, isAuth: payload };
    case UserTypes.CLEAN_USER:
      return { ...state };
    default:
      return state;
  }
};
