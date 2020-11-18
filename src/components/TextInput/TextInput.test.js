import React from "react";
import { render } from "@testing-library/react";
import Input from "./TextInput";
import { email_icon } from "../../assets/icons/icons";

describe("TextInput component", () => {
  it("should render email normal input", () => {
    const { container } = render(<Input type={"email"} />);
    expect(container.querySelector("input")).toHaveAttribute("type", "email");
  });

  it("should render password input", () => {
    const { container } = render(<Input type={"password"} />);
    expect(container.querySelector("input")).toHaveAttribute(
      "type",
      "password"
    );
  });

  it("should render input with icon", () => {
    const { container } = render(<Input icon={email_icon} />);
    expect(container.querySelector("div")).not.toBe(null);
  });
});
