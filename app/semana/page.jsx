"use client"

import React from "react";
import Nav from "../components/nav";
import Presentation from "../components/presentation";
import Patrocinadores from "../components/patrocinadores";  
import About from "../components/about";
import ComoChegar from "../components/como-chegar";
import faqData from "../components/faq/FAQ-semana.json";
import Faq from "../components/faq/faq";
import Oferecimento from "../components/oferecimento";
import ScheduleNavWrapper from "../components/schedule-nav-wrapper";

export default function Semana() {
    return (
        <div className="semana">
            <Nav />
            <div id="inicio">
                <Presentation />
            </div>
            <div id="cronograma">
                <ScheduleNavWrapper />
            </div>
            <div id="patrocinadores">
                <Patrocinadores />
            </div>
            <div id="quem-somos">
                <About />
            </div>
            <div id="faq">
                <Faq items={faqData} />
            </div>
            <div id="como-chegar">
                <ComoChegar />
            </div>
            <Oferecimento />
        </div>
    )
}