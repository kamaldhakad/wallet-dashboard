import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SmallHeader from "./SmallHeader";

const Layout = () => {
  return (
    <div className="flex">
      <div className="w-[80px] xl-[100px] 2xl:w-[130px]">
        <Sidebar />
      </div>
      <div className="w-[calc(100%-80px)] xl-[calc(100%-100px)] 2xl:w-[calc(100%-130px)]">
        <div className="h-[105px] xl:h-[120px] 2xl:h-[130px]">
          <Header />
          <SmallHeader />
        </div>
        <div className="h-[calc(100vh-105px)] xl:h-[calc(100vh-120px)] 2xl:h-[calc(100vh-130px)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
