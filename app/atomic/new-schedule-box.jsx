"use client";
import React from "react";
import DownArrow from "../components/svgs/downArrow";
import { useState } from "react";

const NewScheduleBox = (props) => {
  const [isTopicOpen, setIsTopicOpen] = useState(false);

  const openTopic = () => {
    setIsTopicOpen(!isTopicOpen);
  };
  return (
    <div id="newschedule__container">
      <div className="newschedule__schedulebox">
        {props.ImgPath && (
          <img
            src={`palestrantes/${props.ImgPath}`}
            alt={`Foto de´ ${props.lecturer}`}
          />
        )}
        <div id="newschedule__fulltitle">
          <div id="newschedule__title">{props.title}</div>
          <div id="newschedule__lecturer">{props.lecturer}</div>
        </div>
        <div
          className="newschedule__buttons"
          id="newschedule__saibamais"
          onClick={openTopic}
        >
          <p>SAIBA MAIS</p>
          <DownArrow
            className={`flex transition duration-500 ease-in-out ${
              isTopicOpen ? "rotate-180" : ""
            } pl-2`}
            fill={isTopicOpen ? "#fff" : "#fff"}
          />
        </div>
        <div className="newschedule__buttons" id="newschedule__time">
          {props.time}
        </div>
      </div>
      {isTopicOpen && (
        <div className="newschedule__schedulebox" id="newschedule__about">
          <div>
            <p>Descrição Palestra:</p> {props.description}
          </div>
          <div>
            <p>Descrição Palestrante:</p> {props.aboutLecturer}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewScheduleBox;
