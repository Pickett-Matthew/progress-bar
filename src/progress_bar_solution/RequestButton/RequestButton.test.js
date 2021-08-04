import React from "react";
import { render, screen } from "@testing-library/react";
import RequestButton from "./RequestButton";

// these tests are pretty weak, but I think time is up
test("Should render RequestButton", () => {
  render(<RequestButton />);
  const reqBtn = screen.getByTestId("test-reqBtn");
  expect(reqBtn).toBeInTheDocument();
});
