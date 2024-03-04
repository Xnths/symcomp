import React from "react";

export default function ComoChegar () {
    return (
        <div className="como-chegar">
            <div className="cronograma__title">
                Como chegar?
            </div>
            <iframe className="como-chegar__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2516890350726!2d-46.73441312381137!3d-23.55940237880111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5614445ea63f%3A0x81bb971c3a8f0fcf!2sInstituto%20de%20Matem%C3%A1tica%20e%20Estat%C3%ADstica%20-%20IME%2FUSP!5e0!3m2!1sen!2sbr!4v1709562021168!5m2!1sen!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="about__text-container">
                <div className="about__text">
                    Ao chegar no Instituto de Matemática e Estatística, basta acessar o Bloco B, onde você encontrará o <strong>Auditório Jacy Monteiro</strong>. Para mais informações, basta perguntar aos seguranças da recepção.
                </div>
            </div>
        </div>
    )
}