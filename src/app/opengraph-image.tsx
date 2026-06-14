import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Renown360 — Enterprise IT Consulting & Staffing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d1b14 0%, #133830 40%, #1a4c40 72%, #246356 100%)",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top label */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: "#5fbf9a" }} />
          <span style={{ color: "#5fbf9a", fontSize: 14, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            IT Consulting &amp; Staffing
          </span>
        </div>

        {/* Headline */}
        <div style={{ fontSize: 64, fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 24, maxWidth: 800 }}>
          Enterprise IT{" "}
          <span style={{ color: "#5fbf9a" }}>Consulting</span>{" "}
          &amp; Staffing
        </div>

        {/* Sub */}
        <div style={{ fontSize: 22, color: "rgba(255,255,255,0.6)", maxWidth: 680, lineHeight: 1.5 }}>
          Pre-vetted IT talent, cloud transformation, and ERP/CRM expertise for Fortune 500 enterprises.
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", gap: 32, marginTop: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(95,191,154,0.15)", border: "1px solid rgba(95,191,154,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#5fbf9a", fontSize: 18, fontWeight: 900 }}>R</span>
            </div>
            <div>
              <div style={{ color: "#fff", fontSize: 20, fontWeight: 800 }}>Renown360</div>
              <div style={{ color: "rgba(95,191,154,0.8)", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>IT Consulting</div>
            </div>
          </div>
          <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.15)" }} />
          <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 16 }}>renown360.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
