import * as React from "react";
import _ from "lodash";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import ActiveIcon from "@components/ActiveIcon";
import { TodoListContext } from "@pages/Dashboard";
import TaskColumn from "@layouts/TaskColumn";

function PlusIcon(): React.JSX.Element {
  return (
    <React.Fragment>
      <div className="grid aspect-square h-5 w-5 cursor-pointer place-items-center rounded-sm bg-gray-300">
        <AiOutlinePlus size={20} color="white" />
      </div>
    </React.Fragment>
  );
}

type Props = {};
export default React.memo(function TaskList(props: Props): React.JSX.Element {
  const { status, todoList } = React.useContext(TodoListContext);

  if (status.loading) {
    return <></>;
  }

  const column = [
    {
      title: "Todo",
      data: todoList?.map((item) => item).filter((item) => item.isActive),
    },
    {
      title: "Done",
      data: todoList?.map((item) => item).filter((item) => !item.isActive),
    },
  ];

  return (
    <div className="mt-2 flex max-h-[80vh] w-full flex-row gap-x-3 overflow-x-auto bg-[#f9f9f9]">
      {column.map((items, index) => (
        <div
          key={index}
          className="flex h-full shrink-0 grow-0 basis-[300px] flex-col bg-transparent px-1 py-1"
        >
          <div className="sticky left-0 top-0 flex bg-[#f9f9f9]">
            <div className="flex w-full flex-row items-center justify-between gap-y-1 rounded-lg bg-white px-5 py-2">
              <div className="flex flex-row items-center gap-x-2">
                <span>{items.title}</span>
                <ActiveIcon size={3} color={index === 0 ? "orange" : `green`} />
              </div>
              <div className="flex flex-row items-center gap-x-3">
                <BiDotsHorizontalRounded
                  size={20}
                  color="gray"
                  className="cursor-pointer"
                />
                <PlusIcon />
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-col gap-y-2">
            <TaskColumn todoList={items.data} />
          </div>
        </div>
      ))}
    </div>
  );
});
