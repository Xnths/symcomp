"use client";
import BCButton from "./bcbutton";

export const BCFaq = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center min-h-screen text-center bg-bc-caramel lg:min-w-[65rem] font-mono px-8 lg:flex-row">
            <div className="flex flex-col justify-center items-center">
                <div className="h-[100px]"></div>
                <h3 className="text-[3rem] text-bc-brown">FAQ</h3>
                <p className="md:w-[40rem] lg:w-[35rem] text-[0.9rem]">Ficou com mais alguma dúvida? Veja no FAQ no botão abaixo, ou envie um e-mail para mais informações! :)</p>
                <BCButton
                href="#"
                className="w-[13rem] justify-center items-center text-center bg-transparent text-bc-brown border-bc-brown shadow-[4px_4px_0_rgba(71,22,15,1)] my-4 p-0 hover:bg-bc-white hover:text-bc-brown"
                >
                ENVIAR E-MAIL
                </BCButton>
            </div>
            <div className="border-4 border-bc-brown w-full min-h-[25rem] mt-8 md:w-[40rem] p-6">
                <BCQuestionBox
                    number={1}
                    question="O que é o ByteCafé?"
                    answer="O ByteCafé é um evento de programação e tecnologia voltado para estudantes do ensino médio."/>
                <BCQuestionBox
                    number={2}
                    question="Quando será o próximo evento?"
                    answer="O próximo evento será em 2024."/>

            </div>
        </div>
    );
}

interface QuestionProps {
    number: number;
    question: string;
    answer: string;
}

import { useState } from "react";

const BCQuestionBox: React.FC<QuestionProps> = ({ number, question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div 
            className={`flex flex-col p-6 m-2 cursor-pointer ${isOpen ? 'bg-bc-black text-bc-white' : 'bg-transparent'}`} 
            onClick={toggleOpen}
        >
            <div className="flex justify-between items-center">
                <h4 className={`pl-4 text-[1.5rem] text-bc-brown font-bold max-w-[27rem] text-left ${isOpen ? 'text-bc-white' : 'text-bc-brown'}`}>Q{number} | {question}</h4>
                <span className={`transform transition-transform w-[2rem] text-[1.5rem] text-bc-brown ${isOpen ? 'rotate-180 text-bc-white' : ''}`}>▼</span>
            </div>
            {isOpen && <p className="text-[0.9rem] text-left pl-4 mt-2">{answer}</p>}
        </div>
    );
};