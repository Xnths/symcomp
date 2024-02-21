import React, { useState } from "react";
import ItemNav from "../atomic/item-nav";

export default function Nav () {
    const [inicio, setInicio] = useState(true);
    const [cronograma, setCronograma] = useState(false);
    const [patrocinadores, setPatrocinadores] = useState(false);
    const [quemSomos, setQuemSomos] = useState(false);
    const [faq, setFaq] = useState(false);
    const [comoChegar, setComoChegar] = useState(false);

    const handleClickInicio = () => {
        setInicio(true);
        setCronograma(false);
        setPatrocinadores(false);
        setQuemSomos(false);
        setFaq(false);
        setComoChegar(false);
    }

    const handleClickCronograma = () => {
        setInicio(false);
        setCronograma(true);
        setPatrocinadores(false);
        setQuemSomos(false);
        setFaq(false);
        setComoChegar(false);
    }

    const handleClickPatrocinadores = () => {
        setInicio(false);
        setCronograma(false);
        setPatrocinadores(true);
        setQuemSomos(false);
        setFaq(false);
        setComoChegar(false);
    }

    const handleClickQuemSomos = () => {
        setInicio(false);
        setCronograma(false);
        setPatrocinadores(false);
        setQuemSomos(true);
        setFaq(false);
        setComoChegar(false);
    }

    const handleClickFaq = () => {
        setInicio(false);
        setCronograma(false);
        setPatrocinadores(false);
        setQuemSomos(false);
        setFaq(true);
        setComoChegar(false);
    }

    const handleClickComoChegar = () => {
        setInicio(false);
        setCronograma(false);
        setPatrocinadores(false);
        setQuemSomos(false);
        setFaq(false);
        setComoChegar(true);
    }

    return (
        <div className="nav">
            <ItemNav navigateTo="inicio" innerText="início" selected={inicio} onClick={handleClickInicio} />
            <ItemNav navigateTo="cronograma" innerText="cronograma" selected={cronograma} onClick={handleClickCronograma} />
            <ItemNav navigateTo="patrocinadores" innerText="Patrocinadores" selected={patrocinadores} onClick={handleClickPatrocinadores} />
            <ItemNav navigateTo="quem-somos" innerText="Quem Somos?" selected={quemSomos} onClick={handleClickQuemSomos} />
            <ItemNav navigateTo="faq" innerText="FAQ" selected={faq} onClick={handleClickFaq} />
            <ItemNav navigateTo="como-chegar" innerText="Como Chegar?" selected={comoChegar} onClick={handleClickComoChegar} />
        </div>
    )
}