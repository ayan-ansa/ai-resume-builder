import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash-lite", //can also use gemini-2.5-pro
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function generateAIResponse(prompt) {
  const chatSession = model.startChat({
    generationConfig,

    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  return result.response.text();
}

export default generateAIResponse;
