"use client";

import React, { useState } from "react";
import Analysebutton from "./Analysebutton";

export default function PromptBar({
  onResult,
}: {
  onResult: (itinerary: string, hotels: string) => void;
}) {
  const [loading, setLoading] = useState(false);

  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");
  const [interests, setInterests] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData(e.currentTarget);
  
    const destination = formData.get("destination") as string;
    const start = formData.get("start-date") as string;
    const end = formData.get("end-date") as string;
    const budget = formData.get("budget") as string;
    const interests = formData.get("prompt") as string;
  
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destination,
        start,
        end,
        budget,
        interests,
      }),
    });
  
    const json = await res.json();
    onResult(json.itinerary, json.hotels); 
    setLoading(false);
  }
  

  return (
    <div className="flex flex-col justify-center shadow-lg rounded-xl md:rounded-full items-center px-8 py-8 md:px-6 md:py-4 border border-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-2"
      >
        <input
          type="text"
          required
          name="destination"
          placeholder="Where to?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="flex-grow p-4 w-full md:w-40 bg-white text-gray-400 rounded-xl md:rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <input
          type="date"
          name="start-date"
          required
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="flex-grow p-4 w-full md:w-40 bg-white rounded-xl md:rounded-full text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <input
          type="date"
          name="end-date"
          required
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="flex-grow p-4 w-full md:w-40 bg-white rounded-xl md:rounded-full text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <select
          id="budget"
          name="budget"
          required
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="flex-grow p-4 w-full md:w-40 bg-white rounded-xl md:rounded-full text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none"
        >
          <option value="">Select Budget</option>
          <option value="low">Economy</option>
          <option value="standard">Standard</option>
          <option value="luxury">Luxury</option>
        </select>

        <input
          type="text"
          name="prompt"
          placeholder="Interests (like history, food, etc.)"
          required
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          className="flex-grow p-4 w-full md:w-72 bg-white rounded-xl md:rounded-full text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        <Analysebutton loading={loading} />
      </form>
    </div>
  );
}
