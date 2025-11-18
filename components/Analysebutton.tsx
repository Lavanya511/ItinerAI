"use client";

import { Brain, Loader2, Send } from "lucide-react";

export default function Analysebutton({ loading }: { loading: boolean }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="bg-amber-600 text-white text-lg ml-0 mt-2 md:mt-0 md:ml-2 p-4 rounded-full hover:bg-amber-700 transition-colors disabled:bg-gray-400"
    >
      <Loader2 className={loading ? 'animate-spin w-7 h-7 text-white' : 'hidden'}/>
      <Brain className={!loading ? 'w-7 h-7': 'hidden'} />
    </button>
  );
}
