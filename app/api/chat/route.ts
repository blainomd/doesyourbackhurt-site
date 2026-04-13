import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Sage, a knowledgeable health information assistant specializing in back pain. You help people understand their symptoms, common back conditions, treatment options, and when to seek professional care.

You provide clear, evidence-based health information. You do NOT provide medical diagnosis or replace professional medical advice. Always encourage people to see a healthcare provider for actual diagnosis and treatment.

Key topics you know well:
- Herniated discs and disc disease
- Sciatica and nerve pain
- Spinal stenosis
- Muscle strain and sprains
- Degenerative disc disease
- Spondylolisthesis
- Physical therapy and exercise
- Pain management options
- When to seek emergency care (cauda equina syndrome red flags)
- Imaging decisions (when MRI/X-ray is warranted)
- Non-surgical vs surgical treatment

Red flags requiring emergency care: loss of bladder/bowel control, progressive leg weakness, saddle anesthesia, back pain after significant trauma. Always flag these immediately.

Be warm, clear, and practical. Keep responses concise but complete. Use plain language.`;

export async function POST(request: NextRequest) {
  try {
    const { message, context, history } = await request.json();

    if (!message?.trim()) {
      return NextResponse.json({ error: "Message required" }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { reply: "I'm not available right now. Please try again later or consult a healthcare provider directly." },
        { status: 200 }
      );
    }

    const contextSummary = context
      ? `\n\nSite context: ${context.siteName}. Conditions covered: ${(context.sections || []).map((s: { title: string }) => s.title).join(", ")}.`
      : "";

    const messages = [
      ...(history || [])
        .filter((m: { role: string; text: string }) => m.text?.trim())
        .map((m: { role: string; text: string }) => ({
          role: m.role === "user" ? "user" : "assistant",
          content: m.text,
        })),
      { role: "user", content: message },
    ];

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5",
        max_tokens: 600,
        system: SYSTEM_PROMPT + contextSummary,
        messages,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Anthropic API error:", err);
      return NextResponse.json(
        { reply: "I had trouble processing your question. Please try again." },
        { status: 200 }
      );
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text ?? "I wasn't able to generate a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json(
      { reply: "Something went wrong. Please try again." },
      { status: 200 }
    );
  }
}
