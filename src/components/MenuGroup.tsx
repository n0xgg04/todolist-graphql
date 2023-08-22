import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { MouseEventHandler } from "react";

export interface IData {
  title: string;
  icon?: React.JSX.Element;
  navigation?: string;
}

type Props = {
  data: IData[];
  title: string;
};
export default function MenuGroup({ data, title }: Props) {
  const [isActive, setIsActive] = React.useState<number>(0);

  const handleTab: MouseEventHandler<HTMLLIElement> = (e) => {
    const { index } = e.currentTarget.dataset;
    setIsActive(Number(index));
  };

  return (
    <React.Fragment>
      <div className="flex w-full flex-col justify-center">
        <span className="text-md flex w-full cursor-pointer flex-row items-center justify-between rounded-lg px-3 py-3 text-[#8b8b8b] transition-all duration-300 hover:bg-white">
          {title}
          <IoIosArrowDown />
        </span>
        <ul className="mt-2 flex list-none flex-col gap-y-1 px-2">
          {data.map((item, index) => (
            <li
              key={index}
              onClick={handleTab}
              data-index={index}
              className={twMerge(
                "flex h-10 w-full cursor-pointer flex-row items-center gap-x-5 rounded-lg px-2 py-2 hover:bg-white",
                isActive === index &&
                  "bg-[#fa9639] text-white hover:bg-[#fa8639]",
              )}
            >
              {item.icon}
              <span
                className={twMerge(
                  "text-sm text-[#8b8b8b]",
                  isActive === index && "text-white",
                )}
              >
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
