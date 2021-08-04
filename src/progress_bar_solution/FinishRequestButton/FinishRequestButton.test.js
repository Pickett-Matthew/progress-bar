import React from "react";
import { render, screen } from "@testing-library/react";
import FinishRequestButton from "./FinishRequestButton";

test("Should NOT render Finish Req Button", () => {
  render(<FinishRequestButton />);
  const finishBtn = screen.getByTestId("test-finish-btn");
  expect(finishBtn).toBeInTheDocument();
});
