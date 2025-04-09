import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // pastikan variabel ini ada di .env.local
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { messages } = body;

    const userInput = messages[messages.length - 1]?.content.toLowerCase();

    if (userInput.includes("berita")) {
      const newsRes = await fetch(
        `https://newsapi.org/v2/top-headlines?country=id&pageSize=3&apiKey=${process.env.NEWSAPI_KEY}`
      );

      if (!newsRes.ok) {
        const errorText = await newsRes.text();
        console.error("NewsAPI Error:", errorText);
        return NextResponse.json(
          { reply: "Gagal mengambil berita. Coba lagi nanti." },
          { status: 500 }
        );
      }

      const newsData = await newsRes.json();

      const headlines = newsData.articles
        .map((article, i) => `${i + 1}. ${article.title}`)
        .join("\n");

      return NextResponse.json({ reply: `📰 Berita Terkini:\n${headlines}` });
    } else {
      const chatResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages,
      });

      const reply = chatResponse.choices[0].message.content;
      return NextResponse.json({ reply });
    }
  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json({ reply: "Terjadi kesalahan di server." }, { status: 500 });
  }
}
