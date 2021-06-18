import React, { FC, InputHTMLAttributes } from "react";
import classNames, { Argument as ClassArgument } from "classnames";
import "./Input.css";

export type InputProps = {
  /**
   * Classes added, with priority, to the group's <div>.
   */
  className?: ClassArgument;
  /**
   * Whether the input should present its errored state.
   */
  hasError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = (props) => {
  const { className, hasError, ...otherProps } = props;

  const inputStyle = classNames(
    "input-default",
    {
      "input-no-error": !hasError,
      "input-error": hasError,
    },
    className
  );

  return <input className={inputStyle} {...otherProps} />;
};

export default Input;
