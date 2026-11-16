import React, { useState, useRef, useEffect, useLayoutEffect } from "react"
import ReactDOM from "react-dom"
import { CheckCircle, ChevronDown } from "lucide-react"
import { Button } from "./Button"
import thumbsUpPath from "../../imports/PositiveFeedback/svg-1mxrnpaxhp"
import thumbsDownPath from "../../imports/NegativeFeedback/svg-vbbists0eh"

interface RecommendationCardProps {
  id: number
  title: string
  recommendation: string
  onClick: () => void
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function LightbulbIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
      <path
        d="M9.5 2.375C7.08375 2.375 5.125 4.33375 5.125 6.75C5.125 8.38 6.03125 9.7975 7.375 10.545V12.625C7.375 13.1083 7.76667 13.5 8.25 13.5H10.75C11.2333 13.5 11.625 13.1083 11.625 12.625V10.545C12.9688 9.7975 13.875 8.38 13.875 6.75C13.875 4.33375 11.9162 2.375 9.5 2.375Z"
        stroke="#2A3678"
        strokeWidth="1.58333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.125 14.25H11.875"
        stroke="#2A3678"
        strokeWidth="1.58333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.916 17.417H11.083"
        stroke="#2A3678"
        strokeWidth="1.58333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ThumbsUpIcon({
  selected,
  size = 18,
}: {
  selected: boolean
  size?: number
}) {
  const stroke = selected ? "#15803D" : "#6D7783"
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path
        d={thumbsUpPath.p3cbf2030}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 7.5V16.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ThumbsDownIcon({
  selected,
  size = 18,
}: {
  selected: boolean
  size?: number
}) {
  const stroke = selected ? "#900F11" : "#6D7783"
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path
        d={thumbsDownPath.pa286900}
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 10.5V1.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── Feedback Popover ─────────────────────────────────────────────────────────

const DOWN_REASONS = [
  "Not relevant",
  "Inaccurate",
  "Not actionable",
  "Other",
] as const
type DownReason = typeof DOWN_REASONS[number]

function FeedbackPopover({
  sentiment,
  anchorRef,
  onClose,
  onSubmit,
}: {
  sentiment: "up" | "down"
  anchorRef: React.RefObject<HTMLButtonElement | null>
  onClose: () => void
  onSubmit: (reasons: string[], text: string) => void
}) {
  const popoverRef = useRef<HTMLDivElement>(null)
  const [selectedReason, setSelectedReason] = useState<string>("")
  const [text, setText] = useState("")
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null)

  useLayoutEffect(() => {
    if (anchorRef.current) {
      setAnchorRect(anchorRef.current.getBoundingClientRect())
    }
  }, [anchorRef])

  // Click outside dismisses and confirms
  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        onClose()
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    // Small delay so the opening click doesn't immediately close
    const t = setTimeout(() => {
      document.addEventListener("mousedown", handleMouseDown)
      document.addEventListener("keydown", handleKey)
    }, 50)
    return () => {
      clearTimeout(t)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("keydown", handleKey)
    }
  }, [onClose])

  if (!anchorRect) return null

  const POPOVER_WIDTH = 331
  const GAP = 8
  // Position the popover's bottom edge just above the anchor button
  const bottomPx = window.innerHeight - anchorRect.top + GAP
  // Left-align with the anchor; clamp so it doesn't bleed off screen
  const leftPx = Math.min(
    anchorRect.left,
    window.innerWidth - POPOVER_WIDTH - 12,
  )

  const isUp = sentiment === "up"
  const canSubmit = isUp || selectedReason !== ""

  return ReactDOM.createPortal(
    <div
      ref={popoverRef}
      style={{
        position: "fixed",
        bottom: bottomPx,
        left: leftPx,
        width: POPOVER_WIDTH,
        zIndex: 500,
        background: "#fff",
        borderRadius: 8,
        border: "1px solid #c9ced4",
        boxShadow: "0px 2px 12px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: "18px 23px",
      }}
      // Prevent clicks inside from bubbling to the card
      onClick={(e) => e.stopPropagation()}
    >
      {/* Arrow pointing down */}
      <div
        style={{
          position: "absolute",
          bottom: -7,
          left: 42,
          width: 18,
          height: 9,
          overflow: "visible",
        }}
      >
        <svg width="18" height="9" viewBox="0 0 18 9" fill="none">
          <defs>
            <filter
              id="filter0_i_arrow"
              x="0"
              y="0"
              width="18"
              height="9"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.788235 0 0 0 0 0.807843 0 0 0 0 0.831373 0 0 0 1 0"
              />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
          </defs>
          <g filter="url(#filter0_i_arrow)">
            <path d="M9 0L18 9H0L9 0Z" fill="#fff" />
          </g>
        </svg>
      </div>

      {/* Header */}
      <p
        className="text-[#1e2125] text-[14px] leading-[20px]"
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
      >
        {isUp
          ? "Thanks! Anything else you'd like to share?"
          : "Why wasn't this useful?"}
      </p>

      {/* Reason dropdown (thumbs down only) */}
      {!isUp && (
        <div className="flex flex-col gap-2">
          <div className="relative">
            <select
              value={selectedReason}
              onChange={(e) => setSelectedReason(e.target.value)}
              className="w-full rounded-[8px] border border-[#c9ced4] px-4 py-3 pr-10 text-[16px] leading-[24px] outline-none appearance-none transition-colors cursor-pointer"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                color: selectedReason ? "#1e2125" : "#a3acb7",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#3f51b5")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#c9ced4")}
            >
              <option value="" disabled>
                Select…
              </option>
              {DOWN_REASONS.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
            <div
              className="absolute right-4 top-1/2 pointer-events-none"
              style={{ transform: "translateY(-50%)" }}
            >
              <ChevronDown size={24} color="#6D7783" />
            </div>
          </div>
        </div>
      )}

      {/* Optional textarea */}
      <div className="flex flex-col gap-2">
        {!isUp && (
          <p
            className="text-[14px] leading-[20px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
          >
            <span className="text-[#1e2125]">Anything else? </span>
            <span className="text-[#6d7783]">(optional)</span>
          </p>
        )}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={isUp ? "Share your thoughts (optional)" : ""}
          rows={3}
          className="rounded-[8px] border border-[#c9ced4] px-4 py-3 text-[16px] leading-[24px] text-[#1e2125] outline-none resize-none transition-colors"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            minHeight: 72,
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#3f51b5")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#c9ced4")}
        />
      </div>

      {/* Submit */}
      <div className="flex justify-end">
        <Button
          variant="primary"
          size="sm"
          onClick={() =>
            onSubmit(selectedReason ? [selectedReason] : [], text.trim())
          }
          disabled={!canSubmit}
        >
          Submit
        </Button>
      </div>
    </div>,
    document.body,
  )
}

// ─── Main Card ────────────────────────────────────────────────────────────────

export function RecommendationCard({
  title,
  recommendation,
  onClick,
}: RecommendationCardProps) {
  // "up" | "down" = locked choice; null = not yet voted
  const [lockedSentiment, setLockedSentiment] = useState<"up" | "down" | null>(
    null,
  )
  const [popoverOpen, setPopoverOpen] = useState(false)
  // true = permanently done, shows checkmark row
  const [confirmed, setConfirmed] = useState(false)

  const [isCardHovered, setIsCardHovered] = useState(false)

  const thumbUpRef = useRef<HTMLButtonElement>(null)
  const thumbDownRef = useRef<HTMLButtonElement>(null)

  function handleThumbClick(sentiment: "up" | "down", e: React.MouseEvent) {
    e.stopPropagation()
    if (confirmed || lockedSentiment) return
    setLockedSentiment(sentiment)
    setPopoverOpen(true)
  }

  // Called when popover closes (click-outside OR submit)
  function handleConfirm() {
    setPopoverOpen(false)
    setConfirmed(true)
  }

  const activeRef = lockedSentiment === "up" ? thumbUpRef : thumbDownRef

  return (
    <>
      <div
        className="bg-white rounded-[8px] border border-[#c9ced4] flex flex-col p-8 cursor-pointer select-none"
        style={{
          position: "relative",
          transition: "transform 0.15s ease, box-shadow 0.15s ease",
          flex: "1 0 0",
          minWidth: 0,
        }}
        onMouseEnter={(e) => {
          setIsCardHovered(true)
          ;(e.currentTarget as HTMLDivElement).style.transform =
            "translateY(-3px)"
          ;(e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 6px 20px rgba(0,0,0,0.08)"
        }}
        onMouseLeave={(e) => {
          setIsCardHovered(false)
          ;(e.currentTarget as HTMLDivElement).style.transform =
            "translateY(0px)"
          ;(e.currentTarget as HTMLDivElement).style.boxShadow = "none"
        }}
        onClick={onClick}
      >
        {/* Title */}
        <div>
          <p
            className="text-[#1e2125] text-[20px] leading-[28px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
          >
            {title}
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom: Recommendation + Feedback */}
        <div className="flex flex-col gap-4 pt-6">
          {/* Recommendation box */}
          <div className="bg-[#f4f5fb] rounded-[6px] flex flex-col gap-2 pl-4 pr-2 py-4 w-full">
            <div className="flex items-center gap-[10px]">
              <div className="w-[19px] h-[19px] flex items-center justify-center shrink-0">
                <LightbulbIcon />
              </div>
              <span
                className="text-[#2a3678] text-[12px] leading-[16px]"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
              >
                RECOMMENDATION
              </span>
            </div>
            <p
              className="text-[#1e2125] text-[14px] leading-[20px]"
              style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
            >
              {recommendation}
            </p>
          </div>

          {/* Feedback row */}
          <div
            className="flex items-center"
            style={{ minHeight: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            {confirmed ? (
              /* ── Step 3: permanent confirmation ── */
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} color="#6d7783" strokeWidth={1.75} />
                <span
                  className="text-[#6d7783] text-[12px] leading-[20px]"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Feedback received
                </span>
              </div>
            ) : lockedSentiment ? (
              /* ── Step 1b: locked, only selected thumb shown ── */
              <div className="flex items-center gap-2">
                <span
                  className="text-[#6d7783] text-[12px] leading-[20px] mr-0.5"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Was this useful?
                </span>
                {lockedSentiment === "up" ? (
                  <button
                    ref={thumbUpRef}
                    className="flex items-center justify-center w-7 h-7 cursor-default"
                    style={{
                      borderRadius: 6,
                      backgroundColor: "#dcfce7",
                      border: "none",
                      padding: "5px",
                    }}
                  >
                    <ThumbsUpIcon selected size={18} />
                  </button>
                ) : (
                  <button
                    ref={thumbDownRef}
                    className="flex items-center justify-center w-7 h-7 cursor-default"
                    style={{
                      borderRadius: 6,
                      backgroundColor: "#fdeaea",
                      border: "none",
                      padding: "5px",
                    }}
                  >
                    <ThumbsDownIcon selected size={18} />
                  </button>
                )}
              </div>
            ) : (
              /* ── Step 1a: initial state, both thumbs ── */
              <div className="flex items-center">
                <span
                  className="text-[#6d7783] text-[12px] leading-[20px] mr-2"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Was this useful?
                </span>

                <button
                  ref={thumbUpRef}
                  className="flex items-center justify-center w-7 h-7 cursor-pointer transition-colors"
                  style={{
                    borderRadius: 6,
                    backgroundColor: "transparent",
                    border: "none",
                    padding: "5px",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      "#dde0e4")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      "transparent")
                  }
                  onClick={(e) => handleThumbClick("up", e)}
                  title="Yes, useful"
                >
                  <ThumbsUpIcon selected={false} />
                </button>

                <button
                  ref={thumbDownRef}
                  className="flex items-center justify-center w-7 h-7 cursor-pointer transition-colors"
                  style={{
                    borderRadius: 6,
                    backgroundColor: "transparent",
                    border: "none",
                    padding: "5px",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      "#dde0e4")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      "transparent")
                  }
                  onClick={(e) => handleThumbClick("down", e)}
                  title="Not useful"
                >
                  <ThumbsDownIcon selected={false} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Step 2: Feedback popover ── */}
      {popoverOpen && lockedSentiment && (
        <FeedbackPopover
          sentiment={lockedSentiment}
          anchorRef={activeRef}
          onClose={handleConfirm}
          onSubmit={(_reasons, _text) => handleConfirm()}
        />
      )}
    </>
  )
}
