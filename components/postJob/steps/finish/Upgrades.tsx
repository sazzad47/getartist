import React, { useState } from "react";
import {BiTimeFive} from "react-icons/bi";
import Tooltip from "../../../ui/Tooltip";

type Upgrade = "Featured" | "Sponsored" | "Homepage";

const Upgrades: React.FC = () => {
  const [selectedUpgrades, setSelectedUpgrades] = useState<Upgrade[]>([]);

  const handleUpgradeChange = (upgrade: Upgrade) => {
    if (selectedUpgrades.includes(upgrade)) {
      setSelectedUpgrades(selectedUpgrades.filter((selected) => selected !== upgrade));
    } else {
      setSelectedUpgrades([...selectedUpgrades, upgrade]);
    }
  };

  const isUpgradeSelected = (upgrade: Upgrade) => {
    return selectedUpgrades.includes(upgrade);
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
          <hr className="w-full h-[2px] my-8 bg-gray-300 border-0 dark:bg-gray-700"/>
          <span className="absolute left-0 top-1 pr-3 font-medium text-gray-900 bg-gray-100 text-[2em]">Upgrades</span>
        </div>
        
        <div className="flex flex-col gap-5 mt-5">
            <div
              className={getUpgradeClassName("Featured")}
            >
              <input type="checkbox" className="accent-pink-500 h-[1.4rem] w-[1.4rem]" checked={isUpgradeSelected("Featured")} onChange={() => handleUpgradeChange("Featured")} />
             <div className="flex-1 flex flex-col gap-3 items-start">
                <p className="text-[1.3em] font-bold mt-[-4px]"> Featured </p>
                <p className="text-[1.4em] font-[400] text-start"> 
                  Featured ads are highlighted in search results and shown 10x more often than standard ads.
                </p>
             </div>
             <div className="flex gap-5">
                 <div className="text-[1.7em] mt-[-5px] font-bold"> $10</div>
                 <Tooltip content="This addon will remain active for 30 days" width={15}>
                   <BiTimeFive className="text-[1.7rem]"/>
                 </Tooltip>
             </div>
              
         </div>
            <div
              className={getUpgradeClassName("Sponsored")}
            >
              <input type="checkbox" className="accent-pink-500 h-[1.4rem] w-[1.4rem]" checked={isUpgradeSelected("Sponsored")} onChange={() => handleUpgradeChange("Sponsored")} />
             <div className="flex-1 flex flex-col gap-3 items-start">
                <p className="text-[1.3em] font-bold mt-[-4px]"> Sponsored </p>
                <p className="text-[1.4em] font-[400] text-start"> 
                  Sponsored ads are shown on rotation at the top of the search results page.
                </p>
             </div>
             <div className="flex gap-5">
                 <div className="text-[1.7em] mt-[-5px] font-bold"> $30</div>
                 <Tooltip content="This addon will remain active for 30 days" width={15}>
                   <BiTimeFive className="text-[1.7rem]"/>
                 </Tooltip>
             </div>
         </div>
            <div
              className={getUpgradeClassName("Homepage")}
            >
              <input type="checkbox" className="accent-pink-500 h-[1.4rem] w-[1.4rem]" checked={isUpgradeSelected("Homepage")} onChange={() => handleUpgradeChange("Homepage")} />
             <div className="flex-1 flex flex-col gap-3 items-start">
                <p className="text-[1.3em] font-bold mt-[-4px]"> Homepage </p>
                <p className="text-[1.4em] font-[400] text-start"> 
                  Have your ad appear on our homepage and seen by thousands of people.
                </p>
             </div>
             <div className="flex gap-5">
                 <div className="text-[1.7em] mt-[-5px] font-bold"> $50</div>
                 <Tooltip content="This addon will remain active for 30 days" width={15}>
                   <BiTimeFive className="text-[1.7rem]"/>
                 </Tooltip>
             </div>          
         </div>
         
      </div>
   </>
  );
};

export default Upgrades;
