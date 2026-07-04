import { NextRequest, NextResponse } from "next/server";
import { appendLead } from "@/lib/sheets";

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();
    if (!email?.includes("@")) return NextResponse.json({ error:"Invalid email" }, { status:400 });
    await appendLead({ name:name??"", email, message:"", source:"whitebook" });
    return NextResponse.json({ ok:true, download:"/whitebook-ru.pdf" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error:"Server error" }, { status:500 });
  }
}
