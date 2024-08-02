import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { color } from "@mui/system";

const data = [
  { name: "Group E", value: 400, color: "#f5b659" },
  { name: "Group F", value: 300, color: "#8ec536" },
  { name: "Group G", value: 300, color: "#f29a76" },
  { name: "Group H", value: 200, color: "#ece8dd" },
  { name: "Group A", value: 400, color: "#f1625c" },
  { name: "Group B", value: 500, color: "#246176" },
  { name: "Group C", value: 300, color: "#93d3d4" },
  { name: "Group D", value: 200, color: "#67ccee" },
];

const CustomePieChart = () => {
  return (
    <div className="p-1">
      <div className="bg-primary-700 p-2 mb-4 rounded-[10px]">
        <h2 className="text-18 font-semibold rounded-xl text-center">
          Wallets
        </h2>
      </div>
      <div className="pie-chart relative">
        <PieChart
          width={300}
          height={300}
          series={[
            {
              data: data,
              innerRadius: 90,
              outerRadius: 130,
              paddingAngle: 1,
              cornerRadius: 3,
              startAngle: -180,
              endAngle: 180,
              cx: 150,
              cy: 150,
            },
          ]}
        />
        <div className="border border-black absolute top-[20px] left-[10px] right-0 w-[270px] mx-auto h-[270px] rounded-full"></div>
        <div
          className="content text-center absolute top-[73px]
      left-[10px] w-[165px] mx-auto right-0 h-[165px] border border-black rounded-full grid place-content-center"
        >
          <button className="w bg-primary-200 text-white rounded-3xl py-2 px-3 text-14 mb-2">
            Wallet
          </button>
          <h3 className="font-semibold text-20">26</h3>
          <p className="text-14 w-[80px] mx-auto leading-[1]">Total Wallets</p>
        </div>
      </div>

      <div className="px-3 mt-3 flex justify-between">
        <div>
          <div className="flex gap-2 mb-2">
            <div className="min-w-[10px] h-[9px] bg-[#F5B659] rounded-full mt-1"></div>
            <div>
              <h6 className="font-semibold text-12">BNB Wallet</h6>
              <p className="text-10">153 Users</p>
            </div>
          </div>
          <div className="flex gap-2 mb-2">
            <div className="min-w-[10px] h-[9px] bg-[#67CCEE] rounded-full mt-1"></div>
            <div>
              <h6 className="font-semibold text-12">Pollygon Wallet</h6>
              <p className="text-10">32 Users</p>
            </div>
          </div>
          <div className="flex gap-2 mb-2">
            <div className="min-w-[10px] h-[9px] bg-[#93D3D4] rounded-full mt-1"></div>
            <div>
              <h6 className="font-semibold text-12">Trust Wallet</h6>
              <p className="text-10">107 Users</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="min-w-[10px] h-[9px] bg-[#246176] rounded-full mt-1"></div>
            <div>
              <h6 className="font-semibold text-12">Metamask</h6>
              <p className="text-10">220 Users</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-2 mb-2">
            <div className="min-w-[10px] h-[9px] bg-[#F5B659] rounded-full mt-1"></div>
            <div>
              <h6 className="font-semibold text-12">OKX Wallet</h6>
              <p className="text-10">12 Users</p>
            </div>
          </div>
          <div className="flex gap-2 mb-2">
            <div className="min-w-[10px] h-[9px] bg-[#67CCEE] rounded-full mt-1"></div>
            <div>
              <h6 className="font-semibold text-12">Token Pocket</h6>
              <p className="text-10">84 Users</p>
            </div>
          </div>
          <div className="flex gap-2 mb-2">
            <div className="min-w-[10px] h-[9px] bg-[#93D3D4] rounded-full mt-1"></div>
            <div>
              <h6 className="font-semibold text-12">1 Inch Wallet</h6>
              <p className="text-10">98 Users</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="min-w-[10px] h-[9px] bg-[#246176] rounded-full mt-1"></div>
            <div>
              <h6 className="font-semibold text-12">Coin Base</h6>
              <p className="text-10">42 Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomePieChart;
