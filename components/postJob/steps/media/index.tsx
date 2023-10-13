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

const Media: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [addOns, setAddOns] = useState<AddOn[]>([]);
  const [faqs, setFaqs] = useState<Faq[]>([]);

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
      <h2 className="text-4xl font-bold text-gray-900 text-center">Media</h2>
   
        
        <div className="inline-flex items-center justify-center w-full relative mt-[3rem]">
          <hr className="w-full h-[2px] my-8 bg-gray-300 border-0 dark:bg-gray-700"/>
          <span className="absolute left-0 top-1 pr-3 font-medium text-gray-900 bg-gray-100 text-[2em]">Photos</span>
        </div>
        
        
        <div className="flex items-center justify-center w-1/2">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-[4px] border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-20 h-20 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-[1.5em] text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-[0.8em] text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
        </div> 

        <div className="inline-flex items-center justify-center w-full relative mt-[4rem]">
          <hr className="w-full h-[2px] my-8 bg-gray-300 border-0 dark:bg-gray-700"/>
          <span className="absolute left-0 top-1 pr-3 font-medium text-gray-900 bg-gray-100 text-[2em]">Video</span>
        </div>
        
        
        <div className="flex items-center justify-center w-1/2">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-[4px] border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-20 h-20 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-[1.5em] text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-[0.8em] text-gray-500">AVI, MP4 (MAX. 10MB)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
        </div> 


        <div className="inline-flex items-center justify-center w-full relative mt-[4rem]">
          <hr className="w-full h-[2px] my-8 bg-gray-300 border-0 dark:bg-gray-700"/>
          <span className="absolute left-0 top-1 pr-3 font-medium text-gray-900 bg-gray-100 text-[2em]">Audio</span>
        </div>
        
        <div className="flex items-center justify-center w-1/2">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-[4px] border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-20 h-20 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-[1.5em] text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-[0.8em] text-gray-500">MP3, AAC (MAX. 5MB)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
        </div> 

         
    </div>
  );
};

export default Media;
