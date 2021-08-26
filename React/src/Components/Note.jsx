import React, { useEffect, useState } from "react";
import "./Note.css";
const Note = () => {
  const [notes, setNotes] = useState([
    { name: "Hessam", text: "note 1" },
    { name: "ali", text: "note 2" },
    { name: "akbar", text: "note 3" },
    { name: "hossein", text: "note 4" },
    { name: "mansour", text: "note 5" },
  ]);

  const checkNotes = () => (notes.length === 0 ? "no notes" : notes[0].name);

  const DynamicClass = () => {
    let classes = "font-size ";
    classes += notes.length === 0 ? "red" : "green";
    return classes;
  };

  const changeValue = () => {
    setNotes((prevNote) => {
      prevNote[0].name = "SS";
      console.log("HERE! =>>> ", prevNote);
      return prevNote;
    });
  };

  useEffect(() => {}, [notes]);

  return (
    <>
      <div className={DynamicClass()}>
        <h1>{checkNotes()}</h1>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              {note.name} : {note.text}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => changeValue()}>Change</button>
    </>
  );
};

export default Note;
