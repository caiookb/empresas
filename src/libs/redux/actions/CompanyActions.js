import { CompanyTypes } from "../types";

export const saveCompanies = (companies) => ({
  type: CompanyTypes.SAVE_COMPANIES,
  payload: companies,
});

export const saveCompanyDetail = (company) => ({
  type: CompanyTypes.SAVE_COMPANY_DETAIL,
  payload: company,
});
export const saveCompanyTypes = (types) => ({
  type: CompanyTypes.SAVE_COMPANY_TYPES,
  payload: types,
});

export const clearCompanies = () => ({
  type: CompanyTypes.CLEAN_COMPANIES,
  payload: {},
});
