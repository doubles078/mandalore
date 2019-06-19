import React from "react";
import classNames from "classnames";

export type CardProps = {
  children?: any;
  outline?: boolean;
};

export const Card = ({ children, outline, ...props }: CardProps) => {
  const cardClasses = classNames({
    Card: true,
    "Card--outlined": outline
  });
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};
