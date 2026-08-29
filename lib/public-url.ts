/** Prefix a public-folder path with the GitHub Pages base path in production. */
export function publicUrl(path: string): string {
  const base =
    process.env.NEXT_PUBLIC_BASE_PATH ??
    (process.env.NODE_ENV === "production" ? "/Cursortest" : "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
