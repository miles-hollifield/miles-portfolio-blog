// This route is intentionally unused. Keeping an empty export to avoid routing it.
export const runtime = "nodejs";
export default function OGImage() {
  return new Response("", { status: 404 });
}
