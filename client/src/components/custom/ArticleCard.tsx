// src/components/ArticleCard.js
import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
interface ArticleCardProps {
  title: string;
  author: string;
  date: string;
  imgSrc: string | StaticImageData;
  content: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  author,
  date,
  imgSrc,
  content,
}) => {
  return (
    <div className="max-w-sm group border bg-card  cursor-pointer hover:bg-primary dark:hover:text-[#111827] border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0)] p-4 h-96 overflow-hidden">
      <div className=" w-full rounded-lg overflow-hidden ">
        <Image
          height={160}
          width={320}
          src={imgSrc}
          alt={title}
          className="h-40 w-full object-cover "
        />
      </div>
      <div className="px-4 py-2">
        <div className="flex justify-between items-center">
          <span className="font-medium">{author}</span>
          <span className="font-medium">{date}</span>
        </div>
        <div className="">
          <div className="font-bold text-text text-xl mt-2">{title}</div>
          <p className="text-base mt-1">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
