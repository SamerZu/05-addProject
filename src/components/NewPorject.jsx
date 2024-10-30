import React from "react";
import Input from "../Layout/Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const titel = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave() {
    const enteredTitel = titel.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitel === "" ||
      enteredDescription === "" ||
      enteredDate === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      titel: enteredTitel,
      description: enteredDescription,
      date: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-2xl mb-3 font-bold text-gray-800">
          Ungültige Eingabe
        </h2>
        <p className="text-gray-700 mb-8">BITTE alle Felder ausfühlen</p>
      </Modal>

      <div className="flex flex-col gap-2 w-2/5 p-8">
        <div className="text-right">
          <button onClick={onCancel} className="hover:text-red-400">
            Abbrechen
          </button>
          <button
            onClick={handleSave}
            className="bg-gray-600 py-3 px-3 ml-2 rounded-lg text-white hover:bg-gray-500"
          >
            Speichern
          </button>
        </div>
        <Input ref={titel} label="Titel" texArea={false} />
        <Input ref={description} label="Beschreibung" texArea />
        <Input ref={date} label="Datum" texArea={false} type="date" />
      </div>
    </>
  );
}
