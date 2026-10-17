import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "ct_preview_auth";
const FIVE_MINUTES = 60 * 5;

export async function POST(request: NextRequest) {
  const expectedUser = process.env.PREVIEW_USER;
  const expectedPass = process.env.PREVIEW_PASSWORD;
  const secret = process.env.PREVIEW_SESSION_SECRET;

  if (!expectedUser || !expectedPass || !secret) {
    return NextResponse.json(
      { error: "Preview auth is not configured." },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);
  const username = body?.username ?? "";
  const password = body?.password ?? "";

  if (username !== expectedUser || password !== expectedPass) {
    return NextResponse.json(
      { error: "Incorrect username or password." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: FIVE_MINUTES,
  });
  return response;
}
