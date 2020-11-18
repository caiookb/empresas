import { CompanyActions } from "../libs/redux/actions";
import { CompaniesServer } from "../libs/server";

export const getCompanies = () => (dispatch) => {
  return CompaniesServer.getCompanies()
    .then((res) => {
      dispatch(CompanyActions.saveCompanies(res.data.enterprises));

      const typeArray = [{ id: 0, type: "" }];
      res.data.enterprises?.map((res) =>
        typeArray.push({
          id: res.enterprise_type.id,
          type: res.enterprise_type.enterprise_type_name.toLowerCase(),
        })
      );

      const uniqueTypes = [
        ...new Set(
          typeArray
            .sort((a, b) => a.id > b.id)
            .map((item) => JSON.stringify(item))
        ),
      ].map((item) => JSON.parse(item));

      dispatch(CompanyActions.saveCompanyTypes(uniqueTypes));
    })
    .catch((error) => {
      throw error;
    });
};

const filterByNameOrType = (isType, name) => {
  return isType?.type === name
    ? CompaniesServer.getCompanyByType(isType.id)
    : CompaniesServer.getCompanyByName(name);
};

export const getCompaniesByName = (name, items) => (dispatch) => {
  const isType = items.find((item) => item.type.includes(name.toLowerCase()));

  return filterByNameOrType(isType, name)
    .then((res) => {
      dispatch(CompanyActions.saveCompanies(res.data.enterprises));
    })
    .catch((err) => {
      throw err;
    });
};

export const getCompanyDetail = (companyId) => (dispatch) => {
  return CompaniesServer.getCompanyDetail(companyId)
    .then((res) => {
      dispatch(CompanyActions.saveCompanyDetail(res.data.enterprise));
      return res;
    })
    .catch((error) => {
      throw error;
    });
};
