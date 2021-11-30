import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Modal from "./Modal";

configure({ adapter: new Adapter() });
const wrapper = shallow(<Modal />);
let container, containerProp;

describe("Render component", () => {
  it("should render Modal Component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("render first <div>", () => {
  beforeEach(() => {
    container = wrapper.find("div").at(0);
    containerProp = container.props();
  });

  it("should have a <div> with className", () => {
    expect(containerProp.className).toEqual("modal__wrap");
  });
});

describe("render second <div>", () => {
  beforeEach(() => {
    container = wrapper.find("div").at(1);
    containerProp = container.props();
  });

  it("should have a <div> with className", () => {
    expect(containerProp.className).toEqual("modal");
  });
});
