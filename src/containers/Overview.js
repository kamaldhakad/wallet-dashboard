import React from "react";
import CustomeLineChart from "../components/CustomeLineChart";
import CustomePieChart from "./../components/CustomePieChart";
import ReactIcons from "./../utils/Icons";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Overview = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="flex">
      <div className="w-[calc(100%-300px)] 2xl:w-[calc(100%-400px)] p-1">
        <div className="grid grid-cols-[60%_40%] gap-1">
          <div className="border rounded-[10px]">
            <CustomeLineChart width={700} height={400} />
          </div>
          <div className="border rounded-[10px]">
            <CustomePieChart />
          </div>
        </div>
        <div className="border rounded-[10px] mt-1">
          <div className="bg-primary-700 p-2 rounded-[10px] flex items-center justify-between">
            <h2 className="text-18 font-semibold rounded-xl text-center">
              Registered Users
            </h2>
            <button className="bg-primary-200 text-white text-14 px-4 py-[6px] rounded-2xl">
              Create Account+
            </button>
          </div>

          {/* Table Start */}
          <div className="max-h-[150px] overflow-y-auto">
            <table class="min-w-full h-[200px] overflow-y-auto">
              <thead>
                <tr>
                  <th class="px-3 py-3">
                    <div className="w-full py-2 text-14 font-medium bg-primary-300 hover:bg-primary-200 text-primary-200 hover:text-white transition-all ease-in-out duration-200 px-3 rounded-3xl">
                      Name
                    </div>
                  </th>
                  <th class="px-3 py-3">
                    <div className="w-full py-2 text-14 font-medium bg-primary-300 hover:bg-primary-200 text-primary-200 hover:text-white transition-all ease-in-out duration-200 px-3 rounded-3xl">
                      Mobile
                    </div>
                  </th>
                  <th class="px-3 py-3">
                    <div className="w-full py-2 text-14 font-medium bg-primary-300 hover:bg-primary-200 text-primary-200 hover:text-white transition-all ease-in-out duration-200 px-3 rounded-3xl">
                      Wallets
                    </div>
                  </th>
                  <th class="px-3 py-3">
                    <div className="w-full py-2 text-14 font-medium bg-primary-300 hover:bg-primary-200 text-primary-200 hover:text-white transition-all ease-in-out duration-200 px-3 rounded-3xl">
                      Date/Time
                    </div>
                  </th>
                  <th class="px-3 py-3">
                    <div className="w-full py-2 text-14 font-medium bg-primary-300 hover:bg-primary-200 text-primary-200 hover:text-white transition-all ease-in-out duration-200 px-3 rounded-3xl">
                      Status
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                {Array(5)
                  .fill(null)
                  .map((_item, index) => (
                    <tr
                      key={index}
                      className="bg-gray-50 border-b-[5px] border-b-white"
                    >
                      <td class="px-3 py-3 text-12 text-primary-200 font-semibold">
                        Username {index + 1}
                      </td>
                      <td class="px-3 py-3 text-12 text-primary-200 font-semibold">
                        7855675465
                      </td>
                      <td class="px-3 py-3 text-12 text-primary-200 font-semibold text-center">
                        3
                      </td>
                      <td class="px-3 py-3 text-12 text-primary-200 font- text-center font-semibold">
                        29/04/2024
                      </td>
                      <td class="px-3 py-3">
                        <button className="px-7 mx-auto block py-2 text-12 font-semibold bg-green-700 text-white rounded-3xl">
                          Active
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="w-[300px] 2xl:w-[400px]">
        <img src="/img/alarmy.svg" alt="alarmz" className="w-full" />
        <div className="px-[6px]">
          <button className="mt-3 bg-primary-500 rounded-xl font-semibold  text-primary-200 w-full py-2 px-5">
            PNL Analysis
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 mt-3 px-[6px]">
          <div className="bg-primary-100 rounded-3xl py-1 px-3 text-[13px] font-medium flex items-center gap-4">
            <div className="w-[35px] h-[35px] rounded-full grid place-content-center bg-primary-200 text-white text-16">
              {ReactIcons.eye}
            </div>
            <span>Total Values (ALZ)</span>
          </div>
          <div className="h-full font-semibold bg-primary-200 text-white rounded-3xl px-3 py-2 flex items-center gap-3">
            <span>USD</span>
            <span>{ReactIcons.downArr}</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 mt-2 px-[6px]">
          <h2 className="text-primary-200 text-40 font-black font-inria leading-[1]">
            129,00.000
          </h2>
          <span className="bg-[#DBDBDB] px-3 py-2 rounded-3xl">
            ~$898,090.0000
          </span>
        </div>
        <div className="flex items-center justify-between mt-5 px-[6px]">
          <div className="size-[65px] xl:size-[75px] bg-primary-500 rounded-full grid place-content-center text-center">
            <span className="text-[28px] xl:text-30 mx-auto">
              {ReactIcons.pig}
            </span>
            <span className="text-[11px]">Deposit</span>
          </div>

          <div className="size-[65px] xl:size-[75px] bg-[#C5F1FF] rounded-full grid place-content-center text-center">
            <span className="text-[28px] xl:text-30 mx-auto">
              {ReactIcons.userLike}
            </span>
            <span className="text-[11px]">Referral</span>
          </div>

          <div className="size-[65px] xl:size-[75px] bg-[#FFD5C0] rounded-full grid place-content-center text-center">
            <span className="text-[28px] xl:text-30 mx-auto">
              {ReactIcons.swap}
            </span>
            <span className="text-[11px]">Swap</span>
          </div>

          <div className="size-[65px] xl:size-[75px] bg-[#ECFAF0] rounded-full grid place-content-center text-center">
            <span className="text-[28px] xl:text-30 mx-auto">
              {ReactIcons.wallet}
            </span>
            <span className="text-[11px]">Wallet</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5 px-[6px]">
          <div className=" bg-[#feefdc] border rounded-xl p-2 xl:p-3 text-center">
            <h6 className="text-12 xl:text-14 font-bold text-primary-200">
              Today's PNL
            </h6>
            <h1 className="f font-inria text-24 xl:text-[28px] 2xl:text-30 text-red-500 font-extrabold leading-[1] pt-2">
              -0.34%
            </h1>
            <h4 className="text-red-500 text-12 xl:text-14">-$34.00</h4>
            <span className="bg-primary-200 font-medium text-[13px] xl:text-[15px] text-white px-3 py-1 mx-auto block rounded-3xl text-center mt-2">
              7 Days
            </span>
          </div>

          <div className=" bg-[#ecfaf0] border rounded-xl p-2 xl:p-3 text-center">
            <h6 className="text-12 xl:text-14 font-bold text-primary-200">
              7D PNL
            </h6>
            <h1 className="f font-inria text-24 xl:text-[28px] 2xl:text-30 text-green-500 font-extrabold leading-[1] pt-2">
              +22.9%
            </h1>
            <h4 className="text-green-500 text-12 xl:text-14">+$34.00</h4>
            <span className="bg-primary-200 font-medium text-[13px] xl:text-[15px] text-white px-3 py-1 mx-auto block rounded-3xl text-center mt-2">
              30 Days
            </span>
          </div>

          <div className=" bg-[#fff1f1] border rounded-xl p-2 xl:p-3 text-center">
            <h6 className="text-12 xl:text-14 font-bold text-primary-200">
              30D PNL
            </h6>
            <h1 className="f font-inria text-24 xl:text-[28px] 2xl:text-30 text-red-500 font-extrabold leading-[1] pt-2">
              -1.54%
            </h1>
            <h4 className="text-red-500 text-12 xl:text-14">-$34.00</h4>
            <span className="bg-primary-200 font-medium text-[13px] xl:text-[15px] text-white px-3 py-1 mx-auto block rounded-3xl text-center mt-2">
              Custom
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
