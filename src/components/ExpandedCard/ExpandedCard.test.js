import React from "react";
import { render } from "@testing-library/react";
import ExpandedCard from "./ExpandedCard";

describe("ExpandedCompanyCard component", () => {
  it("should render ExpandedCompanyCard with props", () => {
    const { getByTestId } = render(
      <div data-testid="card">
        <ExpandedCard
          data-testid="card"
          enterprise_name="Mock"
          description="Mocked description"
          country="Mocked country"
          photo="Mocked image"
          share_price="3000"
        />
      </div>
    );
    const el = getByTestId("card");
    expect(el).not.toBeNull();
  });
});
