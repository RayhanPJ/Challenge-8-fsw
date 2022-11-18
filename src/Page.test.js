import React from "react";
import { create } from "react-test-renderer";
import { LandingPage } from "./components";

const FirstPage = create(<LandingPage />);

it("Snapshot Landing Page", () => {
  expect(FirstPage).toMatchSnapshot();
});
