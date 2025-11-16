import PromptBar from '@/components/PromptBar'
import PromptBar2 from '@/components/PromptBar2'
import React from 'react'

function ResponsePage() {
  return (
    <div className='xl:container mx-auto px-4 md:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            {/* left */}
            <div className='order-2 md:order-1 flex flex-col bg-white gap-4 md:border-r md:border-gray-200 p-6 md:p-12 h-screen'>
                <PromptBar2/>
            </div>

            {/* right */}
            <div className='order-1 md:order-2 flex flex-col bg-white gap-4 p-6 md:p-12 lg:sticky lg:top-20'>
                ai res
            </div>

        </div>
    </div>
  )
}

export default ResponsePage