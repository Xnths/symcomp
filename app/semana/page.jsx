"use client"

import React from "react";
import Nav from "../components/nav";
import ScheduleNav from "../components/schedule-nav";
import Presentation from "../components/presentation";
import Patrocinadores from "../components/patrocinadores";  
export default function Semana() {
    return (
        <div>
            <Nav />
            <Presentation />
            <ScheduleNav />
            <Patrocinadores />
        </div>
    )
}