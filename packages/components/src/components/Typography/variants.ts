export type TypographyVariantType =
  | "display1"
  | "display2"
  | "header1"
  | "header2"
  | "header3"
  | "header4"
  | "subheader"
  | "body1"
  | "body2"
  | "uilabel"
  | "uilabel-light"
  | "uilabel-bold"
  | "caption"

export const typographyVariants: { [index: string]: TypographyVariantType } = {
  DISPLAY1: "display1",
  DISPLAY2: "display2",
  HEADER1: "header1",
  HEADER2: "header2",
  HEADER3: "header3",
  HEADER4: "header4",
  SUBHEADER: "subheader",
  BODY1: "body1",
  BODY2: "body2",
  UILABEL: "uilabel",
  UILABELLIGHT: "uilabel-light",
  UILABELBOLD: "uilabel-bold",
  CAPTION: "caption"
};

export const variantPropMapping: any = {
  [typographyVariants.DISPLAY1]: "h4",
  [typographyVariants.DISPLAY2]: "h5",
  [typographyVariants.HEADER1]: "h1",
  [typographyVariants.HEADER2]: "h2",
  [typographyVariants.HEADER3]: "h3",
  [typographyVariants.HEADER4]: "h4",
  [typographyVariants.SUBHEADER]: "h6",
  [typographyVariants.BODY1]: "p",
  [typographyVariants.BODY2]: "p",
  [typographyVariants.UILABEL]: "span",
  [typographyVariants.UILABELLIGHT]: "span",
  [typographyVariants.UILABELBOLD]: "span",
  [typographyVariants.CAPTION]: "span",
};
