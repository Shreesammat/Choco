import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetUserState } from "../redux/userSlice";
import { RootState } from "../redux/store";

export interface Note {
  title: string;
  content: string;
  colour: string;
  isImportant: boolean;
  refUrls?: string[];
}

const Home: React.FC = () => {
  const [note, setNote] = useState<Note>({
    title: "",
    content: "",
    colour: "#ffffff",
    isImportant: false,
    refUrls: ["https://example.com"],
  });

  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUrl = () => {
    setNote((prev) => ({
      ...prev,
      refUrls: [...(prev.refUrls || []), ""],
    }));
  };

  const handleRemoveUrl = (index: number) => {
    setNote((prev) => ({
      ...prev,
      refUrls: prev.refUrls?.filter((_, i) => i !== index),
    }));
  };

  const handleUrlChange = (index: number, value: string) => {
    setNote((prev) => ({
      ...prev,
      refUrls: prev.refUrls?.map((url, i) => (i === index ? value : url)),
    }));
  };

  const handleSave = () => {
    console.log("Saved Note:", note);
  };

  const handleLogout = () => {
    dispatch(resetUserState());
  };
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <div className="w-full h-full flex flex-col justify-between items-center bg-gradient-to-br from-gray-900 to-gray-700 text-white shadow-xl">
      <nav className="flex justify-between items-center px-4 py-2 w-full bg-gray-800 shadow-md border-b border-gray-600">
        <div className=" bg-gray-700">
          <p>Hii, {user?.username}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gray-700 rounded-full overflow-hidden border-2 border-gray-500 flex gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/47.jpg"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={handleLogout}
            className="text-gray-400 hover:text-white transition duration-200 text-lg font-semibold"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="flex-grow flex flex-col gap-4 items-center justify-center font-bold text-gray-300 w-full px-6">
        <input
          name="title"
          type="text"
          placeholder="Enter note title"
          value={note.title}
          onChange={handleChange}
          className="w-full p-3 text-lg text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <textarea
          name="content"
          placeholder="Enter note content"
          value={note.content}
          onChange={handleChange}
          className="w-full p-3 text-lg text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 min-h-36"
        ></textarea>

        <div className="w-full bg-gray-800 rounded-lg p-3 max-h-32 overflow-auto border border-gray-600">
          <p className="text-sm text-gray-400 mb-2">Reference URLs:</p>
          {note.refUrls?.map((url, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={url}
                onChange={(e) => handleUrlChange(index, e.target.value)}
                className="flex-1 p-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 break-all max-w-full"
                readOnly={index === 0}
              />
              {index > 0 && (
                <button
                  onClick={() => handleRemoveUrl(index)}
                  className="text-red-400 hover:text-red-500 text-sm font-semibold"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            onClick={handleAddUrl}
            className="mt-2 text-blue-400 hover:text-blue-500 text-sm font-semibold"
          >
            + Add another URL
          </button>
        </div>
      </div>

      <div className="w-full px-6 pb-6">
        <button
          onClick={handleSave}
          className="w-full py-3 text-lg font-semibold bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Home;
