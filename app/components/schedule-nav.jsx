import React, { useState } from "react";
import ItemNav from "../atomic/item-nav";
import ScheduleNavItem from "../atomic/schedule-nav-item";

export default function ScheduleNav () {
    const [seg, setSeg] = useState(true);
    const [ter, setTer] = useState(false);
    const [qua, setQua] = useState(false);
    const [qui, setQui] = useState(false);
    const [sex, setSex] = useState(false);

    const handleClickSeg = () => {
        setSeg(true);
        setTer(false);
        setQua(false);
        setQui(false);
        setSex(false);
    }

    const handleClickTer = () => {
        setSeg(false);
        setTer(true);
        setQua(false);
        setQui(false);
        setSex(false);
    }

    const handleClickQua = () => {
        setSeg(false);
        setTer(false);
        setQua(true);
        setQui(false);
        setSex(false);
    }

    const handleClickQui = () => {
        setSeg(false);
        setTer(false);
        setQua(false);
        setQui(true);
        setSex(false);
    }

    const handleClickSex = () => {
        setSeg(false);
        setTer(false);
        setQua(false);
        setQui(false);
        setSex(true);
    }

    return (
        <div className="nav">
            <ScheduleNavItem date="22/04" dayWeek="SEG" onClick={handleClickSeg} selected={seg} />
            <ScheduleNavItem date="23/04" dayWeek="TER" onClick={handleClickTer} selected={ter} />
            <ScheduleNavItem date="24/04" dayWeek="QUA" onClick={handleClickQua} selected={qua} />
            <ScheduleNavItem date="25/04" dayWeek="QUI" onClick={handleClickQui} selected={qui} />
            <ScheduleNavItem date="26/04" dayWeek="SEX" onClick={handleClickSex} selected={sex} />
        </div>
    )
}