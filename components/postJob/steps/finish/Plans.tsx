import React, { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import Tooltip from "../../../ui/Tooltip";

type Upgrade = "Free Package" | "Silver Package" | "Gold Package";

const Plans: React.FC = () => {
  const [selectedUpgrade, setSelectedUpgrade] = useState<Upgrade | null>(null);

  const handleUpgradeChange = (upgrade: Upgrade) => {
    setSelectedUpgrade(upgrade);
  };

  const isUpgradeSelected = (upgrade: Upgrade) => {
    return selectedUpgrade === upgrade;
  };

  const getUpgradeClassName = (upgrade: Upgrade) => {
    return `rounded-md w-[80%] font-[roboto] border border-solid border-neutral-300 flex gap-[2rem] px-3 py-[1rem] gap-3 items-start hover:text-pink-500 hover:border-pink-500 ${
      isUpgradeSelected(upgrade)
        ? "text-pink-500 border-pink-500"
        : "text-gray-900 border-gray-600"
    }`;
  };

  return (
    <>
      <div className="inline-flex items-center justify-center w-full relative mt-[4rem]">
        <hr className="w-full h-[2px] my-8 bg-gray-300 border-0 dark:bg-gray-700" />
        <span className="absolute left-0 top-1 pr-3 font-medium text-gray-900 bg-gray-100 text-[2em]">Plans</span>
      </div>

      <div className="flex flex-col gap-5 mt-5">
        <div className={getUpgradeClassName("Free Package")}>
          <input
            type="radio"
            className="accent-pink-500 h-[1.4rem] w-[1.4rem]"
            checked={isUpgradeSelected("Free Package")}
            onChange={() => handleUpgradeChange("Free Package")}
          />
          <div className="flex-1 flex flex-col gap-3 items-start">
            <p className="text-[1.3em] font-bold mt-[-4px]">Free Package</p>
            <p className="text-[1.4em] font-[400] text-start">
            Free for a 2 day ad display.
            </p>
          </div>
          <div className="flex gap-5">
            <div className="text-[1.7em] mt-[-5px] font-bold"> Free</div>
            <Tooltip content="This add will remain active for 2 days" width={15}>
              <BiTimeFive className="text-[1.7rem]" />
            </Tooltip>
          </div>
        </div>
        <div className={getUpgradeClassName("Silver Package")}>
          <input
            type="radio"
            className="accent-pink-500 h-[1.4rem] w-[1.4rem]"
            checked={isUpgradeSelected("Silver Package")}
            onChange={() => handleUpgradeChange("Silver Package")}
          />
          <div className="flex-1 flex flex-col gap-3 items-start">
            <p className="text-[1.3em] font-bold mt-[-4px]">Silver Package</p>
            <p className="text-[1.4em] font-[400] text-start">
            $20 for 1 month ad display.
            </p>
          </div>
          <div className="flex gap-5">
            <div className="text-[1.7em] mt-[-5px] font-bold"> $30</div>
            <Tooltip content="This add will remain active for 30 days" width={15}>
              <BiTimeFive className="text-[1.7rem]" />
            </Tooltip>
          </div>
        </div>
        <div className={getUpgradeClassName("Gold Package")}>
          <input
            type="radio"
            className="accent-pink-500 h-[1.4rem] w-[1.4rem]"
            checked={isUpgradeSelected("Gold Package")}
            onChange={() => handleUpgradeChange("Gold Package")}
          />
          <div className="flex-1 flex flex-col gap-3 items-start">
            <p className="text-[1.3em] font-bold mt-[-4px]">Gold Package</p>
            <p className="text-[1.4em] font-[400] text-start">
            $50 for 6 months ad display.
            </p>
          </div>
          <div className="flex gap-5">
            <div className="text-[1.7em] mt-[-5px] font-bold"> $50</div>
            <Tooltip content="This add will remain active for 180 days" width={15}>
              <BiTimeFive className="text-[1.7rem]" />
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
