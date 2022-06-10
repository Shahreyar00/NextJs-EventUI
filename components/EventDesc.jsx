import React from 'react';
import { FaMapPin, FaRegCalendarAlt, FaMicrophone, FaClock } from "react-icons/fa";

const EventDesc = () => {
    return (
        <div>
            <div>Event Name</div>
            <div className="font-normal text-lg text-[#CCCCCC]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatibus provident 
                doloremque impedit accusamus id nostrum! Ut quae animi, accusantium dolorem facere necessitatibus 
                exercitationem soluta excepturi at laborum debitis laboriosam.
            </div>
            <div className='mt-[32px] mb-[20px] flex items-center justify-between'>
                <div className='flex items-center gap-[6px]'>
                    <FaMapPin className="text-base font-bold text-[#b61313]" />
                    <span className="font-normal text-sm text-[#FFFFFF]">Lorem Ipsum</span>
                </div>
                <div className='flex items-center gap-[6px]'>
                    <FaRegCalendarAlt className="text-base font-bold text-[#4141a0]" />
                    <span className="font-normal text-sm text-[#FFFFFF]">10th May</span>
                </div>
            </div>
            <div className='flex items-center justify-between mb-[50px]'>
                <div className='flex items-center gap-[6px]'>
                    <FaMicrophone className="text-base font-bold text-[#ae9d9d]" />
                    <span className="font-normal text-sm text-[#FFFFFF]">Dance & Arts</span>
                </div>
                <div className='flex items-center gap-[14px]'>
                    <FaClock className="text-base font-bold text-[#2997ab]" />
                    <span className="font-normal text-sm text-[#FFFFFF]">4:00 PM</span>
                </div>
            </div>
        </div>
    )
}

export default EventDesc