import { GoogleGenerativeAI } from "@google/generative-ai"
import faq from "@/data/faq.json"

export const runtime = "edge" // for Vercel Edge Functions

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!)

export async function POST(req: Request) {
  const { messages } = await req.json()

  const userQuestion = messages?.[0]?.content || ""

  const context = Object.entries(faq)
    .map(([key, value]) => `- ${key}: ${value}`)
    .join("\n")

  const prompt = `
You are a helpful assistant for Divij Gera's website.
Only use the following information to answer:
${context}

User asked:
${userQuestion}
`

  const model = genAI.getGenerativeModel({ model: "models/gemini-2.0-flash" })
  const result = await model.generateContent(prompt)
  const response = await result.response
  const output = await response.text()

  return new Response(JSON.stringify({ output }), {
    headers: { "Content-Type": "application/json" },
  })
}
