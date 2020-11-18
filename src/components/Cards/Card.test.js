import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("ExpandedCompanyCard component", () => {
  it("should render ExpandedCompanyCard with props", () => {
    const { getByTestId } = render(
      <div data-testid="card">
        <Card data-testid="card" enterprise_name="Mock" photo="Mocked image" />
      </div>
    );
    const el = getByTestId("card");
    expect(el).not.toBeNull();
  });
});
