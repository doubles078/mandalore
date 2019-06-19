import classNames from "classnames";
import React from "react";
import { ButtonProps } from "../Button";

type IProps = {
  /** Style the link like a button */
  asButton?: boolean;
  children: React.ReactNode;
  className?: string;
  /** Does the href point to an external resource */
  external?: boolean;
  href: string;
};

export const Link = ({
  asButton,
  children,
  className,
  external,
  href,
  ...other
}: IProps & ButtonProps) => {
  const linkClasses = classNames("Link", className);
  const buttonClasses = classNames(
    "Button",
    `Button--${other.variant}`,
    className,
    {
      "Button--outline": other.outline,
      "Button--small": other.small
    }
  );

  const addedProps = external
    ? {
        rel: "noopener noreferrer",
        target: "_blank"
      }
    : {};

  return (
    <a
      className={asButton ? buttonClasses : linkClasses}
      href={href}
      {...addedProps}
    >
      {children}
    </a>
  );
};
