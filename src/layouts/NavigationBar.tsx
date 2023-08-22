import * as React from "react";
import Avatar from "@components/Avatar";
import UserInformation from "@layouts/UserInfomation";
import MenuGroup, { IData } from "@components/MenuGroup";
import { IoIosCreate } from "react-icons/io";

const userinfo = {
  username: "n0xgg04",
  email: "ltanh.26.04@gmail.com",
};

const menuData: IData[] = [
  {
    title: "Create task",
    icon: <IoIosCreate />,
  },
  {
    title: "Create task",
    icon: <IoIosCreate />,
  },
];

type Props = {};
export default function NavigationBar(props: Props) {
  return (
    <div className="sticky left-0 top-0 h-full w-full bg-[#f9f9f9]">
      <div className="flex flex-col justify-center gap-y-1 px-5 py-5">
        <div className="flex flex-row items-end">
          <span className="text-3xl text-[#f8a375]">Todo</span>
          <span className="text-3xl"> List</span>
        </div>
        <p className="text-sm text-[#8b8b8b]">Focus, Prioritize, Execute</p>
      </div>
      <div className="">
        <div className="flex flex-col justify-center gap-y-5 px-5 py-5">
          <UserInformation {...userinfo} />
          <MenuGroup title="Menu" data={menuData} />
        </div>
      </div>
    </div>
  );
}
