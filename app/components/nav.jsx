import React from "react";
import ItemNav from "../atomic/item-nav";

export default function Nav () {
    return (
        <div className="mx-4 my-3">
            <ItemNav navigateTo="inicio" innerText="início" />
            <ItemNav navigateTo="cronograma" innerText="cronograma" />
            <ItemNav navigateTo="patrocinadores" innerText="Patrocinadores" />
            <ItemNav navigateTo="quem-somos" innerText="quem Somos?" />
            <ItemNav navigateTo="faq" innerText="FAQ" />
            <ItemNav navigateTo="como-chegar" innerText="Como Chegar" />
        </div>
    )
}