"use client";
import React, { useEffect, useState } from "react";

const InteractivityExam = ({ list }) => {
  const [word, setWord] = useState("");
  const [newWord, setNewWord] = useState(""); // --> removing the "word" dependency to store the uppercase word

  useEffect(() => {
    setNewWord(word.toUpperCase()); // --> changing the word to uppercase
  }, [word]); // --> useEffect runs whenever word changes

  const handleNameChange = (event) => {
    setWord(event.target.value);
    getWord();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const getWord = () => {
    setWord(word + "t"); // --> I was confused here, to change the word to "t" lol
  };

  return (
    <div>
      {newWord.length > 3 && <div>{newWord}</div>}
      {""}
      {/* --> changed "word" to "newWord" so it'll display the uppercase */}
      <div className="">
        <form onSubmit={handleSubmit} className="">
          <div className="p-2 bg-green-200">
            <label className="px-2">Enter a word</label>
            <input
              type="text"
              placeholder="Enter a word"
              value={word}
              onChange={handleNameChange}
              className="text-center"
            />
          </div>
          <div className="flex item-center justify-center py-2">
            <button
              className="bg-red-100 p-2 rounded-md border border-red-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {word === "show list" && (
        <div>
          {list.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InteractivityExam;
