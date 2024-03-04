import React from "react";

export default function About () { 
    return (
        <div className="about">
            <h1 className="cronograma__title">QUEM SOMOS?</h1>
            <img className="about__img--members" src="/pictures/members.jpg" />
            <div class="about__text-container">
                <p className="about__text">A Semana da Computação é uma celebração imperdível, idealizada e realizada por estudantes, tanto para aqueles já imersos no mundo da computação quanto para os que desejam explorá-lo. Desde o seu lançamento em 2009, estudantes do BCC se unem para iniciar os preparativos desse evento logo no início do ano, mergulhando em meses de meticulosa organização até a sua realização. O resultado desse esforço é uma semana repleta de palestras envolventes, abordando uma ampla gama de tópicos computacionais, proporcionando um ambiente estimulante para interagir com colegas e profissionais da área, além de momentos de descontração nos nossos tão aguardados coffee-breaks! Venha participar dessa experiência enriquecedora e mergulhar no universo fascinante da computação!</p>
            </div>
            <div className="patrocinadores_button">
                <a href="#" target="_blank">
                    <button>QUERO PARTICIPAR!</button>
                </a>    
            </div>
        </div>
    )
}