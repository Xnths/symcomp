import React from "react";
import "../styles/semana.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ItemEventInfo(props) {
  return (
    <div className="flex flex-col items-center space-y-2 pb-8">
      <div className="flex flex-row items-center">
        <CalendarMonthIcon
          id="presentation__eventinfos_calendaricon"
          className="presentation__icons"
        />
        <span className="text-5xl font-extrabold text-secondary">
          22 A 26 DE ABRIL
        </span>
      </div>
      <div className="flex flex-row items-center">
        <LocationOnIcon
          id="presentation__eventinfos_locationicon"
          className="presentation__icons"
        />
        <div className="flex flex-col">
          <span className="text-thin text-white text-3xl">
            AUDITÓRIO JACY MONTEIRO{" "}
          </span>
          <span className="text-thin text-white">
            R. do Matão, 1010 - Butantã, São Paulo - SP, 05508-090
          </span>
        </div>
      </div>
    </div>
  );
}
