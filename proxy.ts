import { NextResponse, type NextRequest } from "next/server";

/**
 * Coming-soon gate.
 *
 * Until launch, every page request is rewritten (not redirected) to
 * /coming-soon, so URLs stay the same and respond with a 200.
 *
 * Env vars (set in the hosting dashboard, then redeploy):
 *   SITE_LAUNCHED=true   → turns the gate off (the real site goes live).
 *   PREVIEW_KEY=<secret> → visit any URL with ?preview=<secret> to browse the
 *                          real site while the gate is on. ?preview=off clears it.
 *
 * After launch, this file and app/coming-soon can be deleted.
 */

const COMING_SOON_PATH = "/coming-soon";
const PREVIEW_COOKIE = "site_preview";

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const launched = process.env.SITE_LAUNCHED === "true";

  // After launch, the coming-soon URL itself just points home.
  if (launched) {
    if (pathname === COMING_SOON_PATH) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  const previewKey = process.env.PREVIEW_KEY;
  const previewParam = searchParams.get("preview");

  if (previewParam !== null) {
    const cleanUrl = request.nextUrl.clone();
    cleanUrl.searchParams.delete("preview");

    if (previewKey && previewParam === previewKey) {
      const res = NextResponse.redirect(cleanUrl);
      res.cookies.set(PREVIEW_COOKIE, previewKey, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });
      return res;
    }

    if (previewParam === "off") {
      const res = NextResponse.redirect(cleanUrl);
      res.cookies.delete(PREVIEW_COOKIE);
      return res;
    }
  }

  if (previewKey && request.cookies.get(PREVIEW_COOKIE)?.value === previewKey) {
    return NextResponse.next();
  }

  if (pathname === COMING_SOON_PATH) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL(COMING_SOON_PATH, request.url));
}

export const config = {
  // Skip Next internals, metadata files and anything that looks like a static asset.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap.xml|.*\\.(?:png|jpe?g|gif|webp|avif|svg|ico|mp4|webm|mp3|pdf|txt|xml|json|woff2?)$).*)",
  ],
};
