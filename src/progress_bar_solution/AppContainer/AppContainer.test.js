import React from "react";
import ReactDom from "react-dom";
import AppContainer from "./AppContainer";

// if I had more time I would write better unit tests!!
it("AppContainer renders on the page", () => {
  const testEle = document.createElement("DIV");
  ReactDom.render(<AppContainer />, testEle);
});
