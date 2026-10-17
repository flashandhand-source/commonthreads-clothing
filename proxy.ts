import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "ct_preview_auth";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|login|api/login).*)",
  ],
};

export function proxy(request: NextRequest) {
  const secret = process.env.PREVIEW_SESSION_SECRET;

  // If auth isn't configured, don't lock anyone out.
  if (!secret) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(COOKIE_NAME);

  if (cookie?.value === secret) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("from", request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}
