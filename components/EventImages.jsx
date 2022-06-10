import React from 'react';
import ImageCard from "./ImageCard";
import PriceCard from "./PriceCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const EventImages = () => {
    return (
        <div className="flex flex-col">
            <div>
                <div className='font-bold text-base text-[#FFFFFF] mb-[16px] '>
                    Event Images
                </div>
            </div>
            <div className="flex items-center relative">
                <div>
                    <FaChevronLeft className=" w-8 h-8 p-2 border-2 rounded-md text-[#A1A1A1] border-[#A1A1A1]" />
                </div>
                <div className="mx-[30px] flex 2xl:gap-[32px] lg:gap-[24px] gap-[16px] overflow-hidden">
                    <ImageCard img="/img/rect11.png" />
                    <ImageCard img="/img/rect12.png" />
                    <ImageCard img="/img/rect13.png" />
                    <ImageCard img="/img/rect14.png" />
                    <ImageCard img="/img/rect16.png" />
                </div>
                <div>
                    <FaChevronRight className="w-8 h-8 p-2 border-2 rounded-md text-[#A1A1A1] border-[#A1A1A1]" />
                </div>
            </div>
            <div className="block md:hidden lg:hidden xl:hidden ">
                <PriceCard />
            </div>
        </div>
    )
}

export default EventImages