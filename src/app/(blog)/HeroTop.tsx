"use client";
import React from "react";
import ArticleCard from "@/components/custom/ArticleCard";
import ArticleCardHorizontal from "@/components/custom/HorizontalCard";
import HeroCard from "@/components/custom/HeroCard";
import Heroimg from "../../assets/heroimg.png";
import Hello from "../../data/hello.mdx";
import Image from "next/image";
const HeroTop = () => {
  return (
    <div className="grid grid-cols-12 lg:mt-12">
      <div className="col-span-12 lg:col-span-8 prose prose-h1:text-text prose-p:text-text">
        <Hello />
      </div>
      <div className="col-span-12 lg:col-span-4">
        {/* <HeroCard
          title="Power of Javascript"
          author="Rico Kurnia"
          date="12 Juni 2024"
          content="Learn about the reduce method in JavaScript arrays and how it can optimize code for speed and efficiency."
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
        /> */}
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
