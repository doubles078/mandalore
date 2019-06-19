import classNames from "classnames";
import React from "react";
import { ValidationMessage } from "../";

export type TextInputProps = {
  disabled?: boolean;
  error?: any;
  id: string;
  input?: any;
  label: string;
  name?: string;
  value?: string;
  warning?: any;
};

export const TextInput = ({
  disabled,
  label,
  id,
  input,
  error,
  value,
  warning,
  ...other
}: TextInputProps) => {
  const inputClass = classNames({
    TextInput: true,
    "TextInput--disabled": disabled,
    "TextInput--error": error,
    "TextInput--warning": warning
  });
  const labelClass = classNames({
    TextInput__label: true
  });
  return (
    <div className={inputClass}>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      {input ? (
        input
      ) : (
        <input
          className="TextInput__input"
          disabled={disabled}
          id={id}
          value={value}
          {...other}
        />
      )}
      {error && <span className="TextInput__error">{error}</span>}
      {warning && (
        <ValidationMessage passive={true}>{warning}</ValidationMessage>
      )}
    </div>
  );
};
