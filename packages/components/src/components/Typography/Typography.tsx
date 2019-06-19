import classNames from "classnames";
import React from "react";
import { typographyColors, TypographyColorType } from "./colors";
import {
  typographyVariants,
  TypographyVariantType,
  variantPropMapping
} from "./variants";

type BaseTypographyProps = {
  variant: TypographyVariantType;
  component?: React.ReactNode;
  color?: TypographyColorType;
  align?: string;
  paragraph?: string;
  className?: string;
};

// For use in this base Typography implementation
type InternalTypographyProps = BaseTypographyProps & {
  children?: React.ReactNode;
};

// For External Use in components using Typeography
export type TypographyProps = BaseTypographyProps & {
  value: React.ReactNode;
};

export const Typography = ({
  align,
  color,
  children,
  className,
  component,
  variant,
  ...other
}: InternalTypographyProps) => {
  const Component = !component
    ? variantPropMapping[variant] || "span"
    : component;

  const typographyComponentClass = classNames(className, {
    Typography: true,
    "Typography--display1": variant === typographyVariants.DISPLAY1,
    "Typography--display2": variant === typographyVariants.DISPLAY2,
    "Typography--header1": variant === typographyVariants.HEADER1,
    "Typography--header2": variant === typographyVariants.HEADER2,
    "Typography--header3": variant === typographyVariants.HEADER3,
    "Typography--header4": variant === typographyVariants.HEADER4,
    "Typography--subheader": variant === typographyVariants.SUBHEADER,
    "Typography--body1": variant === typographyVariants.BODY1,
    "Typography--body2": variant === typographyVariants.BODY2,
    "Typography--uilabel": variant === typographyVariants.UILABEL,
    "Typography--uilabel-light": variant === typographyVariants.UILABELLIGHT,
    "Typography--uilabel-bold": variant === typographyVariants.UILABELBOLD,
    "Typography--caption": variant === typographyVariants.CAPTION,
    "Typography--color-primary": color === typographyColors.PRIMARY,
    "Typography--color-secondary": color === typographyColors.SECONDARY,
    "Typography--color-tertiary": color === typographyColors.TERTIARY,
    "Typography--color-link": color === typographyColors.LINK,
    "Typography--align-left": align === "left",
    "Typography--align-center": align === "center",
    "Typography--align-right": align === "right"
  });

  return (
    <Component className={typographyComponentClass} {...other}>
      {children}
    </Component>
  );
};
