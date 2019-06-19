import React from "react";
import MaskedInput from "react-text-mask";

import { Masks } from "./masks";
import { TextInput, TextInputProps } from "./TextInput";

export interface IMaskedTextInput extends TextInputProps {
  mask:
    | "DateOfBirth"
    | "CanadaPostalCode"
    | "USZipCode"
    | "Phone"
    | Array<string | RegExp>;
}

export const MaskedTextInput: React.SFC<IMaskedTextInput> = ({
  mask,
  ...other
}) => {
  const maskedInput = (
    <MaskedInput
      className="TextInput__input"
      mask={typeof mask === "string" ? Masks[mask] : mask}
      {...other}
    />
  );
  return <TextInput input={maskedInput} {...other} />;
};
