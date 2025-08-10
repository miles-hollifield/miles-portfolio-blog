import { ImageResponse } from "next/og";

// Use Node.js runtime to allow static generation on other pages and suppress Edge warnings
export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function titleFromSlug(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default async function OGPostImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Read title from query param to avoid Node-only imports and keep Edge runtime
  const url = typeof self !== "undefined" && "location" in self ? new URL(self.location.href) : undefined;
  const queryTitle = url?.searchParams.get("t") || undefined;
  const title = queryTitle || (slug ? titleFromSlug(slug) : "MileScript Blog");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0b1020 0%, #111827 40%, #1e40af 100%)",
          fontFamily:
            "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div style={{ position: "absolute", top: 48, left: 64, color: "#93c5fd", fontSize: 40 }}>MileScript</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            padding: 64,
            color: "white",
            borderRadius: 24,
            width: 1000,
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
            {title}
          </div>
          <div style={{ fontSize: 32, opacity: 0.9 }}>by Miles Hollifield</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
