import EmailTemplate from "@/app/components/contact/EmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;
    const { data, error } = await resend.emails.send({
      from: "Eposition Vie 2024 <no-replay@resend.dev>",
      to: ["berceauoriginedelavie2024@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ name, email, phone }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
