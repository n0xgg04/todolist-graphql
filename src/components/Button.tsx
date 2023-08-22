import * as React from "react";
import { twMerge } from "tailwind-merge";

interface IButtons {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "light"
    | "dark"
    | "link";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  children: string;
  className?: string;
}

enum ButtonSize {
  small = "px-2",
  medium = "px-4",
  large = "px-6",
}

export default function Button({
  variant,
  size,
  onClick,
  children,
}: IButtons): React.JSX.Element {
  const bgcolor = `bg-${variant || "primary"}`;

  return <></>;
}
