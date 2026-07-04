import { NextRequest, NextResponse } from "next/server";

const CORS = {
  "Access-Control-Allow-Origin":  "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

export async function GET(req: NextRequest) {
  const pwd = req.nextUrl.searchParams.get("pwd");

  if (!pwd || pwd !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401, headers: CORS }
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { leads: [], note: "Supabase not configured" },
      { headers: CORS }
    );
  }

  const res = await fetch(
    `${supabaseUrl}/rest/v1/leads?order=created_at.desc&limit=500`,
    {
      headers: {
        "apikey":        supabaseKey,
        "Authorization": `Bearer ${supabaseKey}`,
      },
    }
  );

  const leads = await res.json();
  return NextResponse.json({ leads }, { headers: CORS });
}
