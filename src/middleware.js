import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("running");

  const user = "ok";

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/message/inbox", "/profile"],
};
