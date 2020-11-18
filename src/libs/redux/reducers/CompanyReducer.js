import { CompanyTypes } from "../types";

const initialState = {
  companies: [],
  selected_company: {},
  company_types: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CompanyTypes.SAVE_COMPANIES:
      return { ...state, companies: payload };
    case CompanyTypes.SAVE_COMPANY_DETAIL:
      return { ...state, selected_company: payload };
    case CompanyTypes.SAVE_COMPANY_TYPES:
      return { ...state, company_types: payload };
    case CompanyTypes.CLEAN_COMPANIES:
      return { ...state };
    default:
      return state;
  }
};
