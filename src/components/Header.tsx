import logo from "../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

export type MenuType = {
  name: string;
  icon: string;
};
const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const menuList: MenuType[] = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between  p-5">
      <div className="flex items-center gap-8 ">
        <img
          src={logo}
          className="w-[100px] md:w-[140px] object-cover"
          alt=""
        />
        <div className="hidden md:flex  items-center gap-8 ">
          {menuList.map((e) => (
            <HeaderItem key={e.name} menu={e} />
          ))}
        </div>
        <div className=" flex md:hidden  items-center gap-8 ">
          {menuList
            .slice(0, 3)
            .map(
              (e, i) =>
                i < 3 && <HeaderItem key={e.name} menu={{ ...e, name: "" }} />
            )}
        </div>
        <div onClick={() => setToggle(!toggle)} className="md:hidden ">
          <HeaderItem
            menu={{
              name: "",
              icon: HiDotsVertical,
            }}
          />
          {toggle && (
            <div className="absolute mt-3 bg-[#121212] border border-gray-700 p-3 px-5 py-3">
              {menuList.map(
                (e, i) => i > 2 && <HeaderItem key={e.name} menu={e} />
              )}
            </div>
          )}
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[60px] rounded-full"
        alt=""
      />
    </div>
  );
};

export default Header;
/* 
 <div className="hidden md:flex  items-center gap-8 bg-red-500">
          {menuList.map((e) => (
            <HeaderItem key={e.name} menu={e} />
          ))}
        </div>


         <div className="hidden md:flex  items-center gap-8 bg-red-500">
          {menuList.map((e) => {
            e.name="";
            <HeaderItem key={e.name} menu={e} />
          })}
        </div>




*/
