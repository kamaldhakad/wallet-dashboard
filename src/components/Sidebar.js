import React, { useState } from "react";
import { menus } from "./../utils/constants";

const Sidebar = () => {
  const [isActive] = useState(3);
  return (
    <div className="w-full bg-primary-100 h-[100vh] overflow-y-auto">
      <div className="logo text-center my-5 mb-10">
        <img
          src="/img/logo.svg"
          alt="Logo"
          className="w-[35px] xl:w-[40px] 2xl:w-[47px] mx-auto"
        />
      </div>
      <ul className="flex flex-col items-center gap-2">
        {menus.map((menu, ind) => (
          <li
            className={`hover:bg-white p-[6px] rounded-3xl cursor-pointer group transition-all ease-in-out duration-200 ${
              isActive == ind && "bg-white"
            }`}
            key={ind}
          >
            <div
              className={`group-hover:bg-primary-500 size-[40px] grid place-content-center rounded-full transition-all ease-in-out duration-200 ${
                isActive == ind && "bg-primary-500"
              }`}
            >
              <img src={menu.icon} alt="menu icon" className="w-[22px]" />
            </div>
            <p
              className={`uppercase text-10 2xl:text-12 text-center pt-2 pb-1 font-medium invisible group-hover:visible transition-all ease-in-out duration-200 ${
                isActive == ind && "!visible"
              }`}
            >
              {menu.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
