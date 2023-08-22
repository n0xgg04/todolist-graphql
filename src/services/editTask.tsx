import { gql, TypedDocumentNode, useMutation } from "@apollo/client";
import { TodoListSchema } from "../@types/TodoListContext";

interface CreateTodoInput {
  title: string;
  isActive: boolean;
}

export const CREATE_TASK: TypedDocumentNode<
  TodoListSchema,
  { input: CreateTodoInput } // Define input property
> = gql`
  mutation create($input: CreateTodoInput!) {
    createTodo(input: $input) {
      isActive
      title
    }
  }
`;

interface DelVars {
  id: string;
}

export const DELETE_TASK: TypedDocumentNode<TodoListSchema, DelVars> = gql`
  mutation delete($id: String!) {
    deleteTodo(id: $id)
  }
`;

interface UpdateTodoInput {
  id: string;
  title: string;
  isActive: boolean;
}

export const UPDATE_TASK: TypedDocumentNode<
  TodoListSchema,
  { input: UpdateTodoInput }
> = gql`
  mutation update($input: UpdateTodoInput!) {
    updateTodo(input: $input) {
      isActive
      title
      id
    }
  }
`;

export function useCreateTask() {
  return useMutation<TodoListSchema, { input: CreateTodoInput }>(CREATE_TASK); // Use the correct input type
}

export function useDeleteTask() {
  return useMutation<TodoListSchema, DelVars>(DELETE_TASK);
}

export function useUpdateTask() {
  return useMutation<TodoListSchema, { input: UpdateTodoInput }>(UPDATE_TASK);
}
