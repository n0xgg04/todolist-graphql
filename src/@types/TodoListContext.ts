import { ApolloError, ApolloQueryResult } from "@apollo/client";
import { Variables } from "@services/GetTodoList";

export interface TodoListContextType {
  todoList: Todo[] | undefined;
  status: statusInterface;
  controller: {
    refetch?: (
      variables?: Partial<Variables> | undefined,
    ) => Promise<ApolloQueryResult<TodoListSchema>>;
  };
}

export interface Todo {
  id: string;
  title: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TodoListSchema {
  listTodo: Todo[] | undefined;
}

export interface statusInterface {
  loading: boolean;
  error: ApolloError | undefined;
}

export const defaultTodoContext: TodoListContextType = {
  todoList: [],
  controller: {},
  status: {
    loading: false,
    error: undefined,
  },
};
