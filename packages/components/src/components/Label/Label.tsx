import classNames from "classnames";
import React from "react";
import { Typography } from "../Typography";

type IProps = {
  children: React.ReactNode;
  error?: boolean;
};
export const Label = ({ children, error }: IProps) => {
  const labelClasses = classNames({
    Label: true,
    "Label--error": error
  });
  return (
    <Typography variant="caption" component="label" className={labelClasses}>
      {children}
    </Typography>
  );
};
