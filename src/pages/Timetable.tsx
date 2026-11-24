import { useState } from "react";
import { Page, PageTitle, btnDark, btnOutline, selectCls } from "../components/ui";

const S: Record<string, [string, string, string]> = {
  E: ["English", "Miss Sadia", "#C5E9F9"],
  M: ["Mathematics", "Sir Kashif", "#D9D4FB"],
  U: ["Urdu", "Miss Mahnoor", "#F9E38A"],
  S: ["Science", "Sir Imran", "#CFEFE3"],
  I: ["Islamiat", "Miss Farah", "#EFEDFD"],
  T: ["Social Studies", "Miss Zara", "#FDF0C8"],
  C: ["Computer", "Sir Bilal", "#E6F4FB"],
  G: ["Games", "Sir Bilal", "#EEF1F6"],
  B: ["Break", "", "#F8F9FB"],
};

const periods: [string, string][] = [
  ["Period 1", "8:00"], ["Period 2", "8:40"], ["Period 3", "9:20"], ["Break", "10:00"],
  ["Period 4", "10:30"], ["Period 5", "11:10"], ["Period 6", "11:50"],
];

const plan: [string, string][] = [
  ["Monday", "EMUBSIT"], ["Tuesday", "MMEBUSC"], ["Wednesday", "EUMBSTI"],
  ["Thursday", "MESBUIC"], ["Friday", "IEMBUTG"], ["Saturday", "UMEBSGG"],
];

// Tuesday, period 2 has a clash
const isClash = (day: number, col: number) => day === 1 && col === 1;

const counts: Record<string, number> = {};
plan.forEach(([, p]) => p.split("").forEach((k) => k !== "B" && (counts[k] = (counts[k] ?? 0) + 1)));

const grid = "grid grid-cols-[90px_repeat(3,minmax(0,1fr))_70px_repeat(3,minmax(0,1fr))] gap-1.5";

export default function Timetable() {
  const [view, setView] = useState("By class");

  return (
    <Page>
      <PageTitle title="Timetable" sub="Class 5-A, class teacher Miss Sadia">
        <div role="group" aria-label="View" className="flex gap-1.5">
          {["By class", "By teacher"].map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={view === v}
              onClick={() => setView(v)}
              className={`min-h-11 cursor-pointer rounded-full border px-4 text-sm font-semibold text-[#1E2530] ${view === v ? "border-[#8ED0EE] bg-[#C5E9F9]" : "border-[#C9D0DB] bg-white"}`}
            >
              {v}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-1.5 text-[13px] text-[#566170]">Class
          <select className={selectCls}><option>Class 5, Section A</option><option>Class 5, Section B</option></select>
        </label>
        <button type="button" className={btnOutline}>Print</button>
        <button type="button" className={btnDark}>Edit timetable</button>
      </PageTitle>

      <div className="flex flex-wrap items-center justify-between gap-2.5 rounded-xl bg-[#FDF0C8] px-4 py-3 text-sm">
        <span><strong>1 clash:</strong> Sir Kashif is placed in Class 5-A and Class 6-A on Tuesday, period 2.</span>
        <button type="button" className="min-h-11 cursor-pointer rounded-[10px] border-0 bg-[#1E2530] px-3.5 text-[13px] font-semibold text-white">Fix clash</button>
      </div>

      <section className="overflow-x-auto rounded-2xl bg-white p-5">
        <div className="flex min-w-225 flex-col gap-1.5">
          <div className={`${grid} text-xs font-semibold text-[#3B4654]`}>
            <span />
            {periods.map(([name, time]) => (
              <span key={name} className="flex flex-col gap-px rounded-[10px] bg-[#E6F4FB] px-1.5 py-2 text-center">
                <span className="text-[#1E2530]">{name}</span>
                <span className="font-medium">{time}</span>
              </span>
            ))}
          </div>
          {plan.map(([day, p], di) => (
            <div key={day} className={grid}>
              <span className="flex items-center text-sm font-bold">{day}</span>
              {p.split("").map((k, ci) => {
                const [sub, who, bg] = S[k];
                return (
                  <div
                    key={ci}
                    className="flex min-h-19 flex-col justify-center gap-0.75 rounded-[10px] border-2 p-2.5"
                    style={{ background: bg, borderColor: isClash(di, ci) ? "#A8261E" : bg }}
                  >
                    <span className="text-[13px] font-bold">{sub}</span>
                    <span className="text-xs text-[#3B4654]">{who}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-x-4.5 gap-y-2.5 text-[13px] text-[#3B4654]">
        {"EMUSITCG".split("").map((k) => (
          <span key={k} className="inline-flex items-center gap-2">
            <span className="size-4.5 rounded-md border border-[#C9D0DB]" style={{ background: S[k][2] }} />
            {S[k][0]}: {counts[k]} per week
          </span>
        ))}
      </div>
    </Page>
  );
}
