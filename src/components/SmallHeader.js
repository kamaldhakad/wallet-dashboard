import React from "react";

const SmallHeader = () => {
  return (
    <div className="bg-primary-100 w-full h-[35px] flex items-center justify-between pr-5">
      <marquee loop>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 pl-5">
            <img src="/img/binance.svg" alt="icon" className="w-4" />
            <h6 className="text-primary-600 font-semibold text-14">Binance</h6>
          </div>

          <div className="flex items-center gap-2">
            <h6 className="text-primary-200 font-semibold text-14">Price:</h6>
            <p className="text-primary-200 text-14">$123,455</p>
          </div>

          <div className="flex items-center gap-2">
            <h6 className="text-primary-200 font-semibold text-14">
              24 hr Volume:
            </h6>
            <p className="text-primary-200 text-14">$123,455 B</p>
          </div>

          <div className="flex items-center gap-2">
            <h6 className="text-primary-200 font-semibold text-14">
              24 hr Change:
            </h6>
            <p className="text-red-500 text-14">$123,455 B</p>
          </div>

          <div className="flex items-center gap-2">
            <h6 className="text-primary-200 font-semibold text-14">
              Market Cap:
            </h6>
            <p className="text-primary-200 text-14">23456</p>
          </div>

          <div className="flex items-center gap-2 pl-5">
            <img src="/img/cb.svg" alt="icon" className="w-4" />
            <h6 className="text-[#23AF91] font-semibold text-14">Coinase</h6>
          </div>
        </div>
      </marquee>
    </div>
  );
};

export default SmallHeader;
