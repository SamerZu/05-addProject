import React from "react";
import noProjects from "../assets/no-projects.png";

export default function NoProject({ onNewProjektClick }) {
  return (
    <div className="flex flex-col items-center gap-2 w-3/4 p-6 pt-14 rounded-lg  text-center">
      <img
        className=" h-24 w-24 object-contain"
        src={noProjects}
        alt="No project"
      />
      <h2 className="text-xl mb-3 font-semibold text-gray-800">
        Kein Projekt ausgewählt
      </h2>
      <p className="text-gray-700 mb-6">
        Wähle ein Projekt aus oder erstelle ein neues
      </p>
      <button
        onClick={onNewProjektClick}
        className="bg-gray-700 py-2 px-5 rounded-lg text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        Neues Projekt erstellen
      </button>
    </div>
  );
}
