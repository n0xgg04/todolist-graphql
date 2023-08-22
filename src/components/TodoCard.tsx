import * as React from "react";
import { twMerge } from "tailwind-merge";
import { AiFillStar } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import { useDeleteTask, useUpdateTask } from "@services/editTask";
import { toast } from "react-toastify";
import { TodoListContext } from "@pages/Dashboard";

type Props = {
  children?: React.ReactNode;
  bg: string;
  title: string;
  time: string;
  content: string;
  taskId: string;
};
export default function TodoCard({
  children,
  title,
  time,
  bg,
  taskId,
  content,
}: Props): React.JSX.Element {
  const { controller } = React.useContext(TodoListContext);
  const [deleteTask, { loading }] = useDeleteTask();
  const [updateTask, { loading: updateLoading }] = useUpdateTask();

  const handleDeleteAction: React.MouseEventHandler<HTMLSpanElement> = async (
    e,
  ) => {
    e.preventDefault();
    try {
      await deleteTask({
        variables: {
          id: e.currentTarget.id,
        },
      });
      toast.success("Delete task successfully");
      controller.refetch && (await controller.refetch());
    } catch (error) {
      toast.error("Delete task failed");
      console.log(error);
    }
  };

  const handleMarkDoneAction: React.MouseEventHandler<HTMLSpanElement> = async (
    e,
  ) => {
    try {
      await updateTask({
        variables: {
          input: {
            isActive: false,
            id: taskId,
            title: title,
          },
        },
      });
      toast.success("Mark done task successfully");
      controller.refetch && (await controller.refetch());
    } catch (error) {
      toast.error("Mark done task failed");
      console.log(error);
    }
  };

  return (
    <div
      className={twMerge(
        "flex aspect-video w-full flex-col justify-between rounded-lg p-2",
        bg,
      )}
    >
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-x-1">
          <AiFillStar size={20} color="#f28d2e" className="cursor-pointer" />
          <span className="w-3/4 overflow-hidden truncate text-ellipsis text-sm font-medium">
            {title}
          </span>
        </div>
        <div className="grap-x-2 flex grow flex-row">
          <span
            id={taskId}
            onClick={handleDeleteAction}
            className="border-1 mr-1 grid h-7 w-7 place-items-center rounded-full border border-gray-500"
          >
            <FiDelete size={15} color="gray" className="cursor-pointer" />
          </span>
          <span
            onClick={handleMarkDoneAction}
            className="border-1 grid h-7 w-7 place-items-center rounded-full border border-gray-500"
          >
            <MdDone size={15} color="gray" className="cursor-pointer" />
          </span>
        </div>
      </div>
      <p className="text-2xl">{content}</p>
      <div className="flex flex-col justify-between">
        <span className="text-[0.85rem] font-[280]">{time}</span>
      </div>
    </div>
  );
}
