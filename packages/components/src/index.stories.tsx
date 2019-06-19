import React from "react";
import { storiesOf } from "@storybook/react";

const base = require("./styles/_base.scss");

storiesOf("Welcome", module).add(
  "to Storybook",
  () => <h2>Getting Started</h2>,
  {
    info: {
      text: `
    description or documentation about my component, supports markdown

    ~~~js
    <Button>Click Here</Button>
    ~~~
  `,
      inline: true,
      header: true,
      source: false
    }
  }
);
