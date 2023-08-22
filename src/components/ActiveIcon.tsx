import * as React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  size?: number;
  color?: string;
};
export default function ActiveIcon({ size, color }: Props) {
  const tw = `h-${size} w-${size} rounded-full overflow-hidden grid place-items-center`;
  const bgcolor = `bg-${color}-200`;
  return (
    <div
      className={twMerge(
        tw,
        "border-2 border-white shadow-lg shadow-gray-500",
        bgcolor,
      )}
    ></div>
  );
}
