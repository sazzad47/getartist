import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import Basics from "./basics";
import Description from "./Description";
import Details from "./details";

const Stepper = () => {
  const steps = [
    { title: "Basics", component: <Basics /> },
    { title: "Description", component: <Description /> },
    { title: "Details", component: <Details /> },
    { title: "Media", component: <Basics /> },
    { title: "Finish", component: <Basics /> },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [complete, setComplete] = useState(false);

  const handleNextClick = () => {
    if (currentStep === steps.length - 1) {
      setComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }

     // Scroll to the top of the page
     window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }

     // Scroll to the top of the page
     window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-item ${currentStep === index && "active"} ${
              (index < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {index < currentStep || complete ? (
                <TiTick size={24} />
              ) : (
                index + 1
              )}
            </div>
            <p className="text-gray-900 text-2xl font-bold">{step.title}</p>
          </div>
        ))}
      </div>
      <div className="max-w-[70%] mx-auto">
      {steps[currentStep].component}
      </div>
      <div className="w-full flex justify-center gap-10 mt-[3rem]">
        {currentStep > 0 && (
          <button
            className="rounded-[2.0625rem] text-[#333] font-[roboto] text-[1.25rem] bg-[#E9E9E9] py-3 px-10"
            onClick={handleBackClick}
            disabled={currentStep === 0}
          >
            Back
          </button>
        )}

        {!complete ? (
          <button
            className="rounded-[2.0625rem] text-[#FFF] font-[roboto] text-[1.25rem] bg-[#333] py-3 px-10"
            onClick={handleNextClick}
          >
            {currentStep === steps.length - 1 ? "Finish" : "Next"}
          </button>
        ) : null}
      </div>
    </>
  );
};

export default Stepper;
