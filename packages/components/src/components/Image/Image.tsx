import React from "react";

export type ImageProps = {
  src: "string";
  altText: "string";
  circle: "boolean";
};

export const Image: React.SFC<ImageProps> = ({ src, altText, circle }) => {
  return (
    <>
      {circle && (
        <div className="ImageWrapper">
          <img src={src} alt={altText} className="Image" />
        </div>
      )}
      {!circle && <img src={src} alt={altText} className="Image" />}
    </>
  );
};
