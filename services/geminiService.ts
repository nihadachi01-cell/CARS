
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";
import { CARS_DATA } from "../constants";

export class GeminiService {
  async sendMessage(history: Message[], prompt: string): Promise<string> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const carInventory = JSON.stringify(CARS_DATA, null, 2);
    
    const systemInstruction = `
      You are the Elite Concierge for "CARS", a world-class luxury car rental and sales agency.
      Your tone is sophisticated, professional, knowledgeable, and helpful. 
      You are an expert on automotive specifications, luxury performance, and our specific fleet.
      
      Available Fleet:
      ${carInventory}
      
      Your goals:
      1. Answer questions about car specifications (Horsepower, Top Speed, Engine, etc.).
      2. Explain the rental and buying process.
      3. Recommend specific cars based on user needs (Track performance vs. Sunday drive).
      4. Keep the vibe "Premium Dark Luxury".
      5. Don't mention you are an AI unless asked; act as a high-end personal agent.
    `;

    try {
      // Map existing history to Gemini format
      const geminiHistory = history.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        history: geminiHistory,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      const response = await chat.sendMessage({ message: prompt });
      return response.text || "I apologize, but I'm having trouble processing your request at the moment.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "The concierge is currently occupied. Please try again in a moment.";
    }
  }
}

export const geminiService = new GeminiService();
