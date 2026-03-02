import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { message, companyContext } = await req.json();

  const systemPrompt = `
Jesteś pomocnym asystentem dla firmy ${companyContext.name} z branży ${companyContext.industry}.

Usługi: ${companyContext.services.join(", ")}
Obszar działania: ${companyContext.areas.join(", ")}
Cennik: ${JSON.stringify(companyContext.prices)}

Odpowiadaj krótko, konkretnie i po polsku.
Jeśli nie znasz odpowiedzi, poproś o kontakt telefoniczny.
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini", // Tańszy model
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: message },
    ],
    max_tokens: 300,
    temperature: 0.7,
  });

  return Response.json({
    reply: completion.choices[0].message.content,
  });
}
