import React from 'react';

const HeroCard = ({ title, author, date, content, imgSrc }: any) => {
    return (
        <div className="lg:w-96 lg:h-96 bg-[#FFC72C] border border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0)] p-4">
            <div className="relative lg:h-2/3 rounded-t-lg overflow-hidden">
                <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="px-2 py-2 h-1/3">
                {/* <div className="flex justify-between items-center">
                    <span className="text-black font-medium">{author}</span>
                    <span className="text-black font-medium">{date}</span>
                </div> */}
                <div className="font-bold text-xl mt-2">{title}</div>
                <p className="text-black text-sm mt-1">{content}</p>
            </div>
        </div>
    );
};

export default HeroCard;
