import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // Log to console for now — wire up an email service (Resend, Loops, etc.) when ready
    console.log("New subscriber:", email, new Date().toISOString());

    return NextResponse.json({ message: "Subscribed" });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
