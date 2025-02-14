import { useState } from "react";

const Popup = () => {
  const [note, setNote] = useState("");
    const saveNote = () => {
        console.log("Note saved:", note);
    };
  return (
    <div className="p-4 w-64">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full h-20 p-2 border"
        placeholder="Write your note..."
      />
      <button onClick={saveNote} className="mt-2 p-2 bg-blue-500 text-white">
        Save Note
      </button>
    </div>
  );
};

export default Popup;
