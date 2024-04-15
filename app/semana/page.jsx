"use client";

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
import ScheduleNav from "../components/schedule-nav";

const fakeSheetdata = [
  ["SEG", "09:00", "Alinhando Grandes Modelos de Linguagem (LLMs) a Valores e Políticas: Tecnologias e Desafios ", "Descrição da Palestra 1", "Beyonce", "Sobre o Palestrante 1"],
  ["SEG", "10:30", "Título da Palestra 2", "Descrição da Palestra 2", "Palestrante 2", "Sobre o Palestrante 2"],
  ["TER", "09:00", "Título da Palestra 3", "Descrição da Palestra 3", "Palestrante 3", "Sobre o Palestrante 3"],
  ["TER", "10:30", "Título da Palestra 4", "Descrição da Palestra 4", "Palestrante 4", "Sobre o Palestrante 4"],
  ["QUA", "09:00", "Título da Palestra 5", "Descrição da Palestra 5", "Palestrante 5", "Sobre o Palestrante 5"],
  ["QUA", "10:30", "Título da Palestra 6", "Descrição da Palestra 6", "Palestrante 6", "Sobre o Palestrante 6"],
  ["QUI", "09:00", "Título da Palestra 7", "Descrição da Palestra 7", "Palestrante 7", "Sobre o Palestrante 7"],
  ["QUI", "10:30", "Título da Palestra 8", "Descrição da Palestra 8", "Palestrante 8", "Sobre o Palestrante 8"],
  ["SEX", "09:00", "Título da Palestra 9", "Descrição da Palestra 9", "Palestrante 9", "Sobre o Palestrante 9"],
  ["SEX", "10:30", "Título da Palestra 10", "Descrição da Palestra 10", "Palestrante 10", "Sobre o Palestrante 10"]
];


export default function Semana() {
  return (
    <div>
      <div className="min-h-screen bg-primary">
        <Nav />
        <Presentation />
      </div>
      <div id="cronograma">
        <ScheduleNavWrapper />
      </div>
      {/* <div>
        <ScheduleNav sheetdata={fakeSheetdata}></ScheduleNav>
      </div> */}
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
  );
}
