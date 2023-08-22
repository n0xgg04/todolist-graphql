import * as React from "react";
import { twMerge } from "tailwind-merge";
import { useCreateTask } from "@services/editTask";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dispatch, SetStateAction } from "react";
import { ApolloQueryResult } from "@apollo/client";
import { TodoListSchema } from "../@types/TodoListContext";
import { Variables } from "@services/GetTodoList";

type Props = {
  controller: [
    boolean,
    Dispatch<SetStateAction<boolean>>,
    (
      variables?: Partial<Variables> | undefined,
    ) => Promise<ApolloQueryResult<TodoListSchema>>,
  ];
};
export default function TaskCreateModel({
  controller,
}: Props): React.JSX.Element {
  const [showModel, setShowModel, refetch] = controller;
  const [addTask, { loading }] = useCreateTask();

  const handSubmitForm = async (e: any) => {
    e.preventDefault();
    try {
      await addTask({
        variables: {
          input: {
            title: e.target.title.value,
            isActive: true,
          },
        },
      });
      toast.success("Create task successfully");
      await refetch();
      setShowModel(false);
    } catch (error) {
      toast.error("Create task failed");
      console.log(error);
    }
  };

  return (
    <div
      id="create-task-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={twMerge(
        `fixed right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0`,
        showModel && "block",
      )}
    >
      <div className="relative -right-[50%] top-[50%] max-h-full w-full max-w-md -translate-x-[50%] -translate-y-[50%] ">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <button
            onClick={() => setShowModel(false)}
            type="button"
            className="absolute right-2.5 top-3 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Create new task
            </h3>
            <form className="space-y-6" onSubmit={handSubmitForm}>
              <div>
                <label
                  htmlFor="todo"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Task title
                </label>
                <input
                  type="text"
                  name="title"
                  id="todo"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="Todo"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create task"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
