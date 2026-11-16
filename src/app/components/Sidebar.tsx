import React from "react";
import svgPaths from "../../imports/FreshpaintInsights/svg-qfbaw5fbvy";

// Freshpaint logo icon
function FreshpaintIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <path d={svgPaths.p2bbc3df0} fill="#61DABF" />
        <path d={svgPaths.pb34e088} stroke="#23303E" strokeWidth="0.9" />
      </svg>
    </div>
  );
}

// Chevron down icon
function ChevronDown({ opacity = "0.4" }: { opacity?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 9.167 5.167" fill="none">
      <path d={svgPaths.p13740700} stroke="white" strokeOpacity={opacity} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
    </svg>
  );
}

// Chevron right (breadcrumb)
function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 4.521 8.021" fill="none">
      <path d={svgPaths.p102e9680} stroke="#6D7783" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.02083" />
    </svg>
  );
}

// NEW badge
function NewBadge() {
  return (
    <div className="bg-[#eefbf8] rounded-[4px] px-1.5 py-0.5 flex items-center gap-0.5">
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
        <path d={svgPaths.p66b5200} stroke="#186756" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6875" />
        <path d="M9.16667 0.916667V2.75" stroke="#186756" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6875" />
        <path d="M10.0833 1.83333H8.25" stroke="#186756" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6875" />
        <path d={svgPaths.p1333c180} stroke="#186756" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.6875" />
      </svg>
      <span className="text-[#186756] text-[10px] font-medium tracking-[0.35px] uppercase leading-[10px]" style={{ fontFamily: "'Roboto', sans-serif" }}>
        NEW
      </span>
    </div>
  );
}

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  hasChevron?: boolean;
  badge?: React.ReactNode;
  active?: boolean;
  indent?: boolean;
}

function NavItem({ label, icon, hasChevron = false, badge, active = false, indent = false }: NavItemProps) {
  return (
    <div
      className={`h-[40px] relative rounded-[8px] w-full flex items-center px-3 gap-2 cursor-pointer hover:bg-[rgba(255,255,255,0.08)] transition-colors ${active ? "bg-[#535b67]" : ""}`}
      style={{ paddingLeft: indent ? "28px" : "12px" }}
    >
      {active && <div className="absolute inset-0 rounded-[8px] border border-[#3b4552]" />}
      <div className="flex items-center justify-center w-5 h-5 shrink-0">
        {icon}
      </div>
      <span className="flex-1 text-[14px] text-white tracking-[0.35px] leading-normal whitespace-nowrap" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
        {label}
      </span>
      {badge}
      {hasChevron && (
        <div className="shrink-0">
          <ChevronDown opacity="0.4" />
        </div>
      )}
    </div>
  );
}

// Nav icons using SVG paths from Figma
function SetupIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d={svgPaths.p2535ca80} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d={svgPaths.pf238580} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d={svgPaths.p27453880} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d={svgPaths.p9e34f00} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
    </svg>
  );
}

function EventsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M6 1.5V4.5" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d="M12 1.5V4.5" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d={svgPaths.p13693a10} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d="M2.25 7.5H15.75" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
    </svg>
  );
}

function IntegrationsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 16.5V12.75" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d="M11.25 6V1.5" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d={svgPaths.pd3b5a00} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d="M6.75 6V1.5" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3.75 15.75V11.25" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d="M9 15.75V2.25" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d="M14.25 15.75V6.75" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
    </svg>
  );
}

function InsightsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M12 5.25H16.5V9.75" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d={svgPaths.p305bd600} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
    </svg>
  );
}

function AudiencesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d={svgPaths.pd2eb480} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d={svgPaths.p9b1580} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d={svgPaths.p226d9800} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d={svgPaths.p19685c00} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
    </svg>
  );
}

function ProfilesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M12 8.25L13.5 9.75L16.5 6.75" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d={svgPaths.pd2eb480} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d={svgPaths.p19685c00} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
    </svg>
  );
}

function ConsentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d={svgPaths.p3840bd70} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d="M6.75 9L8.25 10.5L11.25 7.5" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d={svgPaths.p264765d0} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d={svgPaths.p23622800} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
    </svg>
  );
}

function WebTrackersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M13.5 12L16.5 9L13.5 6" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d="M4.5 6L1.5 9L4.5 12" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d="M10.875 3L7.125 15" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
    </svg>
  );
}

function InternalToolsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <clipPath id="clip-internal">
        <rect width="18" height="18" fill="white" />
      </clipPath>
      <g clipPath="url(#clip-internal)">
        <path d={svgPaths.p11fd6e00} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      </g>
    </svg>
  );
}

function WTMIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d={svgPaths.p14b18400} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
    </svg>
  );
}

function FreshpaintAIIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <clipPath id="clip-ai">
        <rect width="18" height="18" fill="white" />
      </clipPath>
      <g clipPath="url(#clip-ai)">
        <path d={svgPaths.p2d67c60} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
        <path d="M15 1.5V4.5" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
        <path d="M16.5 3H13.5" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
        <path d={svgPaths.p6f9ce00} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      </g>
    </svg>
  );
}

function SystemStatusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <clipPath id="clip-status">
        <rect width="18" height="18" fill="white" />
      </clipPath>
      <g clipPath="url(#clip-status)">
        <path d={svgPaths.p1e4f5a80} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      </g>
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d={svgPaths.p2802f40} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
      <path d={svgPaths.p254f3200} stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
    </svg>
  );
}

export function Sidebar() {
  return (
    <aside
      className="w-[240px] shrink-0 bg-[#23303e] flex flex-col h-full overflow-y-auto"
      style={{ scrollbarWidth: "none" }}
    >
      {/* Top: Logo + Workspace */}
      <div className="px-4 pt-4 pb-2">
        {/* Logo row */}
        <div className="flex items-center justify-between h-[68px]">
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center justify-center w-6 h-6 shrink-0">
              <FreshpaintIcon />
            </div>
            <span className="text-white text-[16px] leading-[19px] whitespace-nowrap" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
              Freshpaint
            </span>
          </div>
          {/* Collapse sidebar button */}
          <button className="w-10 h-10 flex items-center justify-center rounded-[6px] hover:bg-[rgba(255,255,255,0.08)] transition-colors">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d={svgPaths.p1a8e7980} stroke="white" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
              <path d="M6.75 2.25V15.75" stroke="white" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
            </svg>
          </button>
        </div>

        {/* Workspace selector */}
        <div className="flex items-center gap-3 px-[14px] py-[10px] rounded-[8px] border border-[rgba(255,255,255,0.1)] cursor-pointer hover:bg-[rgba(255,255,255,0.05)] transition-colors">
          {/* Grid icon */}
          <div className="flex items-center justify-center w-[18px] h-[18px] shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d={svgPaths.p268ee300} stroke="white" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
              <path d={svgPaths.p4e65200} stroke="white" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
              <path d="M0.65625 0.65625H15.6562" transform="translate(1 8)" stroke="white" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
            </svg>
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-[rgba(255,255,255,0.6)] text-[16px] leading-[24px] whitespace-nowrap" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
              Main
            </span>
            <span className="text-white text-[16px] leading-[24px] whitespace-nowrap" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
              Development
            </span>
          </div>
          <div className="shrink-0">
            <ChevronDown opacity="0.5" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[rgba(255,255,255,0.15)] mx-0 my-0" />

      {/* Nav Items */}
      <div className="flex flex-col gap-[3px] px-[6px] pt-[9px] pb-2 flex-1">
        <NavItem label="Setup" icon={<SetupIcon />} />
        <NavItem label="Events" icon={<EventsIcon />} hasChevron />
        <NavItem label="Integrations" icon={<IntegrationsIcon />} hasChevron />
        <NavItem label="Analytics" icon={<AnalyticsIcon />} hasChevron />

        {/* Insights expanded section */}
        <NavItem label="Insights" icon={<InsightsIcon />} badge={<NewBadge />} hasChevron />

        {/* Expanded sub-items */}
        <div className="bg-[#3b4552] rounded-[8px] border border-[#3b4552] flex flex-col gap-[2px] pl-[28px]">
          {[
            { label: "Attribution", active: true },
            { label: "Ad Performance", active: false },
            { label: "Web Analytics", active: false },
            { label: "Funnels", active: false },
            { label: "Heatmaps", active: false },
            { label: "Session Replay", active: false },
            { label: "Survey", active: false },
          ].map(({ label, active }) => (
            <div
              key={label}
              className={`h-[40px] rounded-bl-[8px] rounded-tl-[8px] flex items-center px-3 cursor-pointer hover:bg-[rgba(255,255,255,0.06)] transition-colors ${active ? "bg-[#535b67] border border-[#3b4552]" : ""}`}
            >
              <span className="text-[14px] text-white tracking-[0.35px] leading-normal whitespace-nowrap" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        <NavItem label="Audiences" icon={<AudiencesIcon />} hasChevron />
        <NavItem label="Profiles" icon={<ProfilesIcon />} badge={<NewBadge />} />
        <NavItem label="Consent" icon={<ConsentIcon />} badge={<NewBadge />} hasChevron />
        <NavItem label="Video" icon={<VideoIcon />} />
        <NavItem label="Web Trackers" icon={<WebTrackersIcon />} />
        <NavItem label="Internal Tools" icon={<InternalToolsIcon />} hasChevron />
        <NavItem label="WTM Internal" icon={<WTMIcon />} hasChevron />
      </div>

      {/* Divider */}
      <div className="h-px bg-[rgba(255,255,255,0.15)]" />

      {/* Bottom nav */}
      <div className="flex flex-col gap-[3px] px-[6px] py-[9px] bg-[#23303e]">
        <NavItem label="Freshpaint AI" icon={<FreshpaintAIIcon />} />
        <NavItem label="System Status" icon={<SystemStatusIcon />} />
        <NavItem label="Settings" icon={<SettingsIcon />} hasChevron />
      </div>
    </aside>
  );
}