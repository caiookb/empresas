import React from "react";
import { render } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner component", () => {
  it("should render spinner", () => {
    const { getByTestId } = render(
      <div data-testid="loading">
        <Spinner />
      </div>
    );
    const el = getByTestId("loading");
    expect(el).not.toBeNull();
  });
});
