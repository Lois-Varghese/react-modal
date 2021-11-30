import React from "react";
import { shallow, configure } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home";

configure({ adapter: new Adapter() });
const wrapper = shallow(
  <Router>
    <Home />
  </Router>
);

describe("Render component", () => {
  it("should render Home Component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
