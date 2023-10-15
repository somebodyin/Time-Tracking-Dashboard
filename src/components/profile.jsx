import React from 'react';
import Avatar from "../assets/images/image-jeremy.png";
import { buttons } from '../lib/data';
import clsx from 'clsx';

export default function Profile({ activeTimeframe, setActiveTimeframe }) {
  return (
    <div className="flex flex-col bg-darkBlue rounded-2xl md:w-[15.94rem] md:h-[32.5rem]">
        <div className="flex flex-row gap-5 w-full h-auto px-6 py-8 bg-customBlue rounded-2xl md:pl-[1.875rem] md:pt-8 md:flex-col md:h-[22.19rem] md:gap-9">
            <img className="h-[4.5rem] w-[4.5rem] border-white border-[0.20rem] rounded-full md:h-[5.31rem] md:w-[5.31rem]"
                src={Avatar}
                alt="Jeremy avatar"/>
            <div>
                <p className="text-paleBlue">Report for</p>
                <h1 className="text-3xl md:text-[2.55rem] font-light leading-[3rem]">Jeremy Robson</h1>
            </div>
        </div>

        <div className="flex flex-row h-[4.5rem] w-full justify-around md:gap-3.5 md:flex-col md:h-[10.31rem] md:items-start md:pl-[1.875rem] md:pt-[1.375rem] md:justify-start">
            {buttons.map((button) => (
                <button
                    className={clsx("text-lg text-paleBlue/[.6] hover:text-white", {
                        "text-white": activeTimeframe === button.id,
                    })}
                    id={button.id}
                    onClick={() => setActiveTimeframe(button.id)}
                >{button.name}</button>
            ))}
        </div>
    </div>
  )
}