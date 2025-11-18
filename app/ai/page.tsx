"use client";

import React, { useEffect, useState } from "react";
import PromptBar from '@/components/PromptBar';
import Footer from "@/components/Footer";
import Hotels from "@/components/Hotels";
import Itinerary from "@/components/Itinerary";

export default function ResponsePage() {
  const [itinerary, setItinerary] = useState("");
  const [hotels, setHotels] = useState("");

  return (
    <div className='xl:container mx-auto min-h-screen min-w-screen flex flex-col'>

        <div className={itinerary ? 'flex justify-center items-center pt-8 mb:pt-4 pb-8 mb:pb-2' : 'flex h-200 md:h-150 justify-center items-center'}>
            <PromptBar
            onResult={(itinerary, hotels) => {
                setItinerary(itinerary);
                setHotels(hotels);
            }}
            />
        </div>
        
        <div className={`p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1200 ease-out 
                ${itinerary ? "opacity-100" : "opacity-0"}`}>
            <div className='order-2 md:order-1 flex flex-col shadow-lg border border-gray-200 p-4 md:p-8 lg:sticky lg:top-20 rounded-lg'>
            <Hotels hotels={hotels} />
            </div>

            <div className='order-1 md:order-2 flex flex-col shadow-lg border border-gray-100 p-4 md:p-8 lg:sticky lg:top-20 rounded-lg'>
            <Itinerary itinerary={itinerary} />
            </div>
        </div>

        <div className="sticky top-full text-center">
            <Footer/>
        </div>

    </div>
  );
}
