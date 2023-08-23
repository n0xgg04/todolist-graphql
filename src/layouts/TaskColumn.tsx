import * as React from "react";
import { Todo } from "../@types/TodoListContext";
import TodoCard from "@components/TodoCard";
import { convertToVietnamTimeFormatted } from "@utils/convertTime";

type Props = {
  todoList?: Todo[];
};

const background: string[] = [
  "bg-blue-200",
  "bg-red-200",
  "bg-green-200",
  "bg-orange-200",
];

export default React.memo(function TaskColumn({
  todoList,
}: Props): React.JSX.Element {
  const getRandomBackground = (): string => {
    return background[Math.floor(Math.random() * background.length)];
  };

  return (
    <React.Fragment>
      {todoList &&
        todoList.map((data, i) => (
          <TodoCard
            taskId={data.id}
            key={i}
            bg={getRandomBackground()}
            title={`#${data.id}`}
            content={data.title}
            time={convertToVietnamTimeFormatted(data.createdAt)}
          />
        ))}
    </React.Fragment>
  );
});
