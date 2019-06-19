import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Button } from "./";
import { boolean, text, select } from "@storybook/addon-knobs";

storiesOf("Button", module).add("with Text", () => {
  const disabled = boolean("Disabled", false);
  const outline = boolean("Outlined", false);
  const buttonText = text("Button copy", "Hello Button");
  const buttonType = select(
    "Button Type",
    ["primary", "secondary", "tertiary"],
    "primary"
  );
  const buttonSize = boolean("Button Small", false);

  return (
    <Button
      onClick={action("button-click")}
      variant={buttonType}
      small={buttonSize}
      outline={outline}
      disabled={disabled}
    >
      {buttonText}
    </Button>
  );
});
