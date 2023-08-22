import * as React from "react";

type Props = {
  labelId: string;
  htmlRef?: React.LegacyRef<HTMLSelectElement>;
};

const priority = ["High", "Medium", "Low"];

export default function Selection({ labelId, htmlRef }: Props) {
  return (
    <select
      ref={htmlRef}
      id={labelId}
      defaultValue={priority[1]}
      onClick={(e) => e.stopPropagation()}
      className="align-center flex appearance-none flex-row justify-center rounded-lg bg-[#f0f0f0] px-5 py-2 text-sm text-black outline-none"
    >
      {priority.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
