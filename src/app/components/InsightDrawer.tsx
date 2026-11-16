import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./Button";
import { DataChip, ChipType } from "./DataChip";
import { semantic } from "../../styles/tokens";
import svgDrawer from "../../imports/InsightDrawer/svg-232pl23iiw";
import svgCal1 from "../../imports/InsightDrawer-1/svg-0f8rrx0smv";
import svgCal2 from "../../imports/InsightDrawer-1-1/svg-4thx9qpsds";
import svgCal3 from "../../imports/InsightDrawer-3/svg-lrl54htpbp";

export interface InsightDrawerData {
  id: number;
  title: string;
  recommendation: string;
}

interface InsightDrawerProps {
  isOpen: boolean;
  data: InsightDrawerData | null;
  onClose: () => void;
}

// ── Icons ─────────────────────────────────────────────────

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M15 5L5 15" stroke="#6D7783" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M5 5L15 15" stroke="#6D7783" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
      <path d={svgDrawer.p18375980} stroke="#2A3678" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58333" />
      <path d="M7.125 14.25H11.875" stroke="#2A3678" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58333" />
      <path d="M7.91602 17.4165H11.0827" stroke="#2A3678" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58333" />
    </svg>
  );
}

function QualityDot({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="5" fill={color} />
    </svg>
  );
}

// ── Per-card content ───────────────────────────────────────

interface DetailsContent {
  attributionModel: string;
  attributionDesc: string;
  dataQualityLabel: string;
  dataQualityColor: string;
  dataQualityDesc: string;
  fullRecommendation: string;
}

interface SupportingCard {
  label: string;
  value: string;
  valueUnit?: string;
  dateRange: string;
  explanation: string;
  tooltip: string;
  calPath: string;
  chips: ChipType[];
}

interface ConversionEvent {
  name: string;
  funnel: "mid" | "low";
}

const SHARED_FUNNEL_EVENTS: ConversionEvent[] = [
  { name: "Google Ads - Locations Ortho Page View", funnel: "mid" },
  { name: "Lead",                                   funnel: "low" },
  { name: "schedule_appt_click",                    funnel: "low" },
];

const cardContent: Record<
  number,
  { details: DetailsContent; supporting: SupportingCard[]; conversionEvents: ConversionEvent[] }
> = {
  1: {
    conversionEvents: SHARED_FUNNEL_EVENTS,
    details: {
      attributionModel: "Last-touch",
      attributionDesc:
        "Google Ads functions as a Full Journey Owner with 47% solo conversions and equal first/last touch credit, making last-touch the most accurate reflection of its direct-response role.",
      dataQualityLabel: "High",
      dataQualityColor: semantic.quality.high,
      dataQualityDesc:
        "Well-supported by source data, specific actionable recommendation, correct metrics, and appropriate attribution model for the channel's role.",
      fullRecommendation:
        "Tighten Google Ads targeting to improve 32% spend efficiency.",
    },
    supporting: [
      {
        label: "Google Ads acquisition cost",
        value: "$4",
        dateRange: "Apr 5 – May 5, 2026",
        explanation:
          "The average cost to acquire one lead or schedule_appt_click through Google Ads. Lower is better.",
        tooltip:
          "Platform Spend ($34,079) / Conversions (8,803) = $3.87, rounded to $4",
        calPath: svgCal1.p1b069600,
        chips: ["low-funnel", "ad-spend"],
      },
      {
        label: "Google Ads spend efficiency",
        value: "32%",
        dateRange: "Apr 5 – May 5, 2026",
        explanation:
          "The percentage of Google Ads spend that went to touches on paths that led to a conversion. Low values suggest targeting may be too broad.",
        tooltip: "Spend on converting paths / Total spend = 32%",
        calPath: svgCal1.p1b069600,
        chips: ["touches", "ad-spend", "mid-funnel", "low-funnel"],
      },
      {
        label: "Google Ads funnel rate",
        value: "32.1%",
        dateRange: "Apr 5 – May 5, 2026",
        explanation:
          "The percentage of Google Ads touches that resulted in a conversion. Higher rates indicate higher-intent traffic.",
        tooltip: "Conversions (8,803) / Touches (27,384) = 32.1%",
        calPath: svgCal1.p1b069600,
        chips: ["touches", "low-funnel"],
      },
      {
        label: "Google Ads change from peak week",
        value: "–8%",
        dateRange: "Apr 27 – May 4, 2026",
        explanation:
          "How far the most recent complete week's conversions are below the best week. Indicates recent momentum relative to peak performance.",
        tooltip: "(2,081 – 2,262) / 2,262 = –8%",
        calPath: svgCal1.p1b069600,
        chips: ["low-funnel"],
      },
    ],
  },
  2: {
    conversionEvents: SHARED_FUNNEL_EVENTS,
    details: {
      attributionModel: "Linear",
      attributionDesc:
        "Linear attribution best captures Bing's assist role by distributing credit evenly across all touchpoints, reflecting its 56% middle-touch participation rather than over-crediting endpoints.",
      dataQualityLabel: "Low",
      dataQualityColor: semantic.quality.low,
      dataQualityDesc:
        "Strong insight about channel role with correct data, but limited actionability due to missing spend data. Recommendation is clear and protective.",
      fullRecommendation:
        "Maintain Bing Ads investment given its strong assist role.",
    },
    supporting: [
      {
        label: "Bing Ads multi-channel participation",
        value: "56%",
        dateRange: "Apr 5 – May 5, 2026",
        explanation:
          "The percentage of Bing Ads conversions that involved at least one other channel. High values mean the channel frequently assists in cross-channel journeys.",
        tooltip: "Multi-channel conversions / Total Bing conversions = 56%",
        calPath: svgCal2.p3b7aed80,
        chips: ["low-funnel", "touches", "mid-funnel"],
      },
      {
        label: "Bing Ads linear attribution credit",
        value: "1,876",
        dateRange: "Apr 5 – May 5, 2026",
        explanation:
          "The number of conversions credited to Bing Ads when credit is split evenly across all channels in each path.",
        tooltip: "Count of linear-model credited conversions: 1,876",
        calPath: svgCal2.p3b7aed80,
        chips: ["low-funnel"],
      },
      {
        label: "Bing Ads weekly trend (most recent)",
        value: "462",
        dateRange: "Apr 27 – May 4, 2026",
        explanation:
          "Conversions in the most recent complete week, showing current momentum.",
        tooltip: "Complete week Apr 27: 462 conversions (2% below peak of 473)",
        calPath: svgCal2.p3b7aed80,
        chips: ["low-funnel"],
      },
    ],
  },
  3: {
    conversionEvents: SHARED_FUNNEL_EVENTS,
    details: {
      attributionModel: "First-touch",
      attributionDesc:
        "First-touch attribution best captures Meta's introducer role, where it earns 54% more credit as a path opener than as a closer, revealing its true demand generation contribution.",
      dataQualityLabel: "Medium",
      dataQualityColor: semantic.quality.medium,
      dataQualityDesc:
        "Well-supported by data with specific efficiency targets. Volume is small but above the 20-conversion threshold. Clear actionable recommendation with measurable goal.",
      fullRecommendation:
        "Narrow Meta Ads audiences to lift 3% spend efficiency above 10%.",
    },
    supporting: [
      {
        label: "Meta Ads intro ratio",
        value: "1.5",
        dateRange: "Apr 5 – May 5, 2026",
        explanation:
          "The ratio of first-touch to last-touch credit. Values above 1 indicate the channel introduces new prospects rather than closing them.",
        tooltip: "First-touch credit (114) / Last-touch credit (74) = 1.54, rounded to 1.5",
        calPath: svgCal3.p3b7aed80,
        chips: ["low-funnel"],
      },
      {
        label: "Meta Ads spend efficiency",
        value: "3%",
        dateRange: "Apr 5 – May 5, 2026",
        explanation:
          "The percentage of Meta Ads spend that went to touches on paths leading to a conversion. Very low values suggest targeting is too broad.",
        tooltip: "Spend on converting paths / Total Meta spend ($961) = 3%",
        calPath: svgCal3.p3b7aed80,
        chips: ["low-funnel", "mid-funnel", "ad-spend", "touches"],
      },
      {
        label: "Meta Ads funnel rate",
        value: "3.8%",
        dateRange: "Apr 5 – May 5, 2026",
        explanation:
          "The percentage of Meta Ads touches that resulted in a conversion. Compared to Google Ads at 32.1%, this indicates lower-intent traffic.",
        tooltip: "Conversions (74) / Touches (1,964) = 3.8%",
        calPath: svgCal3.p3b7aed80,
        chips: ["touches", "low-funnel"],
      },
      {
        label: "Meta Ads 30-day volume change",
        value: "–20%",
        dateRange: "Apr 5 – May 5, 2026",
        explanation:
          "Period-over-period change in Meta Ads conversions, comparing the most recent 30 days to the prior 30 days.",
        tooltip: "Pre-computed delta: −20%",
        calPath: svgCal3.p3b7aed80,
        chips: ["low-funnel"],
      },
    ],
  },
};

// ── Stat Card ─────────────────────────────────────────────

function StatCard({ label, value, valueUnit, dateRange, explanation, chips, conversionEvents }: Omit<SupportingCard, "calPath"> & { calPath?: string; conversionEvents?: ConversionEvent[] }) {

  return (
    <div
      className="bg-white rounded-[6px] flex flex-col gap-[14px] px-[19px] py-[17px] relative"
      style={{ border: "1px solid #c9ced4" }}
    >
      {/* ── Data section ── */}
      <div className="flex flex-col gap-[4px] w-full">
        {/* Title */}
        <div className="flex items-center gap-[5px]">
          <span
            className="text-[#5d6875] text-[12px] leading-[16px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
          >
            {label}
          </span>
        </div>

        {/* Value */}
        <p
          className="text-[#1e2125] text-[28px] leading-[36px] tracking-[-0.28px]"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
        >
          {value}{valueUnit && ` ${valueUnit}`}
        </p>

        {/* Date range */}
        <p
          className="text-[#6d7783] text-[12px] leading-[16px]"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
        >
          {dateRange}
        </p>
      </div>

      {/* ── Description section ── */}
      <div className="relative w-full">
        <div
          className="pt-[17px]"
          style={{ borderTop: "1px solid #dde0e4" }}
        >
          <p
            className="text-[#1e2125] text-[13px] leading-[20px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
          >
            {explanation}
          </p>
        </div>
      </div>

      {/* ── Chips ── */}
      {/* TEMPORARILY HIDDEN - will need for later
      {chips.length > 0 && (
        <div className="flex flex-wrap gap-[4px]">
          {chips.map((chip) => (
            <DataChip
              key={chip}
              type={chip}
              eventNames={
                conversionEvents && (chip === "mid-funnel" || chip === "low-funnel")
                  ? conversionEvents
                      .filter((e) => e.funnel === (chip === "mid-funnel" ? "mid" : "low"))
                      .map((e) => e.name)
                  : undefined
              }
            />
          ))}
        </div>
      )}
      */}
    </div>
  );
}

function SupportingDataTab({ cards, conversionEvents }: { cards: SupportingCard[]; conversionEvents: ConversionEvent[] }) {
  return (
    <div className="flex flex-col gap-3 p-8">
      {cards.map((card) => (
        <StatCard key={card.label} {...card} conversionEvents={conversionEvents} />
      ))}
    </div>
  );
}

// ── Details Tab ───────────────────────────────────────────

function DetailsTab({ content }: { content: DetailsContent }) {
  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Recommendation box */}
      <div className="bg-[#f4f5fb] rounded-[6px] flex flex-col gap-2 px-4 py-5">
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
          className="text-[#1e2125] text-[14px] leading-[22px]"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
        >
          {content.fullRecommendation}
        </p>
      </div>

      {/* Attribution Model */}
      <div className="flex flex-col gap-[10px]">
        <p
          className="text-[#6d7783] text-[12px] leading-[16px] tracking-[0.12px]"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
        >
          ATTRIBUTION MODEL
        </p>
        <div className="flex flex-col gap-[6px] pl-[6px]">
          <p
            className="text-[#1e2125] text-[16px] leading-[24px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600 }}
          >
            {content.attributionModel}
          </p>
          <p
            className="text-[#1e2125] text-[14px] leading-[22px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontStyle: "italic" }}
          >
            {content.attributionDesc}
          </p>
        </div>
      </div>

      {/* Data Quality */}
      <div className="flex flex-col gap-[10px]">
        <p
          className="text-[#6d7783] text-[12px] leading-[16px] tracking-[0.12px]"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
        >
          DATA QUALITY
        </p>
        <div className="flex flex-col gap-[6px] pl-[6px]">
          <div className="flex items-center gap-[6px]">
            <QualityDot color={content.dataQualityColor} />
            <p
              className="text-[16px] leading-[24px]"
              style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, color: content.dataQualityColor }}
            >
              {content.dataQualityLabel}
            </p>
          </div>
          <p
            className="text-[#1e2125] text-[14px] leading-[22px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
          >
            {content.dataQualityDesc}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Main Drawer ────────────────────────────────────────────

export function InsightDrawer({ isOpen, data, onClose }: InsightDrawerProps) {
  const [activeTab, setActiveTab] = useState<"details" | "supporting">("details");

  useEffect(() => {
    if (isOpen) setActiveTab("details");
  }, [isOpen, data?.id]);

  const content = data ? (cardContent[data.id] ?? cardContent[1]) : null;

  return (
    <AnimatePresence>
      {isOpen && data && content && (
        <>
          {/* Overlay */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 cursor-default"
            style={{ backgroundColor: "rgba(17, 24, 39, 0.35)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            key="drawer"
            className="fixed top-0 right-0 h-full z-50 bg-white flex flex-col"
            style={{
              width: "439px",
              maxWidth: "90vw",
              boxShadow: "-8px 0px 24px 0px rgba(17,24,39,0.12)",
              borderLeft: "1px solid #c9ced4",
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
          >
            {/* Header */}
            <div className="px-[33px] pt-[33px] pb-0 border-b border-[#c9ced4] shrink-0">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-4 flex-1 min-w-0">
                  <p
                    className="text-[#1e2125] text-[24px] leading-[32px]"
                    style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
                  >
                    {data.title}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="flex items-center justify-center w-8 h-8 rounded-[6px] hover:bg-[#f4f5fb] transition-colors shrink-0 mt-1 cursor-pointer"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex items-end gap-0 mt-[32px]">
                {(["details", "supporting"] as const).map((tab) => (
                  <button
                    key={tab}
                    className={`relative px-0 pb-[11px] flex items-center cursor-pointer ${tab === "details" ? "mr-6" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <span
                      className="text-[14px] leading-[20px]"
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 500,
                        color: activeTab === tab ? "#1e2125" : "#6d7783",
                      }}
                    >
                      {tab === "details" ? "Details" : "Supporting Data"}
                    </span>
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-t-[2px] bg-[#3f51b5]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <div className="flex-1 overflow-y-auto">
              {activeTab === "details" ? (
                <DetailsTab content={content.details} />
              ) : (
                <SupportingDataTab cards={content.supporting} conversionEvents={content.conversionEvents} />
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}