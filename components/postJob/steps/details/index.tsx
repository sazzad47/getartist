import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { TbBadgeFilled } from "react-icons/tb";
import { MdWorkspacePremium } from "react-icons/md";

type Plan = "Basic" | "Standard" | "Premium";

const Details: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handlePlanClick = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const getPlanClassName = (plan: Plan) => {
    return `rounded-md w-[25%] cursor-pointer font-[roboto] text-[1.7em] border flex flex-col justify-center px-3 py-[2rem] gap-3 items-center ${
      selectedPlan === plan
        ? "text-green-600 border-green-600"
        : "text-gray-900 border-gray-600"
    }`;
  };

  return (
    <div className="mt-[3rem]">
      <h2 className="text-4xl font-bold text-gray-900 text-center">Details</h2>
      <div className="mt-5">
        <label className="text-2xl font-bold text-gray-900" id="password">
          Create custom pricing plans for this job *
        </label>
        <div className="flex gap-5 mt-5">
          <div
            className={getPlanClassName("Basic")}
            onClick={() => handlePlanClick("Basic")}
          >
            <TbBadgeFilled className="text-[2em]" />
            Basic
          </div>
          <div
            className={getPlanClassName("Standard")}
            onClick={() => handlePlanClick("Standard")}
          >
            <MdWorkspacePremium className="text-[2em]" />
            Standard
          </div>
          <div
            className={getPlanClassName("Premium")}
            onClick={() => handlePlanClick("Premium")}
          >
            <AiFillStar className="text-[2em]" />
            Premium
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
