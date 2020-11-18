import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ExpandedCard, Header } from "../../components";

const EnterpriseDetail = (props) => {
  const { selected_enterprise, history } = props;
  return (
    <div>
      <Header
        goBack={true}
        title={selected_enterprise.enterprise_name}
        history={history}
      />
      <ExpandedCard enterprise={selected_enterprise} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    companies: { selected_company },
  } = state;

  return {
    selected_enterprise: selected_company,
  };
};

export default withRouter(connect(mapStateToProps, null)(EnterpriseDetail));
