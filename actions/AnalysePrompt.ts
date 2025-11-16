"use server";

import { redirect } from "next/navigation";

export async function AnalysePrompt(formdata: FormData) {

    const userDestination = formdata.get("destination")?.toString();
    const userStartDate = formdata.get("start-date")?.toString();
    const userEndDate = formdata.get("end-date")?.toString();
    const userBudget = formdata.get("budget")?.toString();
    const userInterests = formdata.get("prompt")?.toString();

    if (!userDestination || !userBudget || !userInterests) return null;

    redirect(`/ai`);

}

// const prompt = `Create a detailed travel itinerary for a trip to ${userDestination} from ${userStartDate} to ${userEndDate}. The budget for the trip is ${userBudget}, and the traveler is interested in ${userInterests}. Please include daily activities, dining options, and any must-see attractions. Format the itinerary in a clear and organized manner.`;

// const response = await fetch("https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
//     },
//     body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [
//             {
//                 role: "user",
//                 content: prompt,
//             },
//         ],
//         max_tokens: 1000,
//         temperature: 0.7,
//     }),
// });

// const data = await response.json();
// const itinerary = data.choices[0].message.content;

// return itinerary;