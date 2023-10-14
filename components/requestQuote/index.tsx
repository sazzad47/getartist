import React from "react";
import Steps from "./steps";
import { useRouter } from "next/router";
import Link from "next/link";

const PostJob = () => {
  const router = useRouter();
  const artistName = router.query.name;

  return (
    <div className="w-full px-[5rem] pt-[3rem]">
      <p className="text-center text-gray-900 text-3xl font-bold mb-[3rem]">Make a quote request to <Link href="/profile" className="text-blue-400"> {artistName} </Link>  </p>
        <Steps/>
    </div>
  )
};

export default PostJob;
