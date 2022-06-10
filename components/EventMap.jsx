import React from 'react';
import Image from 'next/image';
import { FaGlobeAmericas } from "react-icons/fa";
import PriceCard from "../components/PriceCard";

const EventMap = () => {
    return (
        <div className="flex flex-col w-full md:flex-row items-center gap-[50px] mb-[50px] ">
            <div className="flex-1">
                <div className="flex flex-col items-center p-[10px] gap-[10px] w-full md:w-[95%] h-[220px] bg-[#323232] rounded-lg">
                    <div className="w-full h-full">
                        <iframe title="eventLocation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321684.1042820902!2d6.687131632363794!3d50.95780025339065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf259169ab2fe5%3A0x42760fc4a2a77f0!2sCologne%2C%20Germany!5e0!3m2!1sen!2sin!4v1654611730138!5m2!1sen!2sin" width="100%" height="100%" frameBorder="0" style={{border:0, borderRadius:"10px"}} allowFullScreen="" aria-hidden="false" tabIndex="0" position="absolute"></iframe>
                    </div>
                    <div className="font-bold text-base items-center text-[#FFFFFF]">
                        <span>Cologne, Germany</span>
                    </div>
                </div>
            </div>
            <div className="flex-1 h-[220px] w-full">
                <div className="flex items-center justify-between border-t-2 border-b-2 border-solid border-[#ffffff31]">
                    <div className="py-[24px] flex items-center gap-[6px]">
                        <div className="w-[48px] h-[48px] relative">
                            <Image src="/img/imgProfile.jpeg" className="rounded-[50%]" alt="" layout="fill" objectFit="cover" quality={100} />
                        </div>
                        <div>
                            <div className="font-bold text-base text-[#FFFFFF]">Event Organiser name</div>
                            <div className="font-semibold text-xs text-[#CCCCCC]">12 events</div>
                        </div>
                    </div>
                    <div className="p-[6px] flex items-center justify-center gap-[10px] w-[36px] h-[36px] bg-[#717171] rounded-md">
                        <FaGlobeAmericas />
                    </div>
                </div>
                <div className="hidden md:block">
                    <PriceCard />
                </div>
            </div>
        </div>
    )
}

export default EventMap