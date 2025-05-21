'use client'

import BCButton from './bcbutton'

export const BCFaq = () => {
  return (
    <div
      id="bcfaq"
      className="w-full flex flex-col justify-center items-center min-h-screen text-center bg-bc-caramel lg:min-w-[65rem] font-mono px-8 lg:flex-row"
    >
      <div className="flex flex-col justify-center items-center lg:w-[28rem]">
        <div className="h-[100px] lg:hidden"></div>
        <h3 className="text-[3rem] text-bc-brow">FAQ</h3>
        <p className="md:w-[40rem] text-[0.9rem] lg:w-[25rem] lg:py-[1rem]">
          Ficou com mais alguma dúvida? Veja no FAQ no botão abaixo, ou envie um e-mail
          para mais informações! :)
        </p>
        <BCButton
          href="mailto:semanadacomputacao@ime.usp.br"
          className="w-[13rem] justify-center items-center text-center bg-transparent text-bc-brown border-bc-brown shadow-[4px_4px_0_rgba(71,22,15,1)] my-4 p-0 hover:bg-bc-white hover:text-bc-brown"
        >
          ENVIAR E-MAIL
        </BCButton>
      </div>
      <div className="border-4 border-bc-brown w-full h-[25rem] mt-8 md:w-[40rem] md:p-6 overflow-y-auto lg:w-[37rem]">
        <BCQuestionBox
          number={1}
          question="O que é o ByteCafé?"
          answer="O ByteCafé é um evento de programação e tecnologia voltado para estudantes do ensino médio conhecerem a USP e o curso de Ciência da Computação."
        />
        <BCQuestionBox
          number={2}
          question="Como posso participar?"
          answer="Para participar do enveto basta inscrever sua escola no formulário de participação e esperar o contato de um dos nossos organizadores. "
        />
        <BCQuestionBox
          number={3}
          question="Quanto custa para participar do evento?"
          answer="No geral o evento é patrocinado por ex-alunos, mas o custo por aluno é de 20 reais."
        />
      </div>
    </div>
  )
}

interface QuestionProps {
  number: number
  question: string
  answer: string
}

import { useState } from 'react'

const BCQuestionBox: React.FC<QuestionProps> = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`flex flex-col p-6 m-[1rem] cursor-pointer ${isOpen ? 'bg-bc-black text-bc-white' : 'bg-transparent'}`}
      onClick={toggleOpen}
    >
      <div className="flex justify-between items-center">
        <h4
          className={`md:pl-4 md:text-[1.3rem] text-bc-brown font-bold max-w-[27rem] text-left ${isOpen ? 'text-bc-white' : 'text-bc-brown'}`}
        >
          Q{number} | {question}
        </h4>
        <span
          className={`transform transition-transform w-[2rem] text-[1.5rem] text-bc-brown ${isOpen ? 'rotate-180 text-bc-white' : ''}`}
        >
          ▼
        </span>
      </div>
      {isOpen && <p className="text-[0.9rem] text-left md:pl-4 mt-2">{answer}</p>}
    </div>
  )
}
