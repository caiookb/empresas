import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as CompanyController from "../../controllers/CompanyController";
import { Card, Header } from "../../components";
import { AuthController } from "../../controllers";

const EmptyEnterprises = () => (
  <p style={{ textAlign: "center", color: "#b5b4b4", marginTop: 100 }}>
    Nenhuma empresa foi encontrada para a busca realizada.
  </p>
);

const StartApp = () => (
  <p
    style={{
      textAlign: "center",
      color: "#383743",
      marginTop: 150,
      fontSize: 30,
    }}
  >
    Clique na busca para iniciar.
  </p>
);

const Enterprises = (props) => {
  const {
    fetchEnterprises,
    filterByText,
    enterprises,
    history,
    saveSelectedEnterprise,
    company_types,
  } = props;

  const [search, setSearch] = useState("");
  const [canFetch, setCanFetch] = useState(false);

  useEffect(() => {
    fetchEnterprises().catch((err) => {
      AuthController.logout(history);
      history.push("/login");
    });
  }, [canFetch]);

  useEffect(() => {
    filterByText(search, company_types);
  }, [search]);

  const onClickDetail = (id) => {
    saveSelectedEnterprise(id).then(() => {
      return history.push(`/enterprise/${id}/`);
    });
  };

  return (
    <div>
      <Header
        value={search}
        setValue={setSearch}
        canFetch={setCanFetch}
        history={history}
      />
      {canFetch ? (
        enterprises.length > 0 ? (
          enterprises?.map((enterprise) => {
            return (
              <Card
                item={enterprise}
                onClick={() => onClickDetail(enterprise.id)}
              />
            );
          })
        ) : (
          <EmptyEnterprises />
        )
      ) : (
        <StartApp />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    user: { user, isAuth },
    companies: { companies, selected_company, company_types },
  } = state;

  return {
    user,
    enterprises: companies,
    selected_enterprise: selected_company,
    company_types,
    isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEnterprises: () => dispatch(CompanyController.getCompanies()),
    saveSelectedEnterprise: (id) =>
      dispatch(CompanyController.getCompanyDetail(id)),
    filterByText: (text, types) =>
      dispatch(CompanyController.getCompaniesByName(text, types)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Enterprises)
);
