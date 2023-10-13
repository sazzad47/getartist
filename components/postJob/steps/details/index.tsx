import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { TbBadgeFilled } from "react-icons/tb";
import { MdWorkspacePremium } from "react-icons/md";
import { motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

type Plan = "Basic" | "Standard" | "Premium";

// Define an interface for add-on objects
interface AddOn {
  id: number;
  title: string;
  price: string;
  description: string;
}

// Define an interface for faq objects
interface Faq {
  id: number;
  title: string;
  description: string;
}

const Details: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [addOns, setAddOns] = useState<AddOn[]>([]);
  const [faqs, setFaqs] = useState<Faq[]>([]);

  const handlePlanClick = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const getPlanClassName = (plan: Plan) => {
    return `rounded-md w-[25%] cursor-pointer font-[roboto] text-[1.7em] border flex flex-col justify-center px-3 py-[2rem] gap-3 items-center hover:text-green-600 hover:border-green-600 ${
      selectedPlan === plan
        ? "text-green-600 border-green-600"
        : "text-gray-900 border-gray-600"
    }`;
  };

  // Generate an array with numbers from 1 to 30 for the "Complete in" options
  const completeInOptions = Array.from({ length: 30 }, (_, i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1} day{ i !== 0 ? 's' : ''}
    </option>
  ));

  // Function to add a new add-on field
  const addAddOn = () => {
    const newAddOn = { id: Date.now(), title: "", price: "", description: "" };
    setAddOns([...addOns, newAddOn]);
  };

  // Function to delete an add-on field by ID
  const deleteAddOn = (id: number) => {
    const updatedAddOns = addOns.filter((addOn) => addOn.id !== id);
    setAddOns(updatedAddOns);
  };

  // Function to handle changes in the add-on fields
  const handleAddOnFieldChange = (index: number, field: string, value: string) => {
    const updatedAddOns = [...addOns];
    updatedAddOns[index] = {
      ...updatedAddOns[index],
      [field]: value,
    };
    setAddOns(updatedAddOns);
  };

  // Function to add a new faq field
  const addFaq = () => {
    const newFaq = { id: Date.now(), title: "", description: "" };
    setFaqs([...faqs, newFaq]);
  };

  // Function to delete faq field by ID
  const deleteFaq = (id: number) => {
    const updatedFaqs = faqs.filter((faq) => faq.id !== id);
    setFaqs(updatedFaqs);
  };

  // Function to handle changes in the faq fields
  const handleFaqFieldChange = (index: number, field: string, value: string) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index] = {
      ...updatedFaqs[index],
      [field]: value,
    };
    setFaqs(updatedFaqs);
  };

  return (
    <div className="mt-[3rem]">
      <h2 className="text-4xl font-bold text-gray-900 text-center">Details</h2>
      <div className="mt-[3rem]">
        <label className="text-2xl font-bold text-gray-900" id="plan">
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
       
       <div className="p-5 border border-gray-200 mt-[4rem]">
        <div className="flex flex-col gap-5">
          <label className="text-2xl font-bold text-gray-900" id="title">
            Title
          </label>
          <input
            type="text"
            className="input"
            aria-labelledby="title"
          />
        </div>

        <div className="flex flex-col gap-5 mt-6">
          <label className="text-2xl font-bold text-gray-900" id="description">
            Description 
          </label>
          <textarea
            className="input min-h-[15rem]"
            aria-labelledby="description"
          />
        </div>

        <div className="w-full flex gap-5 mt-6">
        <div className="flex flex-1 flex-col gap-5 relative">
                <label className="text-2xl font-bold text-gray-900" id="price">
                  Price
                </label>
              <div className="relative flex flex-wrap items-stretch">
                <span
                  className="flex items-center font-medium text-2xl rounded-l-md whitespace-nowrap border border-r-0 border-solid border-neutral-300 p-3 text-center text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  >$</span
                >
                <input
                  type="text"
                  className="input w-[1px] min-w-0 rounded-none"
                  aria-labelledby="price"
                 
                  />
                <span
                  className="flex items-center font-medium rounded-r-md text-2xl whitespace-nowrap border border-l-0 border-solid border-neutral-300 p-3 text-center text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  >.00</span
                >
              </div>
            </div>

          <div className="flex flex-1 flex-col gap-5">
            <label className="text-2xl font-bold text-gray-900" id="days">
             Complete in 
            </label>
            <select
              className="input"
              aria-labelledby="days"
            >
              <option value="" disabled selected>
                Select duration
              </option>
              {completeInOptions}
            </select>
          </div>

       </div>
      </div>

        <div className="inline-flex items-center justify-center w-full relative mt-[4rem]">
          <hr className="w-full h-[2px] my-8 bg-gray-300 border-0 dark:bg-gray-700"/>
          <span className="absolute left-0 top-1 pr-3 font-medium text-gray-900 bg-gray-100 text-[2em]">Add-ons</span>
        </div>
        
        <div className="w-full flex justify-end">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={addAddOn}
            className="text-gray-900 rounded-md font-[roboto] text-[1.4em] border border-[#333] py-3 px-6 flex gap-3 items-center"
          >
            <AiOutlinePlus />
            Add Add-on
          </motion.button>
        </div>
         
        {addOns.map((addOn, index) => (
          <div className="p-5 border border-gray-200 mt-5" key={index}>
            <div className="w-full flex gap-5 mt-6">
              <div className="flex flex-1 flex-col gap-5 relative">
                <label className="text-2xl font-bold text-gray-900" id={`addOnTitle${index}`}>
                  Add-on Title
                </label>
                <input
                  type="text"
                  className="input"
                  aria-labelledby={`addOnTitle${index}`}
                  value={addOn.title}
                  onChange={(e) => handleAddOnFieldChange(index, "title", e.target.value)}
                />
              </div>

              <div className="flex flex-1 flex-col gap-5 relative">
                <label className="text-2xl font-bold text-gray-900" id={`addOnPrice${index}`}>
                  Price
                </label>
              <div className="relative flex flex-wrap items-stretch">
                <span
                  className="flex items-center font-medium text-2xl rounded-l-md whitespace-nowrap border border-r-0 border-solid border-neutral-300 p-3 text-center text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  >$</span
                >
                <input
                  type="text"
                  className="input w-[1px] min-w-0 rounded-none"
                  aria-labelledby={`addOnPrice${index}`}
                  value={addOn.price}
                  onChange={(e) => handleAddOnFieldChange(index, "price", e.target.value)}
                  />
                <span
                  className="flex items-center font-medium rounded-r-md text-2xl whitespace-nowrap border border-l-0 border-solid border-neutral-300 p-3 text-center text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  >.00</span
                >
              </div>
               
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-6">
              <label className="text-2xl font-bold text-gray-900" id={`addOnDescription${index}`}>
                Description
              </label>
              <textarea
                className="input min-h-[15rem]"
                aria-labelledby={`addOnDescription${index}`}
                value={addOn.description}
                onChange={(e) => handleAddOnFieldChange(index, "description", e.target.value)}
              />
            </div>
            <div className="w-full flex justify-end mt-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => deleteAddOn(addOn.id)}
                className="text-gray-900 rounded-md font-[roboto] text-[1.4em] border border-[#333] py-3 px-6 flex gap-3 items-center"
              >
                <AiOutlineDelete className="text-[1.2em]" />
                Delete
              </motion.button>
            </div>
          </div>
        ))}


        <div className="inline-flex items-center justify-center w-full relative mt-[4rem]">
          <hr className="w-full h-[2px] my-8 bg-gray-300 border-0 dark:bg-gray-700"/>
          <span className="absolute left-0 top-1 pr-3 font-medium text-gray-900 bg-gray-100 text-[2em]">FAQ</span>
        </div>
        
        <div className="w-full flex justify-end">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={addFaq}
            className="text-gray-900 rounded-md font-[roboto] text-[1.4em] border border-[#333] py-3 px-6 flex gap-3 items-center"
          >
            <AiOutlinePlus />
            Add FAQ
          </motion.button>
        </div>
         
        {faqs.map((faq, index) => (
          <div className="p-5 border border-gray-200 mt-5" key={index}>
           
              <div className="flex flex-col gap-5 relative">
                <label className="text-2xl font-bold text-gray-900" id={`faqTitle${index}`}>
                  Add-on Title
                </label>
                <input
                  type="text"
                  className="input"
                  aria-labelledby={`faqTitle${index}`}
                  value={faq.title}
                  onChange={(e) => handleFaqFieldChange(index, "title", e.target.value)}
                />
              </div>

            <div className="flex flex-col gap-5 mt-6">
              <label className="text-2xl font-bold text-gray-900" id={`faqDescription${index}`}>
                Description
              </label>
              <textarea
                className="input min-h-[15rem]"
                aria-labelledby={`faqDescription${index}`}
                value={faq.description}
                onChange={(e) => handleFaqFieldChange(index, "description", e.target.value)}
              />
            </div>
            <div className="w-full flex justify-end mt-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => deleteFaq(faq.id)}
                className="text-gray-900 rounded-md font-[roboto] text-[1.4em] border border-[#333] py-3 px-6 flex gap-3 items-center"
              >
                <AiOutlineDelete className="text-[1.2em]" />
                Delete
              </motion.button>
            </div>
          </div>
        ))}

        <div className="inline-flex items-center justify-center w-full relative mt-[4rem]">
          <hr className="w-full h-[2px] my-8 bg-gray-300 border-0 dark:bg-gray-700"/>
          <span className="absolute left-0 top-1 pr-3 font-medium text-gray-900 bg-gray-100 text-[2em]">Details</span>
        </div>

        <div className="flex flex-col gap-5">
            <label className="text-2xl font-bold text-gray-900" id="days">
             Job Status 
            </label>
            <select
              className="input w-1/2"
              aria-labelledby="days"
            >
              <option value="" disabled selected>
                Select job status
              </option>
               <option value="available"> Available </option>
               <option value="unavailable"> Unavailable </option>
            </select>
          </div>

      </div>
    </div>
  );
};

export default Details;
