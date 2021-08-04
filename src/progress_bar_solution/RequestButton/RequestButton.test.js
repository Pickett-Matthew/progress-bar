import React from "react";
import { render, screen } from "@testing-library/react";
import RequestButton from "./RequestButton";

test("Should render RequestButton", () => {
  render(<RequestButton />);
  const reqBtn = screen.getByTestId("test-reqBtn");
  expect(reqBtn).toBeInTheDocument();
});
