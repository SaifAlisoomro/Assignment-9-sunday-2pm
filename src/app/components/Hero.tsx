import React from "react";
import Image from "next/image";

const Hero = () => {
  return (

      <div className="flex justify-around ml-10 mr-10">
        <div className="items-center w-1/2  mt-16">
          <h1 className="font-extrabold text-[#044e83] text-5xl">
            Governor Sindh
          </h1>
          <h1 className="text-4xl mt-2 text-[#044e83]">Kamran Khan Tissori</h1>
          <p className="font-extrabold text-4xl mt-5 text-[#2eb6e8]">
            Certified Cloud Applied Generative AI Engineer (GenEng)
          </p>

          <p className="text-2xl text-[#044e83] font-bold mt-5">
            {" "}
            Earn Up to $5000 / Month
          </p>
          <p className="text-2xl font-bold text-[#044e83] mt-10">
            Now Addmission Are Open
          </p>

          <button className="bg-[#044e83] w-44 rounded-md text-white text-2xl py-3 text-center font-bold mt-5">
            {" "}
            Apply Now
          </button>
        </div>
        <div className="w-1/2 ">
          <Image
            src={"/cover.1d863e39.png"}
            alt="profile"
            width={1600}
            height={1212}
            className="ml-16"
          />
        </div>
     
    </div>
  );
};

export default Hero;
