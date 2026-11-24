// Small shared UI pieces used across the screens (visual only, no logic).
import type { ReactNode } from "react";

export const font = "font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#1E2530]";

export const btnDark =
  "inline-flex min-h-11 items-center justify-center rounded-xl bg-[#1E2530] px-4.5 text-sm font-semibold text-white no-underline cursor-pointer border-0";
export const btnYellow =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#F6D95B] px-4.5 text-sm font-bold text-[#1E2530] no-underline cursor-pointer border-0";
export const btnOutline =
  "inline-flex min-h-11 items-center justify-center rounded-xl border border-[#C9D0DB] bg-white px-4 text-sm font-semibold text-[#1E2530] no-underline cursor-pointer";
export const btnBlue =
  "inline-flex min-h-11 items-center justify-center rounded-xl bg-[#C5E9F9] px-4 text-sm font-bold text-[#1E2530] cursor-pointer border-0";
export const btnMint =
  "inline-flex min-h-11 items-center justify-center rounded-xl bg-[#E1F5EE] px-4 text-sm font-semibold text-[#0A5F54] no-underline cursor-pointer border-0";

export const selectCls =
  "min-h-11 rounded-xl border border-[#C9D0DB] bg-[#F4F6FA] px-3 text-sm text-[#1E2530] font-[inherit]";
export const inputCls =
  "min-h-11.5 w-full rounded-xl border border-[#C9D0DB] bg-white px-3.5 text-sm font-normal text-[#1E2530] font-[inherit] outline-none focus:border-[#0B5F85]";
export const fieldLabel = "flex flex-col gap-1.5 text-[13px] font-semibold";

export const tableHead = "rounded-xl bg-[#E6F4FB] text-[13px] font-semibold";
export const tableRow = "border-b border-[#EEF1F6] text-sm";

export const avatars = ["bg-[#D9D4FB]", "bg-[#C5E9F9]", "bg-[#F9E38A]"];
export const initials = (name: string) =>
  name.replace(/^(Mr\.|Mrs\.|Miss|Sir)\s/, "").split(" ").map((p) => p[0]).slice(0, 2).join("");
export const rs = (n: number) => "Rs " + n.toLocaleString("en-US");

export type Tone = "green" | "red" | "amber" | "blue" | "mint" | "grey" | "purple";
export const tone: Record<Tone, string> = {
  green: "bg-[#DDF5E9] text-[#0B6B45]",
  red: "bg-[#FDE7E5] text-[#A8261E]",
  amber: "bg-[#FDF0C8] text-[#6E4700]",
  blue: "bg-[#E6F4FB] text-[#124A63]",
  mint: "bg-[#E1F5EE] text-[#0A5F54]",
  grey: "bg-[#EEF1F6] text-[#566170]",
  purple: "bg-[#ECEAFB] text-[#3A3466]",
};

export function Pill({ t, children }: { t: Tone; children: ReactNode }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-1.25 text-xs font-bold whitespace-nowrap ${tone[t]}`}>
      {children}
    </span>
  );
}

/** Page wrapper that sits inside Layout (below the Header). */
export function Page({ children }: { children: ReactNode }) {
  return <div className={`flex flex-col gap-5 px-6 pb-6 ${font}`}>{children}</div>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`flex flex-col gap-4 rounded-2xl bg-white p-6 ${className}`}>{children}</section>;
}

export function PageTitle({ title, sub, children }: { title: string; sub?: ReactNode; children?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div className="flex flex-col gap-1">
        <h1 className="m-0 text-2xl font-bold">{title}</h1>
        {sub && <p className="m-0 text-sm text-[#566170]">{sub}</p>}
      </div>
      {children && <div className="flex flex-wrap items-center gap-2.5">{children}</div>}
    </div>
  );
}

type StatColor = "blue" | "purple" | "yellow" | "mint" | "white" | "danger";
const statBg: Record<StatColor, [string, string]> = {
  blue: ["bg-[#C5E9F9]", "text-[#124A63]"],
  purple: ["bg-[#D9D4FB]", "text-[#3A3466]"],
  yellow: ["bg-[#F9E38A]", "text-[#5C4500]"],
  mint: ["bg-[#E1F5EE]", "text-[#0A5F54]"],
  white: ["bg-white", "text-[#566170]"],
  danger: ["bg-white border border-[#F3C2BD]", "text-[#A8261E]"],
};

export function Stat({ c, label, value, note }: { c: StatColor; label: string; value: ReactNode; note?: ReactNode }) {
  const [bg, fg] = statBg[c];
  return (
    <div className={`flex flex-col gap-1.5 rounded-2xl px-5 py-4.5 ${bg}`}>
      <span className={`text-[13px] font-semibold ${fg}`}>{label}</span>
      <span className="text-[28px] font-bold text-[#1E2530]">{value}</span>
      {note && <span className={`text-[13px] ${c === "danger" ? "text-[#566170]" : fg}`}>{note}</span>}
    </div>
  );
}

export function StatGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-[repeat(auto-fit,minmax(min(210px,100%),1fr))] gap-4">{children}</div>;
}

export function Avatar({ name, i = 0, size = "size-10" }: { name: string; i?: number; size?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`flex ${size} flex-none items-center justify-center rounded-full text-[13px] font-bold ${avatars[i % 3]}`}
    >
      {initials(name)}
    </span>
  );
}

/** Toggle switch (visual; controlled by parent if needed). */
export function Switch({ on, label, onChange }: { on: boolean; label: string; onChange?: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onChange}
      className={`relative h-7 w-12 flex-none cursor-pointer rounded-full border-0 transition-colors ${on ? "bg-[#1D9E75]" : "bg-[#C9D0DB]"}`}
    >
      <span className={`absolute top-1 size-5 rounded-full bg-white transition-all ${on ? "left-6" : "left-1"}`} />
    </button>
  );
}
