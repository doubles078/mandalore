import { addDecorator, addParameters, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import theme from "./theme";
import styles from "../src/styles/_ui-components.scss";
import { storyWrapper } from "../src/stories/decorators/storyWrapper";

addParameters({
  options: {
    theme: theme,
    styles: stylesheet => {
      stylesheet.children = {
        background: "red"
      };
      return stylesheet;
    }
  }
});

// automatically import all files ending in *.stories.tsx
const req = require.context("../src", true, /\.stories\.tsx$/);

function loadStories() {
  addDecorator(withInfo({ inline: true }));
  addDecorator(withA11y);
  addDecorator(withKnobs);
  addDecorator(storyWrapper);
  req.keys().forEach(req);
}

configure(loadStories, module);
