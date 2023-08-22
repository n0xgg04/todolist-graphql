import * as React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: string;
};
export default function GradientBox(props: Props) {
  return (
    <div
      className={twMerge(
        `h-[30%] w-full bg-gradient-to-r from-[#ba6f2a] to-[#fca46e]`,
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
