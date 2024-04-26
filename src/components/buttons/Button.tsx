import React from "react";
import clsx from "clsx";

type Props = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "back";
  children?: React.ReactNode;
  size?: "small" | "default" | "medium" | "back";
};

export default function Button({
  className,
  variant = "primary",
  children = "Button",
  size = "default",
  ...rest
}: Props) {
  return (
    <button
      className={clsx(
        className,
        "font-satoshi uppercase",
        {
          "flex items-center space-x-2 text-xs leading-4":
            variant === "primary",
          "border-[1px] border-custom-gold-500 leading-6 text-custom-gold-500":
            variant === "secondary",
          "border-b-[1px] border-custom-gold-500 text-xs leading-6 text-custom-gold-500":
            variant === "back",
        },
        {
          "p-4": size === "small",
          "px-10 py-6": size === "medium",
          "px-10 py-8": size === "default",
          "px-0 pb-4": size === "back",
        },
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
