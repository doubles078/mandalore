import { create } from "@storybook/theming";
import tokens from "@mandalore/design-tokens";

export default create({
  base: "light",

  colorPrimary: tokens.colors.clearChill,
  colorSecondary: "deepskyblue",

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: tokens.typography.main,
  fontCode: "monospace",

  // Text colors
  textColor: tokens.colors.prestigeBlue,
  textInverseColor: tokens.prestigeBlue,

  // Toolbar default and active colors
  barTextColor: tokens.colors.brightGreek,
  barSelectedColor: tokens.colors.brightGreek,
  barBg: tokens.colors.white,

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4

  /*   brandTitle: "My custom storybook",
  brandUrl: "https://example.com",
  brandImage: "https://placehold.it/350x150" */
});
