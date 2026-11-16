import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { X } from "lucide-react"
import { Button } from "./Button"

interface SettingsModalProps {
  open: boolean
  onClose: () => void
}

export function SettingsModal({ open, onClose }: SettingsModalProps) {
  const [aiEnabled, setAiEnabled] = useState(true)

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, onClose])

  if (!open) return null

  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10200,
        backgroundColor: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 560,
          maxWidth: "calc(100vw - 48px)",
          background: "#ffffff",
          borderRadius: 8,
          boxShadow: "0px 8px 32px rgba(0,0,0,0.18)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 16px 16px 24px",
            borderBottom: "1px solid #dde0e4",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              flex: 1,
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 600,
              fontSize: 20,
              lineHeight: "28px",
              color: "#1e2125",
            }}
          >
            AI Settings
          </span>
          <button
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              borderRadius: 4,
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: "#5d6875",
              flexShrink: 0,
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div
          style={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              padding: 16,
              borderRadius: 8,
              background: "#f4f6f8",
            }}
          >
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <h4
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "20px",
                  color: "#1e2125",
                  margin: 0,
                }}
              >
                Freshpaint AI
              </h4>
              <p
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 400,
                  fontSize: 13,
                  lineHeight: "20px",
                  color: "#5d6875",
                  margin: 0,
                }}
              >
                {aiEnabled
                  ? "Disabling AI will immediately revoke access for all users on this account. The feature can be re-enabled at any time by an admin."
                  : "Enabling AI will restore access to Weekly Recommendation Cards and other AI-powered features for all users on this account."}
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Button
                variant={aiEnabled ? "destructive" : "primary"}
                size="small"
                onClick={() => setAiEnabled((v) => !v)}
              >
                {aiEnabled ? "Disable AI" : "Enable AI"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
