import React, { FC } from "react";
import classNames, { Argument as ClassArgument } from "classnames";
import "./Label.css";

export type LabelProps = {
  /**
   * The content within the Label.
   */
  children?: React.ReactNode;
  /**
   * Classes added, with priority, to the <Label>.
   */
  className?: ClassArgument;
  /**
   * Whether the label should present its errored state.
   */
  hasError?: boolean;
};

export const Label: FC<LabelProps> = (props) => {
  const { children, className, hasError, ...otherProps } = props;

  const classes = classNames(
    "label-default",
    {
      "label-error": hasError,
    },
    className
  );

  return (
    <label className={classes} {...otherProps}>
      {children}
    </label>
  );
};

export default Label;
