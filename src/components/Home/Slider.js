import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Slider = () => {

    let defaultTransform = 0;
    function goNext() {
        defaultTransform = defaultTransform - 398;
        var slider = document.getElementById("slider");
        if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
            defaultTransform = 0;
        slider.style.transform = "translateX(" + defaultTransform + "px)";
    }

    function goPrev() {
        var slider = document.getElementById("slider");
        if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
        else defaultTransform = defaultTransform + 398;
        slider.style.transform = "translateX(" + defaultTransform + "px)";
    }


    return (
        <div>
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                <div className="w-full relative flex items-center justify-center">
                    <button onClick={goPrev} aria-label="slide backward" className="absolute z-30 left-0 md:ml-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                        <FaAngleLeft className='text-4xl md:text-7xl rounded text-black hover:text-gray-500 border-2 border-gray-900' />
                    </button>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                        <div id="slider" className="h-[320px] flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                            </div>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                            </div>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                            </div>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                            </div>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                            </div>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                            </div>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                            </div>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                            </div>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                            </div>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                            </div>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                            </div>
                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                            </div>
                        </div>
                    </div>
                    <button onClick={goNext} aria-label="slide forward" className="absolute z-30 right-0 md:mr-10 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                        <FaAngleRight className='text-4xl md:text-7xl rounded text-black hover:text-gray-500 border-2 border-gray-900' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;