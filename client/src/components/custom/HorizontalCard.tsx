// src/components/ArticleCardHorizontal.js
import React from "react";
import { StaticImageData } from "next/image";
interface ArticleCardProps {
  title: string;
  author: string;
  date: string;
  imgSrc: string | StaticImageData;
  content: string;
}
const ArticleCardHorizontal: React.FC<ArticleCardProps> = ({
  title,
  author,
  date,
  imgSrc,
  content,
}: any) => {
  return (
    <div className="flex  gap-2 flex-col lg:flex-row  p-4 relative border rounded-lg relative">
      <div className="shadow-[5px_5px_0px_0px_rgba(0,0,0)] lg:w-1/5 w-20 rounded-lg border border-black p-1">
        <img
          src={imgSrc}
          alt={title}
          className="rounded-lg  object-cover w-full h-40 "
        />
      </div>
      <div className="lg:w-2/3 lg:p-4 lg:-mt-4">
        <h2 className="font-bold text-xl  ">{title}</h2>
        <span className="font-medium text-sm">
          {author}, {date}
        </span>

        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  );
};

export default ArticleCardHorizontal;
