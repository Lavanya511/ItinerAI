import React from 'react'
import Form from 'next/form'
import DatePicker from './utils/DatePicker'
import Analysebutton from './Analysebutton'

function PromptBar2() {
return (
    <div className='flex justify-center px-2 md:px-4'>
        <Form className='flex flex-col items-center gap-2'>
            <input
                type='text'
                required
                name='destination'
                placeholder='Where to?'
                className='flex-grow p-4 w-full md:w-40  bg-white text-gray-400 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400'
            />
            <input
                type='date'
                name='start-date'
                placeholder='From'
                className='flex-grow p-4 w-full md:w-40 bg-white rounded-lg text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400'
            />
            <input
                type='date'
                name='end-date'
                placeholder='To'
                className='flex-grow p-4 w-full md:w-40  bg-white rounded-lg text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400'
            />
            <select
                id="budget"
                name="budget"
                required
                className="flex-grow p-4 w-full md:w-40 bg-white rounded-lg text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none"
            >
                <option value="">Select Budget</option>
                <option value="low">Economy</option>
                <option value="standard">Standard</option>
                <option value="luxury">Luxury</option>
            </select>

            <input
                type='text'
                name='prompt'
                placeholder='Interests (like history, food, etc.))'
                required
                className='flex-grow p-4 w-full md:w-60  bg-white rounded-lg text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400'
            />
            <Analysebutton/>
        </Form>

    </div>
)
}

export default PromptBar2