import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";

export async function POST(req: Request) {
  const body = await req.json();

  const { destination, start, end, budget, interests } = body;

  const prompt = `
you are a humble and smart travel agent. Create a clean, well-formatted travel itinerary.

Destination: ${destination}
Dates: ${start} to ${end}
Budget: ${budget}
Interests: ${interests}

Return a structured itinerary with:
- very very big title with 'Itinerary for [destination]' in sentence case
- a very short heart-touching message about the destination
- Date in Day, Date Month (in words) format
- Daily activities - morning, afternoon, evening
- Budget summary in the final, with bullets and no table grid
- Use words like database instead of cache to make it more easy to understand. Format for notion.`;

const prompt_stay = `
you are a humble and smart travel agent. Create a clean, well-formatted travel stay plan for

Destination: ${destination}
Dates: ${start} to ${end}
Budget: ${budget}
Interests: ${interests}

Return a list of hotels as per budget:
- very very big title "Stay in [destination]" in sentence case
- a very short heart-touching message on comfortable stay
- give list of 5 hotels with name, rating out of 5, price per night, and a very short description
- format as bullets and not table grid
- Use words like database instead of cache to make it more easy to understand. Format for notion.`;


  const result = await generateText({
    model: groq("openai/gpt-oss-20b"),
    prompt: prompt,
  });

  const result_stay = await generateText({
    model: groq("openai/gpt-oss-20b"),
    prompt: prompt_stay,
  });

  return Response.json({
    itinerary: result.text,     
    hotels: result_stay.text,  
  });

}
