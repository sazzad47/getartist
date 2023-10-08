import React from "react";
import { FcApproval } from "react-icons/fc";
import { RiSecurePaymentFill } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const WhyArtist: React.FC = () => {
  return (
    <div className="w-full h-auto px-[1rem] sm:px-[2rem] md:px-[5rem] py-10">
      <div className="w-full flex flex-col gap-6">
        <div>
          <h3 className="text-4xl font-bold text-center">
            Why Book An Artist?
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="w-full auto p-5 flex flex-col gap-5 items-center">
            <FcApproval className="text-green-700 text-6xl" />
            <p className="text-3xl font-bold">Vetted Artists</p>
            <p className="text-center text-2xl font-bold">
              Discover professional artists available for commissions in your
              area.
            </p>
          </div>
          <div className="w-full auto p-5 flex flex-col gap-5 items-center">
            <RiSecurePaymentFill className="text-yellow-600 text-6xl" />
            <p className="text-3xl font-bold">Secure Payments</p>
            <p className="text-center text-2xl font-bold">
              Easily track and pay for projects with Book An Artist Pay.
            </p>
          </div>
          <div className="w-full auto p-5 flex flex-col gap-5 items-center">
            <VscWorkspaceTrusted className="text-yellow-600 text-6xl" />
            <p className="text-3xl font-bold">Trusted Ratings & Reviews</p>
            <p className="text-center text-2xl font-bold">
              Hire the right artist based on real ratings and reviews from
              customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyArtist;
