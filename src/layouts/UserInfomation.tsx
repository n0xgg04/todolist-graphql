import React from "react";
import Avatar from "@components/Avatar";
import { IoIosArrowForward } from "react-icons/io";

interface Props {
  username: string;
  email: string;
}

export default function UserInformation({
  email,
  username,
}: Props): React.JSX.Element {
  return (
    <React.Fragment>
      <div className="flex w-full cursor-pointer flex-row items-center justify-center gap-x-2 rounded-lg border-[1px] border-gray-200 p-2">
        <Avatar
          url={"https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/p2.jpg"}
          size={15}
        />
        <div className="flex w-full flex-col items-start justify-center">
          <span className="flex w-full grow flex-row items-center justify-between text-sm font-medium">
            {username}
            <IoIosArrowForward className="grow rotate-90" />
          </span>
          <span className="text-xs text-[#8b8b8b]">{email}</span>
        </div>
      </div>
    </React.Fragment>
  );
}
