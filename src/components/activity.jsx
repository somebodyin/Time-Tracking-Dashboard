import React from 'react'
import { ReactComponent as MoreIcon } from "../assets/images/icon-ellipsis.svg";
import { timeframeUnit } from '../lib/data';

export default function Activity({ data, activeTimeframe }) {
    const backgroundColor = {backgroundColor: `${data.color}`};
    const timeframe = data.timeframes[activeTimeframe];
    const timeUnit = timeframeUnit[activeTimeframe];

    return (
        <div className="group relative flex flex-col justify-end w-full h-[15.31rem]  rounded-2xl overflow-hidden hover:cursor-pointer md:w-[15.94rem] md:h-[15.31rem]">
            <div className="flex flex-col w-full h-[11rem] bg-darkBlue rounded-2xl p-[1.875rem] gap-7 group-hover:bg-activeBlue z-10 transition duration-300 md:h-[12.5rem]">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-lg">
                        {data.title}
                    </p>
                    <MoreIcon className="text-[#BBC0FF] hover:text-white"/>
                </div>
                <div className="flex flex-row font-light justify-between items-center gap-3 md:flex-col md:items-start">
                    <p className="text-[3.5rem] leading-[3rem]">
                        {timeframe.current}hrs
                    </p>
                    <p className="text-paleBlue">
                        {timeUnit} - {timeframe.previous}hrs
                    </p>
                </div>
            </div>
            <div className="w-full h-20 absolute top-0 right-0 group-hover:scale-110 transition duration-300" style={backgroundColor}>
                <p className="absolute -top-3 right-4">
                    {data.icon}
                </p>
            </div>
        </div>
    );
}
