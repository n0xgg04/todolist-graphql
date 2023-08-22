import * as React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  url: string;
  size: number;
};
export default function Avatar({ url, size }: Props) {
  const tw = `h-[${size}px] w-[${size}px] rounded-full overflow-hidden grid place-items-center`;
  return (
    <>
      <img
        className={twMerge(tw, "aspect-square max-w-[50px]")}
        src={url}
        alt={`Avatar`}
      />
    </>
  );
}
