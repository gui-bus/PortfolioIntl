import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "pt", "es", "fr", "cn"],

  // Used when no locale matches
  defaultLocale: "pt",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt|en|es|fr|cn)/:path*"],
};
