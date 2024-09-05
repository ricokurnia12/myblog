import React from 'react'
import { articles } from '@/data/article'
import ArticleCard from '@/components/custom/ArticleCard'
import ArticleCardHorizontal from '@/components/custom/HorizontalCard'
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
} from "@/components/ui/menubar"
const Blog = () => {
    return (
        <div className='space-y-12'>
            <Menubar className='w-fit mt-4'>
                <MenubarMenu >
                    <MenubarTrigger className='cursor-pointer'>Grid View <GridIcon className='ms-2' /></MenubarTrigger>

                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className='cursor-pointer'>List View <ListBulletIcon className='ms-2' /></MenubarTrigger>

                </MenubarMenu>


            </Menubar>
            <div className="grid grid-cols-12 gap-8"
            >

                {articles.map((article, index) => (
                    <div key={index} className="col-span-12 lg:col-span-4">

                        <ArticleCard
                            title={article.title}
                            author={article.author}
                            date={article.date}
                            content={article.content}
                            imgSrc={article.imgSrc}
                        />
                    </div>
                ))}
            </div>
        </div>)
}

export default Blog