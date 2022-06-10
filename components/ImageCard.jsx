import React from 'react';

const ImageCard = ({ img }) => {
    return (
        <div className="relative 2xl:w-[200px] 2xl:h-[200px] xl:w-[180px] xl:h-[180px] lg:w-[140px] lg:h-[140px] w-[100px] h-[100px]">
            <img src={img} alt="" className="absolute rounded-md w-full h-full object-cover" />
        </div>
    )
}

export default ImageCard