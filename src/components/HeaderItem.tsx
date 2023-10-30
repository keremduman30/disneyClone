import { MenuType } from "./Header";

type HeaderItemType = {
  menu: MenuType;
};
const HeaderItem = ({ menu }: HeaderItemType) => {
  return (
    <div className=" text-white  flex items-center gap-3 text-[20px] font-semibold cursor-pointer hover:underline hover:underline-offset-8 mb-2">
      <menu.icon />
      <h2 className="">{menu.name}</h2>
    </div>
  );
};

export default HeaderItem;
