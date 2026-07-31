import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NoraCare — Gestão inteligente de plantões e equipes de saúde";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(145deg, #0A153A 0%, #0D1A48 45%, #162955 100%)",
          color: "white",
          padding: "72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#92E0CD",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0A153A",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            N
          </div>
          <span>
            Nora<span style={{ color: "#92E0CD" }}>Care</span>
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            Gestão inteligente de plantões e equipes de saúde
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            Escalas, check-in, trocas e relatórios — com governança e
            rastreabilidade para redes hospitalares.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          <span>site.noracare.com.br</span>
          <span style={{ color: "#92E0CD", fontWeight: 700 }}>
            Plataforma para saúde
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
