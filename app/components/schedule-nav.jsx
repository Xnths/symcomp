import React, { useState } from "react";
import ItemNav from "../atomic/item-nav";
import ScheduleNavItem from "../atomic/schedule-nav-item";
import ScheduleDetailsItem from "../atomic/schedule-details-item";
import { CgCoffee } from "react-icons/cg"
import NewScheduleBox from "../atomic/new-schedule-box";

export default function ScheduleNav ({ sheetdata }) {
    const [activeDay, setActiveDay] = useState('SEG');

    const handleClick = (day) => {
        setActiveDay(day);
    }

    const days = [
        { date: "22/04", dayWeek: "SEG" },
        { date: "23/04", dayWeek: "TER" },
        { date: "24/04", dayWeek: "QUA" },
        { date: "25/04", dayWeek: "QUI" },
        { date: "26/04", dayWeek: "SEX" },
    ];

    return (
        <div className="schedule__container">
            <h1 className="schedule__title"><p className="titles">CRONOGRAMA</p></h1>
            <div className="schedule">
                {days.map((day) => (
                    <ScheduleNavItem 
                        key={day.date} 
                        date={day.date} 
                        dayWeek={day.dayWeek} 
                        onClick={() => handleClick(day.dayWeek)} 
                        selected={activeDay === day.dayWeek} 
                    />
                ))}
            </div>
            <div className="flex flex-col gap-5 items-center schedule-details__container w-3/5">
                {sheetdata &&

                    sheetdata.map((item, index) => {
                        if (item[0] === activeDay && item[2] != "-") {
                            return (
                                // Carrega as palestras do dia!
                                <div>
                                    <NewScheduleBox
                                        key={index}
                                        time={item[1]}
                                        theme="Palestra"
                                        description={item[3]}
                                        title={item[2]}
                                        lecturer={item[4]}
                                        aboutLecturer={item[5]}
                                        ImgPath={item[4]}
                                    />
                                </div>
                            )
                        }
                    })
                }
                <div className="flex flex-col items-center w-screen px-4 ">
                    <div className="flex flex-row items-center justify-center space-x-4 lg:w-[600px] w-full border-4 border__shadow px-8 py-4 text-left bg-primary">
                        <CgCoffee size={64} className="text-white" />
                        <span className="text-6xl font-bold text-center text-white">COFFEE BREAK</span>
                    </div>
                </div>
            </div>
        </div>
    )
}