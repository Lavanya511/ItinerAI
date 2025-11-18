"use client";

import React from "react";
import ReactMarkDown from "react-markdown";

export default function Hotels({ hotels }: { hotels: string }) {
  return (
    <div className="flex flex-col items-center justify-center">
      {hotels && (
        <div className="flex rounded-lg space-y-4 overflow-y-scroll flex-col h-[600px]">
        <div className="bg-white p-4 md:p-8 rounded shadow whitespace-pre-line leading-relaxed">
            <div className="prose prose-sm max-w-none text-gray-600">
                <ReactMarkDown>
                    {hotels}
                </ReactMarkDown>
            </div>
        </div>
        </div>
      )}
    </div>
  );
}