"use client";
import React, { useState } from "react";

const APICallExam = () => {
  const passCode = "ehen2rfow";
  const url = `https://webdev2-class-demo.vercel.app/api/sampleReqs/${passCode}`;
  const [secretCode, setSecretCode] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSecretCode(data.secretCode);
        setError(null);
      })
      .catch((error) => {
        console.error("Fetching data gone wrong:", error);
        setError(
          "The number you are calling is not available or out of coverage data. Please try again later."
        );
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          className="bg-red-100 p-2 rounded-md border border-red-500"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {error && (
        <div className="mt-4 text-center text-red-600">
          <p>{error}</p>
        </div>
      )}
      {secretCode && (
        <div className="mt-4 text-center">
          <p className="font-semibold">Secret Code:</p>
          <p>{secretCode}</p>
        </div>
      )}
    </div>
  );
};

export default APICallExam;
