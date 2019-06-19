import React from "react";
import { TextInput } from "../TextInput";
import renderer from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("TextInput renders with a label", () => {
  const component = renderer.create(<TextInput label="A label" id="test" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const textInput = shallow(<TextInput label="A label" id="test" />);

  expect(textInput.find("label").text()).toEqual("A label");
});
