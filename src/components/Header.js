import React from "react";

const Header = () => {
  return (
    <div className="header flex items-center justify-between pl-2 pr-5 pt-5 xl:pt-6 2xl:pt-7 pb-2 relative overflow-hidden">
      <span className="top-center-bg"></span>
      <h3 className="font-extrabold text-20 xl:text-22 2xl:text-24 text-primary-200">
        Overview
      </h3>
      <div className="flex items-center">
        <div className="flex items-center gap-3 mr-2">
          <img
            src="/img/www.svg"
            alt="www logo"
            className="size-[40px] xl:size-[50px] 2xl:size-[60px]"
          />
          <img
            src="/img/other.svg"
            alt="other logo"
            className="size-[40px] xl:size-[50px] 2xl:size-[60px]"
          />
        </div>
        <div>
          <h4 className="font-bold text-16 xl:text-18 2xl:text-20 leading-[1] text-primary-200">
            Welcome back, John
          </h4>
          <p className="text-12 text-black/[0.39]">myemail@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
