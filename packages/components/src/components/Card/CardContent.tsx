import React from "react";

export type CardContentProps = {
  children: object;
};

export const CardContent: React.SFC<CardContentProps> = ({ children }) => {
  return <div className="CardContent">{children}</div>;
};
