"use client"

import { useState } from "react"
import DownArrow from "../svgs/downArrow";

export default function FaqItem({ title, children }) {

    const [ isTopicOpen, setIsTopicOpen ] = useState(false);

    const openTopic = () => {
        setIsTopicOpen(!isTopicOpen)
    }

    return (
        <div className="flex flex-col gap-3">
            <div className={`flex items-center justify-between py-5 px-10 font-bold text-black border-[3px] border-black ${isTopicOpen ? 'bg-pink' : 'bg-yellow'} hover:cursor-pointer button-shadow transition-all duration-500`}  onClick={openTopic}>
                <div className="flex flex-1">
                    <h1 className={`md:text-xl transition duration-500 ease-in-out ${isTopicOpen ? 'text-white' : 'text-black'}`}>
                        {title}
                    </h1>
                </div>
                <DownArrow className={`flex transition duration-500 ease-in-out ${isTopicOpen ? 'rotate-180' : ''}`} fill={isTopicOpen ? '#fff' : '#000'}/>
            </div>
            <div className={`bg-white border-black transition-all ease-in-out overflow-hidden duration-300 ${isTopicOpen ? 'max-h-96 button-shadow border-[3px]' : 'max-h-0 border-0'} `}>
                <p className="p-5 md:text-xl">
                    {children}
                </p>
            </div>
        </div>
    )
}