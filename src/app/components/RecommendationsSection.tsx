import React, { useState, useEffect, useRef, useCallback } from "react"
import ReactDOM from "react-dom"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft, ChevronRight, Check, Settings } from "lucide-react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { RecommendationCard } from "./RecommendationCard"
import { InsightDrawerData } from "./InsightDrawer"
import { BadgeType } from "./CategoryBadge"
import { Button } from "./Button"
import { SettingsModal } from "./SettingsModal"

// ── Card pool ────────────────────────────────────────────────────────────────

export interface CardDef {
  id: number
  badgeType: BadgeType
  title: string
  recommendation: string
  attributionModel: string
}

export const ALL_RECOMMENDATION_CARDS: CardDef[] = [
  {
    id: 1,
    badgeType: "channel-win",
    title: "Google Ads delivers strong volume at $4 acquisition cost",
    recommendation:
      "Tighten Google Ads targeting to improve 32% spend efficiency.",
    attributionModel: "Last-touch",
  },
  {
    id: 2,
    badgeType: "channel-win",
    title: "Bing Ads plays a hidden assist role in 56% of its conversions",
    recommendation:
      "Maintain Bing Ads investment given its strong assist role.",
    attributionModel: "Linear",
  },
  {
    id: 3,
    badgeType: "efficiency-gap",
    title: "Meta Ads introduces new prospects but struggles to convert them",
    recommendation:
      "Narrow Meta Ads audiences to lift 3% spend efficiency above 10%.",
    attributionModel: "First-touch",
  },
  {
    id: 4,
    badgeType: "efficiency-gap",
    title:
      "Display campaigns show high impression volume but sub-1% conversion rate",
    recommendation:
      "Pause underperforming display ad sets and reallocate budget to Search.",
    attributionModel: "Last-touch",
  },
  {
    id: 5,
    badgeType: "channel-win",
    title:
      "Email nurture sequences close 18% of leads originated by paid search",
    recommendation:
      "Expand email nurture to Bing-originated leads to leverage the cross-channel assist.",
    attributionModel: "Linear",
  },
  {
    id: 6,
    badgeType: "efficiency-gap",
    title:
      "YouTube pre-roll has zero attributable conversions in the last 30 days",
    recommendation:
      "Pause YouTube pre-roll and shift budget to proven bottom-funnel channels.",
    attributionModel: "First-touch",
  },
  {
    id: 7,
    badgeType: "channel-win",
    title:
      "Organic Search drives 24% of first-touch attribution at zero variable cost",
    recommendation:
      "Invest in SEO content targeting high-converting ortho keywords.",
    attributionModel: "First-touch",
  },
]

const CARDS_PER_PAGE = 3

// ── Badge pill for context menu ───────────────────────────────────────────────

interface MenuBadgeColors {
  bg: string
  text: string
}

const BADGE_COLORS: Record<BadgeType, MenuBadgeColors> = {
  "channel-win": { bg: "#DEF7F2", text: "#249980" },
  "efficiency-gap": { bg: "#FEF3CD", text: "#B07D00" },
  "multi-channel": { bg: "#EDE9FE", text: "#7C3AED" },
}

function MenuBadgePill({ type }: { type: BadgeType }) {
  const c = BADGE_COLORS[type] ?? BADGE_COLORS["channel-win"]
  const label =
    type === "channel-win"
      ? "Channel Win"
      : type === "efficiency-gap"
        ? "Efficiency Gap"
        : "Multi-Channel"
  return (
    <span
      style={{
        background: c.bg,
        color: c.text,
        borderRadius: 100,
        padding: "2px 8px",
        fontSize: 11,
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {label}
    </span>
  )
}

// ── Context menu (portal) ─────────────────────────────────────────────────────

interface ContextMenuProps {
  x: number
  y: number
  cards: CardDef[]
  pendingIds: Set<number>
  onToggle: (id: number) => void
  onApply: () => void
  onCancel: () => void
  menuRef: React.RefObject<HTMLDivElement | null>
}

function ContextMenu({
  x,
  y,
  cards,
  pendingIds,
  onToggle,
  onApply,
  onCancel,
  menuRef,
}: ContextMenuProps) {
  const menuWidth = 340
  const menuHeight = cards.length * 48 + 130 // rough estimate

  // Clamp to viewport
  const left = Math.min(x, window.innerWidth - menuWidth - 12)
  const top = Math.min(y, window.innerHeight - menuHeight - 12)

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        ref={menuRef}
        key="ctx-menu"
        initial={{ opacity: 0, scale: 0.96, y: -4 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: -4 }}
        transition={{ duration: 0.12, ease: "easeOut" }}
        style={{
          position: "fixed",
          left,
          top,
          width: menuWidth,
          zIndex: 99999,
          background: "#1e2125",
          borderRadius: 10,
          boxShadow: "0 8px 32px rgba(0,0,0,0.36), 0 2px 8px rgba(0,0,0,0.2)",
          overflow: "hidden",
          userSelect: "none",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "14px 16px 10px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              color: "#ffffff",
              margin: 0,
            }}
          >
            Customize Insight Cards
          </p>
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 400,
              fontSize: 11,
              color: "rgba(255,255,255,0.45)",
              margin: "3px 0 0",
            }}
          >
            Select which insights to show. Right-click anytime to reopen.
          </p>
        </div>

        {/* Card list */}
        <div style={{ padding: "6px 0" }}>
          {cards.map((card) => {
            const checked = pendingIds.has(card.id)
            const shortTitle =
              card.title.length > 52
                ? card.title.slice(0, 52) + "…"
                : card.title
            return (
              <button
                key={card.id}
                onClick={() => onToggle(card.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "7px 16px",
                  background: checked
                    ? "rgba(255,255,255,0.07)"
                    : "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background 0.1s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background =
                    checked
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(255,255,255,0.04)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background =
                    checked ? "rgba(255,255,255,0.07)" : "transparent")
                }
              >
                {/* Checkbox */}
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 4,
                    border: checked
                      ? "none"
                      : "1.5px solid rgba(255,255,255,0.3)",
                    background: checked ? "#3f51b5" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.12s",
                  }}
                >
                  {checked && <Check size={10} color="#fff" strokeWidth={3} />}
                </div>

                {/* Title */}
                <span
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.85)",
                    flex: 1,
                    lineHeight: "16px",
                  }}
                >
                  {shortTitle}
                </span>

                {/* Badge */}
                <MenuBadgePill type={card.badgeType} />
              </button>
            )
          })}
        </div>

        {/* Footer actions */}
        <div
          style={{
            padding: "10px 16px 14px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
          }}
        >
          <button
            onClick={onCancel}
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              color: "rgba(255,255,255,0.5)",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 6,
              padding: "5px 14px",
              cursor: "pointer",
              transition: "all 0.1s",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.color =
                "rgba(255,255,255,0.8)"
              ;(e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.3)"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.color =
                "rgba(255,255,255,0.5)"
              ;(e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.15)"
            }}
          >
            Cancel
          </button>
          <button
            onClick={onApply}
            disabled={pendingIds.size === 0}
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              color: pendingIds.size === 0 ? "rgba(255,255,255,0.3)" : "#fff",
              background:
                pendingIds.size === 0 ? "rgba(63,81,181,0.3)" : "#3f51b5",
              border: "none",
              borderRadius: 6,
              padding: "5px 14px",
              cursor: pendingIds.size === 0 ? "not-allowed" : "pointer",
              transition: "all 0.1s",
            }}
            onMouseEnter={(e) => {
              if (pendingIds.size > 0)
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#5c6bc0"
            }}
            onMouseLeave={(e) => {
              if (pendingIds.size > 0)
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#3f51b5"
            }}
          >
            Apply ({pendingIds.size})
          </button>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  )
}

// ── Main Section ──────────────────────────────────────────────────────────────

interface RecommendationsSectionProps {
  visibleIds: number[]
  onVisibleIdsChange: (ids: number[]) => void
  onOpenDrawer: (data: InsightDrawerData) => void
}

export function RecommendationsSection({
  visibleIds,
  onVisibleIdsChange,
  onOpenDrawer,
}: RecommendationsSectionProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(1)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [contextMenuPos, setContextMenuPos] = useState<{
    x: number
    y: number
  } | null>(null)
  const [pendingIds, setPendingIds] = useState<Set<number>>(new Set(visibleIds))
  const menuRef = useRef<HTMLDivElement>(null)

  const visibleCards = ALL_RECOMMENDATION_CARDS.filter((c) =>
    visibleIds.includes(c.id),
  )
  const isCarousel = visibleCards.length > CARDS_PER_PAGE
  const totalPages = Math.ceil(visibleCards.length / CARDS_PER_PAGE)
  const pageCards = visibleCards.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE,
  )

  // Clamp page when card set changes
  useEffect(() => {
    const newTotal = Math.ceil(visibleCards.length / CARDS_PER_PAGE)
    if (currentPage >= newTotal) {
      setCurrentPage(Math.max(0, newTotal - 1))
    }
  }, [visibleIds]) // eslint-disable-line

  const goNext = () => {
    setDirection(1)
    setCurrentPage((p) => Math.min(p + 1, totalPages - 1))
  }

  const goPrev = () => {
    setDirection(-1)
    setCurrentPage((p) => Math.max(p - 1, 0))
  }

  // Right-click handler
  const handleContextMenu = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      setPendingIds(new Set(visibleIds))
      setContextMenuPos({ x: e.clientX, y: e.clientY })
    },
    [visibleIds],
  )

  // Dismiss context menu on outside click / escape
  useEffect(() => {
    if (!contextMenuPos) return
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setContextMenuPos(null)
      }
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setContextMenuPos(null)
    }
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleEsc)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", handleEsc)
    }
  }, [contextMenuPos])

  const togglePending = (id: number) => {
    setPendingIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const applySelection = () => {
    if (pendingIds.size === 0) return
    const ordered = ALL_RECOMMENDATION_CARDS.filter((c) =>
      pendingIds.has(c.id),
    ).map((c) => c.id)
    onVisibleIdsChange(ordered)
    setCurrentPage(0)
    setContextMenuPos(null)
  }

  // ── Slide animation variants ────────────────────────────────────────────────
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 48 : -48,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -48 : 48,
      opacity: 0,
    }),
  }

  return (
    <section className="flex flex-col gap-4" onContextMenu={handleContextMenu}>
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <h2
            className="text-[#1e2125] text-[24px] leading-[32px] whitespace-nowrap"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
          >
            Weekly Recommendations
          </h2>
          <p
            className="text-[#6d7783] text-[13px] leading-[20px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
          >
            Updated every monday&nbsp;&nbsp;•&nbsp;&nbsp;Last updated Monday,
            May 4th
          </p>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          {/* AI Settings CTA */}
          <TooltipPrimitive.Provider delayDuration={300}>
            <TooltipPrimitive.Root>
              <TooltipPrimitive.Trigger asChild>
                <Button
                  variant="icon-outline"
                  size="medium"
                  onClick={() => setSettingsOpen(true)}
                >
                  <Settings size={16} />
                </Button>
              </TooltipPrimitive.Trigger>
              <TooltipPrimitive.Portal>
                <TooltipPrimitive.Content
                  sideOffset={6}
                  style={{
                    background: "#1e2125",
                    color: "#ffffff",
                    borderRadius: 4,
                    padding: "5px 10px",
                    fontSize: 12,
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 500,
                    lineHeight: "16px",
                    boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
                    userSelect: "none",
                    zIndex: 10300,
                  }}
                >
                  AI Settings
                  <TooltipPrimitive.Arrow style={{ fill: "#1e2125" }} />
                </TooltipPrimitive.Content>
              </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
          </TooltipPrimitive.Provider>

          {isCarousel && (
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                disabled={currentPage === 0}
                className="w-8 h-8 rounded-[6px] flex items-center justify-center border border-[#c9ced4] bg-white hover:bg-[#f4f6f8] disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft size={16} color="#6d7783" />
              </button>
              <span
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 400,
                  fontSize: 13,
                  color: "#6d7783",
                  minWidth: 36,
                  textAlign: "center",
                }}
              >
                {currentPage + 1} / {totalPages}
              </span>
              <button
                onClick={goNext}
                disabled={currentPage >= totalPages - 1}
                className="w-8 h-8 rounded-[6px] flex items-center justify-center border border-[#c9ced4] bg-white hover:bg-[#f4f6f8] disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer transition-colors"
                aria-label="Next page"
              >
                <ChevronRight size={16} color="#6d7783" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Settings modal */}
      <SettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />

      {/* Cards area — padding gives shadow room; negative margin compensates layout */}
      <div className="py-3 -my-3 px-2 -mx-2">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`page-${currentPage}-${visibleIds.join("-")}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex gap-2 items-stretch"
          >
            {pageCards.map((card) => (
              <RecommendationCard
                key={card.id}
                id={card.id}
                title={card.title}
                recommendation={card.recommendation}
                onClick={() =>
                  onOpenDrawer({
                    id: card.id,
                    title: card.title,
                    recommendation: card.recommendation,
                  })
                }
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Page dots */}
      {isCarousel && totalPages > 1 && (
        <div className="flex items-center justify-center gap-[6px] mt-0.5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentPage ? 1 : -1)
                setCurrentPage(i)
              }}
              className="cursor-pointer flex items-center justify-center"
              aria-label={`Go to page ${i + 1}`}
            >
              <motion.div
                className="rounded-full"
                animate={{
                  width: i === currentPage ? 20 : 8,
                  background: i === currentPage ? "#3f51b5" : "#c9ced4",
                }}
                transition={{ duration: 0.2 }}
                style={{ height: 8 }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Context menu */}
      {contextMenuPos && (
        <ContextMenu
          x={contextMenuPos.x}
          y={contextMenuPos.y}
          cards={ALL_RECOMMENDATION_CARDS}
          pendingIds={pendingIds}
          onToggle={togglePending}
          onApply={applySelection}
          onCancel={() => setContextMenuPos(null)}
          menuRef={menuRef}
        />
      )}
    </section>
  )
}
