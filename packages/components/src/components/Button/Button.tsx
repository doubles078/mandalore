import classNames from "classnames";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
  outline?: boolean;
  small?: boolean;
}

export const Button = ({
  className,
  children,
  variant = "primary",
  outline,
  small,
  ...other
}: ButtonProps) => {
  const buttonClasses = classNames("Button", `Button--${variant}`, className, {
    "Button--outline": outline,
    "Button--small": small
  });

  return (
    <button className={buttonClasses} {...other}>
      {children}
    </button>
  );
};
