import { gql, TypedDocumentNode, useQuery } from "@apollo/client";
import { Todo, TodoListSchema } from "../@types/TodoListContext";

export type Variables = {};
const GET_TODO_LIST: TypedDocumentNode<TodoListSchema, Variables> = gql`
  query GetTodoList {
    listTodo {
      id
      title
      isActive
      createdAt
      updatedAt
    }
  }
`;

const useTodoListData = () => {
  return useQuery<TodoListSchema, Variables>(GET_TODO_LIST);
};

export default useTodoListData;
