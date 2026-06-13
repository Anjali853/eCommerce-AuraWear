import { useState } from "react";
import { Link } from "react-router-dom";

const moods = {
  Party: {
    icon: "🎉",
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    activeBorder: "#a855f7",
    itemColors: [
      { bg: "rgba(168,85,247,0.15)", border: "rgba(168,85,247,0.4)", text: "#d8b4fe" },
      { bg: "rgba(236,72,153,0.15)", border: "rgba(236,72,153,0.4)", text: "#f9a8d4" },
      { bg: "rgba(168,85,247,0.10)", border: "rgba(168,85,247,0.3)", text: "#c084fc" },
      { bg: "rgba(236,72,153,0.10)", border: "rgba(236,72,153,0.3)", text: "#f472b6" },
    ],
    items: ["🧥 Leather jacket", "👟 White sneakers", "⌚ Silver watch", "🧢 Black cap"],
    accent: "#a855f7",
  },
  Casual: {
    icon: "😎",
    gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    activeBorder: "#06b6d4",
    itemColors: [
      { bg: "rgba(6,182,212,0.15)", border: "rgba(6,182,212,0.4)", text: "#67e8f9" },
      { bg: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.4)", text: "#93c5fd" },
      { bg: "rgba(6,182,212,0.10)", border: "rgba(6,182,212,0.3)", text: "#22d3ee" },
      { bg: "rgba(59,130,246,0.10)", border: "rgba(59,130,246,0.3)", text: "#60a5fa" },
    ],
    items: ["👕 Oversized tee", "👖 Blue jeans", "👟 Converse", "🎒 Backpack"],
    accent: "#06b6d4",
  },
  Office: {
    icon: "💼",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    activeBorder: "#6366f1",
    itemColors: [
      { bg: "rgba(99,102,241,0.15)", border: "rgba(99,102,241,0.4)", text: "#a5b4fc" },
      { bg: "rgba(139,92,246,0.15)", border: "rgba(139,92,246,0.4)", text: "#c4b5fd" },
      { bg: "rgba(99,102,241,0.10)", border: "rgba(99,102,241,0.3)", text: "#818cf8" },
      { bg: "rgba(139,92,246,0.10)", border: "rgba(139,92,246,0.3)", text: "#a78bfa" },
    ],
    items: ["👔 Formal shirt", "👖 Trousers", "⌚ Classic watch", "👞 Oxford shoes"],
    accent: "#6366f1",
  },
  Gym: {
    icon: "💪",
    gradient: "linear-gradient(135deg, #f97316, #ef4444)",
    activeBorder: "#f97316",
    itemColors: [
      { bg: "rgba(249,115,22,0.15)", border: "rgba(249,115,22,0.4)", text: "#fdba74" },
      { bg: "rgba(239,68,68,0.15)", border: "rgba(239,68,68,0.4)", text: "#fca5a5" },
      { bg: "rgba(249,115,22,0.10)", border: "rgba(249,115,22,0.3)", text: "#fb923c" },
      { bg: "rgba(239,68,68,0.10)", border: "rgba(239,68,68,0.3)", text: "#f87171" },
    ],
    items: ["🏃 Gym tee", "🩳 Shorts", "👟 Running shoes", "⌚ Fitness band"],
    accent: "#f97316",
  },
  Date: {
    icon: "❤️",
    gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
    activeBorder: "#ec4899",
    itemColors: [
      { bg: "rgba(236,72,153,0.15)", border: "rgba(236,72,153,0.4)", text: "#f9a8d4" },
      { bg: "rgba(244,63,94,0.15)", border: "rgba(244,63,94,0.4)", text: "#fda4af" },
      { bg: "rgba(236,72,153,0.10)", border: "rgba(236,72,153,0.3)", text: "#f472b6" },
      { bg: "rgba(244,63,94,0.10)", border: "rgba(244,63,94,0.3)", text: "#fb7185" },
    ],
    items: ["🖤 Black shirt", "👖 Slim jeans", "⌚ Luxury watch", "👞 Chelsea boots"],
    accent: "#ec4899",
  },
  Wedding: {
    icon: "👑",
    gradient: "linear-gradient(135deg, #f59e0b, #eab308)",
    activeBorder: "#f59e0b",
    itemColors: [
      { bg: "rgba(245,158,11,0.15)", border: "rgba(245,158,11,0.4)", text: "#fcd34d" },
      { bg: "rgba(234,179,8,0.15)", border: "rgba(234,179,8,0.4)", text: "#fde047" },
      { bg: "rgba(245,158,11,0.10)", border: "rgba(245,158,11,0.3)", text: "#fbbf24" },
      { bg: "rgba(234,179,8,0.10)", border: "rgba(234,179,8,0.3)", text: "#facc15" },
    ],
    items: ["🤵 Designer suit", "👞 Premium shoes", "⌚ Gold watch", "🎩 Luxury accessories"],
    accent: "#f59e0b",
  },
};

const AIStylistPage = () => {
  const [selectedMood, setSelectedMood] = useState("Casual");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const generateOutfit = () => {
    setLoading(true);
    setShowResult(false);
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 1400);
  };

  const mood = moods[selectedMood];

  return (
    <div
      className="min-h-screen px-6 py-10"
      style={{ background: "#07070A", color: "#ffffff", fontFamily: "sans-serif" }}
    >
      {/* Ambient glow blobs */}
      <div style={{
        position: "fixed", top: 0, left: 0, width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "fixed", bottom: 0, right: 0, width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* Back Button */}
        <Link
          to="/"
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontSize: "13px", padding: "8px 18px", borderRadius: "999px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.7)",
            textDecoration: "none",
            transition: "border-color 0.2s",
          }}
        >
          ← Back To Home
        </Link>

        {/* Hero */}
        <div style={{ textAlign: "center", margin: "3rem 0 2rem" }}>
          <p style={{
            fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em",
            textTransform: "uppercase", marginBottom: "0.75rem",
            background: "linear-gradient(90deg, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Future of Fashion
          </p>
          <h1 style={{
            fontSize: "clamp(48px, 8vw, 72px)", fontWeight: 900,
            lineHeight: 1.05, letterSpacing: "-0.02em", color: "#ffffff",
            marginBottom: "0.5rem",
          }}>
            ✨ AI Stylist
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", marginTop: "0.5rem" }}>
            Describe your vibe and let AuraWear AI create your perfect outfit.
          </p>
        </div>

        {/* Mood Pills */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "2rem" }}>
          {Object.entries(moods).map(([name, m]) => {
            const isActive = name === selectedMood;
            return (
              <button
                key={name}
                onClick={() => { setSelectedMood(name); setShowResult(false); }}
                style={{
                  fontSize: "13px", fontWeight: 600, padding: "8px 20px",
                  borderRadius: "999px", cursor: "pointer", fontFamily: "sans-serif",
                  transition: "all 0.2s",
                  background: isActive ? m.gradient : "rgba(255,255,255,0.06)",
                  color: isActive ? "#ffffff" : "rgba(255,255,255,0.6)",
                  border: isActive ? "1.5px solid transparent" : `1.5px solid rgba(255,255,255,0.12)`,
                  boxShadow: isActive ? `0 0 20px ${m.accent}55` : "none",
                }}
              >
                {m.icon} {name}
              </button>
            );
          })}
        </div>

        {/* Main Card */}
        <div
          style={{
            maxWidth: "600px", margin: "0 auto",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "24px", padding: "1.75rem",
            boxShadow: `0 0 40px ${mood.accent}22`,
            transition: "box-shadow 0.4s",
          }}
        >
          {/* Input Row */}
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              placeholder="e.g. Party outfit under ₹3000"
              style={{
                flex: 1, fontSize: "14px", padding: "12px 16px",
                borderRadius: "12px", outline: "none",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#ffffff", fontFamily: "sans-serif",
              }}
            />
            <button
              onClick={generateOutfit}
              disabled={loading}
              style={{
                fontSize: "14px", fontWeight: 700, padding: "12px 22px",
                borderRadius: "12px", border: "none", cursor: loading ? "not-allowed" : "pointer",
                background: loading ? "rgba(255,255,255,0.08)" : mood.gradient,
                color: loading ? "rgba(255,255,255,0.4)" : "#ffffff",
                fontFamily: "sans-serif", whiteSpace: "nowrap",
                display: "flex", alignItems: "center", gap: "8px",
                boxShadow: loading ? "none" : `0 0 20px ${mood.accent}66`,
                transition: "all 0.2s",
              }}
            >
              {loading ? (
                <>
                  <span style={{
                    display: "inline-block", width: "13px", height: "13px",
                    border: "2px solid rgba(255,255,255,0.3)",
                    borderTopColor: "rgba(255,255,255,0.8)",
                    borderRadius: "50%", animation: "spin 0.6s linear infinite",
                  }} />
                  Styling…
                </>
              ) : "✨ Generate Outfit"}
            </button>
          </div>

          {/* Result */}
          {showResult && (
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "1.25rem" }} />

              <h2 style={{
                fontSize: "13px", fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", marginBottom: "1rem",
                background: mood.gradient,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                🤖 {selectedMood} · AI Recommendation
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {mood.items.map((item, i) => {
                  const c = mood.itemColors[i];
                  return (
                    <div
                      key={i}
                      style={{
                        background: c.bg,
                        border: `1px solid ${c.border}`,
                        color: c.text,
                        borderRadius: "14px", padding: "14px 16px",
                        fontSize: "14px", fontWeight: 600,
                        display: "flex", alignItems: "center", gap: "10px",
                        transition: "transform 0.15s, box-shadow 0.15s",
                        cursor: "default",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = `0 8px 24px ${c.border}`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>

              <button
                style={{
                  width: "100%", marginTop: "14px", padding: "14px",
                  borderRadius: "14px", border: "none", cursor: "pointer",
                  background: mood.gradient,
                  color: "#ffffff", fontSize: "15px", fontWeight: 700,
                  fontFamily: "sans-serif",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  boxShadow: `0 0 30px ${mood.accent}55`,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                🛒 Shop Complete Look
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder { color: rgba(255,255,255,0.3); }
      `}</style>
    </div>
  );
};

export default AIStylistPage;
