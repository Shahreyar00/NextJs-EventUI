import React from 'react';

const PriceCard = () => {
    return (
        <div className="pt-[30px] flex items-center justify-between">
            <div className="flex-1">
                <div className="font-medium text-sm text-[#CCCCCC]">Ticket starts at</div>
                <div className="font-bold text-xl text-[#FFFFFF]">15.00 <span className="font-semibold text-xs text-[#FFFFFF]">EUR</span></div>
            </div>
            <div className="flex-1">
                <div className="flex justify-center items-center py-[14px] px-[10px] gap-[10px] w-full h-[48px] bg-white text-black cursor-pointer rounded-xl">
                    Buy a Ticket
                </div>
            </div>
        </div>
    )
}

export default PriceCard