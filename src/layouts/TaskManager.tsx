import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Selection from "@components/Selection";

type Props = {
  controller: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};
export default function TaskManager(props: Props) {
  const [showModel, setShowModel] = props.controller;
  const selectorId = React.useId();
  return (
    <React.Fragment>
      <div className="flex w-full flex-col px-5">
        <div className="mt-5 flex w-full flex-col gap-y-5">
          <div className="flex flex-row items-center gap-x-5">
            <label
              htmlFor={selectorId}
              className="md:text-md select-none text-sm text-[#8b8b8b]"
            >
              Priority
            </label>
            <Selection labelId={selectorId} />
          </div>
          <div className="flex flex-row items-center gap-x-5">
            <label
              htmlFor={selectorId}
              className="md:text-md select-none text-sm text-[#8b8b8b]"
            >
              Due
            </label>
            <p className="text-sm text-[#8b8b8b]">18/08/2023</p>
          </div>
        </div>
        <div className="mt-5 flex w-full">
          <button
            onClick={() => setShowModel(true)}
            className="flex flex-row items-center justify-center gap-x-2 rounded-lg bg-[#fa9639] px-4 py-2 text-sm text-white shadow-sm transition duration-100 ease-in hover:bg-[#fa8639]"
          >
            <span className="text-sm">New Task</span>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#fbab62]">
              <MdArrowForwardIos className="rotate-90" />
            </span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
