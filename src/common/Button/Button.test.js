import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "./Button";

configure({ adapter: new Adapter() });
const wrapper = shallow(<Button />);
let container, containerProp;

describe("Render component", () => {
  it("should render Button Component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("render <button>", () => {
  beforeEach(() => {
    container = wrapper.find("button");
    containerProp = container.props();
  });

  it("should have a <button> with className", () => {
    expect(containerProp.className).toEqual("btn");
  });
});
