import React from "react";
import { render } from "@testing-library/react";
import Logo from "./Logo";
import { ioasys_logo } from "../../assets/images/images";

describe("Logo component", () => {
  it("should render normal Logo", () => {
    const { getByTestId } = render(
      <div data-testid="logo">
        <Logo logo={ioasys_logo} width={"100px"} />
      </div>
    );
    const el = getByTestId("logo");
    expect(el).toBeVisible();
  });
});
