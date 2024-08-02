import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";

const CustomLineChart = ({ height, width }) => {
  const buttonList = ["1D", "1W", "1M", "1Y"];
  const [isActive, setIsActive] = useState("1D");
  const formatDollar = () => `$200K`;
  const dataList = [
    [
      { name: "01-02", uv: 2000, pv: 1000, amt: 2400 },
      { name: "03-05", uv: 4000, pv: 2500, amt: 2210 },
      { name: "05-10", uv: 3500, pv: 3908, amt: 2000 },
      { name: "10-20", uv: 6000, pv: 4800, amt: 2181 },
      { name: "20-25", uv: 4200, pv: 3800, amt: 2500 },
      { name: "25-30", uv: 3800, pv: 4300, amt: 2100 },
    ],
    [
      { name: "01-02", uv: 3000, pv: 1000, amt: 2400 },
      { name: "03-05", uv: 2300, pv: 2500, amt: 2210 },
      { name: "05-10", uv: 400, pv: 3908, amt: 2000 },
      { name: "10-20", uv: 3500, pv: 4800, amt: 2181 },
      { name: "20-25", uv: 4000, pv: 3800, amt: 2500 },
      { name: "25-30", uv: 3800, pv: 4300, amt: 2100 },
    ],
    [
      { name: "01-02", uv: 4000, pv: 1000, amt: 2400 },
      { name: "03-05", uv: 5000, pv: 2500, amt: 2210 },
      { name: "05-10", uv: 4200, pv: 3908, amt: 2000 },
      { name: "10-20", uv: 3700, pv: 4800, amt: 2181 },
      { name: "20-25", uv: 4300, pv: 3800, amt: 2500 },
      { name: "25-30", uv: 4500, pv: 4300, amt: 2100 },
    ],
    [
      { name: "01-02", uv: 3200, pv: 1000, amt: 2400 },
      { name: "03-05", uv: 3500, pv: 2500, amt: 2210 },
      { name: "05-10", uv: 2800, pv: 3908, amt: 2000 },
      { name: "10-20", uv: 3600, pv: 4800, amt: 2181 },
      { name: "20-25", uv: 4000, pv: 3800, amt: 2500 },
      { name: "25-30", uv: 3700, pv: 4300, amt: 2100 },
    ],
  ];
  const [isActiveData, setIsActiveData] = useState(dataList[0]);

  const clickHandler = (index) => {
    setIsActive(buttonList[index]);
    setIsActiveData(dataList[index]);
  };

  return (
    <div className="p-1">
      {" "}
      <div className="bg-primary-700 p-2 mb-4 rounded-[10px]">
        <h2 className="text-18 font-semibold rounded-xl text-center">
          Assets Net Worth
        </h2>
      </div>
      <div>
        <div className="flex items-center justify-between gap-2">
          <div>
            <button className="text-14 font-semibold bg-primary-200 text-white rounded-2xl xl:rounded-3xl py-[6px] px-4 xl:px-6 xl:py-[10px]">
              +$123,90,90.98
            </button>
          </div>
          <div className="flex items-center gap-2">
            {buttonList.map((item, index) => (
              <button
                className={`text-14 font-semibold bg-[#F7F07A] text-black rounded-2xl xl:rounded-3xl py-[6px] px-4 xl:px-6 xl:py-[10px] ${
                  isActive == buttonList[index] && "!bg-black !text-white"
                }`}
                onClick={() => clickHandler(index)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <p className="text-12 font-medium mt-1 text-left">
          Last Updated: 02 hrs ago
        </p>

        <div className="mt-5 overflow-hidden">
          <AreaChart width={width} height={height} data={isActiveData}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#73B06F" stopOpacity={1} />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />{" "}
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="1 1"
              vertical={true}
              horizontal={true}
              stroke="#e0e0e0"
            />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={formatDollar} />
            <Tooltip formatter={formatDollar} />
            <Legend />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#2DA771"
              strokeWidth={2}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default CustomLineChart;
