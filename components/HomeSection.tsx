import React from 'react'
import AgentIcon from './AgentIcon'
import Image from 'next/image'
import { features } from './utils/Features'
import PromptBar from './PromptBar'


export default function HomeSection() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
        {/* main */}
        <section className='py-20 w-full bg-from-white to-rose-50 bg-gradient-to-b'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center justify-center text-center gap-10 mb-8 px-4'>
                    <Image
                        src='/luggage.png'
                        alt='Image'
                        width={200}
                        height={150}
                        className='mt-4'
                    />
                
                    <h1 className='text-3xl md:text-6xl font-bold max-w-6xl text-gray-900 mb-6'>
                      Personalise Your Travel With {" "}
                      <span className='bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent'>
                        Itiner<span className='text-amber-300'>ai</span>
                      </span>
                    </h1>

                    <p className='text-md md:text-xl text-gray-700 max-w-4xl mx-auto mb-8'>
                    Make a perfect itinerary with Itiner<span className='italic'>ai</span> - your personal travel assistant that crafts customized itineraries, suggests hidden gems, and ensures a seamless travel experience from start to finish.                    </p>


                    {/* Prompt Section */}

                    <PromptBar/>

                </div>
            </div>

        </section>


        {/* features */}
        <section className='py-20 bg-white w-full'>
            <div className='container mx-auto px-4 max-w-6xl'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-12 text-gray-900'>Why Choose Travel AI?</h2>
                </div>
                
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {features.map((feature, index) => {
                    const IconShape = feature.iconShape;

                    return (
                    <div key={index} className='flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg duration-300'>
                        <div className={`flex justify-center items-center p-2 rounded-xl mb-4 ${feature.iconBgColor}`}>
                            <IconShape className={`w-12 h-12 ${feature.iconColor}`} />
                        </div>

                        <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
    
                        <p className='text-gray-600'>{feature.description}</p>
                    </div>
                    );
                  })}
                </div>

            </div>
        </section>


        {/* footer */}
        <section>
            
        </section>

    </div>
  )
}
