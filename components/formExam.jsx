"use client";
import React, { useEffect, useState } from "react";

const FormExam = () => {
  const [firstName, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    // --> I added a useEffect to change the 1st letter of the word to capital
    const capFullName = fullName.charAt(0).toUpperCase() + fullName.slice(1); // --> .slice(1) is to preserve the rest of the og string
    setFullName(capFullName);
  }, [fullName]); // --> added "fullName" dependency to the array

  const handleChange1 = (event) => {
    setName(event.target.value);
  };

  const handleChange2 = (event) => {
    setSurname(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // --> I added this to stop it from reloading the page
    const newFullName = `${firstName} ${surName}`;
    setFullName(newFullName);
    console.log("name: ", firstName, surName);
  };

  return (
    <div>
      {fullName && (
        <div className="bg-blue-200 border border-blue-600 w-fit p-2 m-2 rounded-md">
          Name is: {fullName}
        </div>
      )}
      <div className="">
        <form onSubmit={handleSubmit} className="">
          <div className="p-2 bg-blue-100">
            <label className="px-2">Enter your firstname</label>
            <input
              type="text"
              placeholder="Enter your firstname"
              value={firstName}
              onChange={handleChange1}
              className="text-center"
            />
          </div>
          <div className="p-2 bg-blue-100">
            <label className="px-2">Enter your Surname</label>
            <input
              type="text"
              placeholder="Enter you surname"
              value={surName}
              onChange={handleChange2}
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
    </div>
  );
};

export default FormExam;
