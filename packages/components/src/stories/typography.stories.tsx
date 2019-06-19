import React from "react";

import { storiesOf } from "@storybook/react";
import { Typography, TypographyVariantType } from "../components";

import { boolean, text } from "@storybook/addon-knobs";

storiesOf("Typography", module).add("Using the Typography component", () => {
  const variant = text("Variant", "header1");
  return (
    <Typography variant={variant as TypographyVariantType}>
      This is some text.
    </Typography>
  );
});
