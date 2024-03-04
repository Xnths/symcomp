"use client"

import React from "react";
import Nav from "../components/nav";
import ScheduleNav from "../components/schedule-nav";
import Presentation from "../components/presentation";
import Patrocinadores from "../components/patrocinadores";  
import About from "../components/about";
import Faq from "../components/faq";
import ComoChegar from "../components/como-chegar";

export default function Semana() {
    return (
        <div>
            <Nav />
            <div id="inicio">
                <Presentation />
            </div>
            <div id="cronograma">
                <h1 className="cronograma__title">CRONOGRAMA</h1>
                <ScheduleNav />
            </div>
            <div id="patrocinadores">
                <Patrocinadores />
            </div>
            <div id="quem-somos">
                <About />
            </div>
            <div id="faq">
                <Faq />
            </div>
            <div id="como-chegar">
                <ComoChegar />
            </div>
        </div>
    )
}