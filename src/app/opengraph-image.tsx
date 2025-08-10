import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
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
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #3b82f6 100%)",
          fontFamily:
            "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            padding: 64,
            color: "white",
            borderRadius: 24,
          }}
        >
          <div style={{ fontSize: 52, opacity: 0.9 }}>MileScript</div>
          <div style={{ fontSize: 86, fontWeight: 800, lineHeight: 1.1 }}>
            Miles Hollifield
          </div>
          <div style={{ fontSize: 36, opacity: 0.85 }}>
            Developer | Writer | Creator
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
