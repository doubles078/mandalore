import React from "react";
import { Typography } from "..";
import renderer from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("Typography renders an h4 element for display1", () => {
  const component = renderer.create(
    <Typography variant="display1">Some text</Typography>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const typography = shallow(
    <Typography variant="display1">Some text</Typography>
  );

  expect(typography.text()).toEqual("Some text");

  expect(typography.type()).toEqual("h4");
});

test("Typography overrides variant element with component prop", () => {
  const component = renderer.create(
    <Typography variant="display1" component="p">
      Some text
    </Typography>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const typography = shallow(
    <Typography variant="display1" component="p">
      Some text
    </Typography>
  );

  expect(typography.text()).toEqual("Some text");

  expect(typography.type()).toEqual("p");
});
