import { NextRequest, NextResponse } from "next/server";
import { readLeads } from "@/lib/sheets";

const CORS = {
  "Access-Control-Allow-Origin":  "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new NextResponse(null, { status:204, headers:CORS });
}

export async function GET(req: NextRequest) {
  const pwd = req.nextUrl.searchParams.get("pwd");
  if (!pwd || pwd !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error:"Unauthorized" }, { status:401, headers:CORS });
  }
  try {
    const leads = await readLeads();
    return NextResponse.json({ leads }, { headers:CORS });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ leads:[], error:"Sheet error" }, { headers:CORS });
  }
}
