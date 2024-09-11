"use client";
import { useState } from "react";
import { articles } from "@/data/article";
import ArticleCard from "@/components/custom/ArticleCard";
import ArticleCardHorizontal from "@/components/custom/HorizontalCard";
import { GridIcon, ListBulletIcon } from "@radix-ui/react-icons";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
const Blog = () => {
  const [gridView, setGridView] = useState<boolean>(true);
  return (
    <div className="space-y-12">
      <Menubar className="w-fit mt-4">
        <MenubarMenu>
          <MenubarTrigger
            onClick={() => setGridView(true)}
            className="cursor-pointer"
          >
            Grid View <GridIcon className="ms-2" />
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            onClick={() => setGridView(false)}
            className="cursor-pointer"
          >
            List View <ListBulletIcon className="ms-2" />
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <div className="grid grid-cols-12 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`${
              gridView ? "col-span-12 lg:col-span-4" : "col-span-12"
            }`}
          >
            {gridView ? (
              <ArticleCard
                title={article.title}
                author={article.author}
                date={article.date}
                content={article.content}
                imgSrc={article.imgSrc}
              />
            ) : (
              <ArticleCardHorizontal
                content={article.content}
                author={article.author}
                date={article.date}
                imgSrc={article.imgSrc}
                title={article.title}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
