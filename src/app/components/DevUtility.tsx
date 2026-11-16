import React from "react";

export type CardState = "cards" | "promo" | "events" | "waiting" | "empty" | "error";

const STATES: { id: CardState; label: string }[] = [
  { id: "promo",   label: "Promo"   },
  { id: "events",  label: "Events"  },
  { id: "waiting", label: "Waiting" },
  { id: "cards",   label: "Cards"   },
  { id: "empty",   label: "Empty"   },
  { id: "error",   label: "Error"   },
];

interface DevUtilityProps {
  current: CardState;
  onChange: (state: CardState) => void;
  onHide: () => void;
}

export function DevUtility({ current, onChange, onHide }: DevUtilityProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        left: 264, // 240px sidebar + 24px margin
        zIndex: 9000,
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div
        style={{
          background: "#1a1f26",
          borderRadius: 10,
          boxShadow: "0 4px 20px rgba(0,0,0,0.28)",
          padding: "10px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          minWidth: 0,
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {/* Wrench icon */}
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <path
              d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
              stroke="#6d7783"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: "#6d7783",
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              userSelect: "none",
              flex: 1,
            }}
          >
            Dev · States
          </span>
          <button
            onClick={onHide}
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 10,
              fontWeight: 500,
              color: "#4a5260",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "1px 4px",
              borderRadius: 4,
              letterSpacing: "0.4px",
              lineHeight: 1,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#6d7783"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#4a5260"; }}
          >
            Hide
          </button>
        </div>

        {/* State buttons */}
        <div style={{ display: "flex", gap: 4 }}>
          {STATES.map(({ id, label }) => {
            const active = current === id;
            return (
              <button
                key={id}
                onClick={() => onChange(id)}
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: 11,
                  fontWeight: active ? 600 : 400,
                  padding: "4px 9px",
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.12s ease",
                  background: active ? "#3f51b5" : "rgba(255,255,255,0.07)",
                  color: active ? "#ffffff" : "#a3acb7",
                  letterSpacing: active ? "0.1px" : 0,
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.13)";
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
