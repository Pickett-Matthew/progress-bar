import React from "react";
import ReactDom from "react-dom";
import AppContainer from "./AppContainer";

it("AppContainer renders on the page", () => {
  const testEle = document.createElement("DIV");
  ReactDom.render(<AppContainer />, testEle);
});
