"use client"; // Required if using Next.js App Router

import { useState } from "react";

export default function DatePicker() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="w-full max-w-sm p-4 bg-amber-200 rounded-lg">
      <label className="block mb-2 text-gray-700 font-medium">
        Select Date Range
      </label>

      <div className="flex gap-2">
        {/* Start Date */}
        <input
          type="date"
          value={startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
            if (endDate && e.target.value > endDate) {
              setEndDate(e.target.value);
            }
          }}
          max={endDate || undefined}
          className="w-1/2 p-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

        {/* End Date */}
        <input
          type="date"
          value={endDate}
          onChange={(e) => {
            setEndDate(e.target.value);
            if (startDate && e.target.value < startDate) {
              setStartDate(e.target.value);
            }
          }}
          min={startDate || undefined}
          className="w-1/2 p-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>
    </div>
  );
}
