"use client";
import React from "react";
import Heroimg from "../../assets/heroimg.png";
import Hello from "../../data/hello.md";
import Image from "next/image";

const HeroTop = () => {
  return (
    <div className="grid grid-cols-12 lg:mt-12">
      <div className="col-span-12 lg:col-span-8 prose prose-h1:text-text prose-p:text-text">
        <Hello />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <Image
          alt="Hero Image"
          height={1000}
          width={1000}
          className="w-full h-full"
          src={Heroimg}
        />
      </div>
    </div>
  );
};

export default HeroTop;
