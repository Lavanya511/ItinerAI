"use client";

import { useFormStatus } from "react-dom";

function Analysebutton() {

    const { pending } = useFormStatus()

  return (
    <button
        type='submit'
        disabled={pending}
        className='bg-amber-600 text-white py-4 px-6 rounded-lg hover:bg-emerald-600 transition-colors'
    >
        {pending ? "Planning...": "Plan"}
    </button>
  )
}

export default Analysebutton