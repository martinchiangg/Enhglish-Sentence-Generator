import React, { FC, InputHTMLAttributes } from "react";
import classNames, { Argument as ClassArgument } from "classnames";
import "./InputGroup.css";

export type InputGroupProps = {
  /**
   * The content you included in the group, usually <Input /> or <Label />.
   */
  children?: React.ReactNode;
  /**
   * Classes added, with priority, to the group's <div>.
   */
  className?: ClassArgument;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputGroup: FC<InputGroupProps> = (props) => {
  const { children, className, ...otherProps } = props;

  const classes = classNames("input-group-default", className);

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

export default InputGroup;
