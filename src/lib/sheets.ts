import crypto from "crypto";

type ServiceAccount = { client_email: string; private_key: string };

function makeJWT(sa: ServiceAccount): string {
  const header  = Buffer.from(JSON.stringify({ alg:"RS256", typ:"JWT" })).toString("base64url");
  const now     = Math.floor(Date.now() / 1000);
  const payload = Buffer.from(JSON.stringify({
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now, exp: now + 3600,
  })).toString("base64url");
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(`${header}.${payload}`);
  return `${header}.${payload}.${sign.sign(sa.private_key, "base64url")}`;
}

async function getToken(sa: ServiceAccount): Promise<string> {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${makeJWT(sa)}`,
  });
  return (await res.json()).access_token as string;
}

function getSA(): ServiceAccount {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON not set");
  return JSON.parse(raw);
}

const SHEET_NAME = "Leads";

export async function appendLead(row: { name:string; email:string; message:string; source:string }) {
  const sa    = getSA();
  const token = await getToken(sa);
  const sid   = process.env.SHEET_ID ?? "";
  const date  = new Date().toLocaleString("fr-FR", { timeZone:"Asia/Dubai" });

  // Ensure header row exists
  const check = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sid}/values/${SHEET_NAME}!A1:E1`,
    { headers: { Authorization:`Bearer ${token}` } }
  );
  const cd = await check.json();
  if (!cd.values?.[0]?.[0]) {
    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sid}/values/${SHEET_NAME}!A1:E1?valueInputOption=USER_ENTERED`,
      { method:"PUT", headers:{ Authorization:`Bearer ${token}`, "Content-Type":"application/json" },
        body: JSON.stringify({ values:[["Date","Nom","Email","Message","Source"]] }) }
    );
  }

  await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sid}/values/${SHEET_NAME}!A:E:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    { method:"POST", headers:{ Authorization:`Bearer ${token}`, "Content-Type":"application/json" },
      body: JSON.stringify({ values:[[date, row.name, row.email, row.message, row.source]] }) }
  );
}

export async function readLeads() {
  const sa    = getSA();
  const token = await getToken(sa);
  const sid   = process.env.SHEET_ID ?? "";

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sid}/values/${SHEET_NAME}!A:E`,
    { headers: { Authorization:`Bearer ${token}` } }
  );
  const rows: string[][] = (await res.json()).values ?? [];
  if (rows.length <= 1) return [];

  return rows.slice(1).reverse().map((r, i) => ({
    id: i, created_at:r[0]??"", name:r[1]??"",
    email:r[2]??"", message:r[3]??"", source:r[4]??"contact",
  }));
}
