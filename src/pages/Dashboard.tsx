import * as React from "react";
import { Helmet } from "react-helmet";
import TaskManager from "@layouts/TaskManager";
import GradientBox from "@components/GradientBox";
import Breadcumb from "@components/Breadcumb";
import NavigationBar from "@layouts/NavigationBar";
import TaskList from "@layouts/TaskList";
import useTodoListData from "@services/GetTodoList";
import { ToastContainer } from "react-toastify";
import {
  defaultTodoContext,
  TodoListContextType,
} from "../@types/TodoListContext";
import TaskCreateModel from "@layouts/TaskCreateModel";

type Props = {};

export const TodoListContext =
  React.createContext<TodoListContextType>(defaultTodoContext);
export default function Dashboard(props: Props) {
  const { loading, data, error, refetch } = useTodoListData();
  const [showModel, setShowModel] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <ToastContainer />
      <div className="grid h-full grid-cols-1 transition duration-100 ease-in md:grid-cols-12">
        <TaskCreateModel controller={[showModel, setShowModel, refetch]} />
        <div className="bg-bgc hidden transition duration-100 ease-in md:col-span-2 md:block">
          <NavigationBar />
        </div>
        <div className="bg-white transition duration-100 ease-in md:col-span-10">
          <GradientBox className="flex flex-col justify-end gap-y-5 px-5 py-5 transition duration-100 ease-in">
            <Breadcumb list={["Todo"]} />
            <h1 className="text-3xl text-white">Todo List</h1>
          </GradientBox>
          <TodoListContext.Provider
            value={{
              todoList: data?.listTodo,
              controller: {
                refetch,
              },
              status: {
                loading,
                error,
              },
            }}
          >
            <TaskManager controller={[showModel, setShowModel]} />
            <TaskList />
          </TodoListContext.Provider>
        </div>
      </div>
    </React.Fragment>
  );
}
