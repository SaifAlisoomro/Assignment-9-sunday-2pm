import React from "react";
import Images from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center bg-blue-900 text-white w-full h-full z-50 sticky top-0" >
      <div className="flex justify-around items-center space-x-4">
        <Images src={"/logo.9ff76f62.png"} alt="logo" width={90} height={113} className=""/>
        <h3 className="text-2xl font-mono font-bold">Tuition Free Education Program on Latest Technologies</ h3>
      </div>
      <ul className="flex justify-around space-x-3 font-semibold">
        <Link href={""}>
          {" "}
          <li>home</li>
        </Link>
        <Link href={""}>
          {" "}
          <li>Apply</li>
        </Link>
        <Link href={""}>
          {" "}
          <li>JOb</li>
        </Link>
        <Link href={""}>
          {" "}
          <li>Result</li>
        </Link>
        <Link href={""}>
          {" "}
          <li>courses</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
