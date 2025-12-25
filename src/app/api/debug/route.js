import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hasProjectId: !!process.env.GOOGLE_PROJECT_ID,
    hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
    hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
    privateKeyLength: process.env.GOOGLE_PRIVATE_KEY?.length || 0,
    privateKeyStart: process.env.GOOGLE_PRIVATE_KEY?.substring(0, 50) || 'missing'
  });
}