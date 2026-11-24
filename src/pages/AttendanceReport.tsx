import { Link } from "react-router";
import { Card, Page, Stat, StatGrid, btnDark, btnOutline, selectCls } from "../components/ui";

const cellTone: Record<string, string> = {
  P: "bg-[#DDF5E9] text-[#0B6B45]",
  A: "bg-[#A8261E] text-white",
  L: "bg-[#FDF0C8] text-[#6E4700]",
  S: "bg-[#EEF1F6] text-[#566170]",
  "": "bg-[#F8F9FB] text-[#566170]",
};
const sundays = new Set([1, 8, 15, 22, 29]);
const days = Array.from({ length: 30 }, (_, i) => i + 1);

const data: [string, string][] = [
  ["Hamza Ali", "SPPPPPPSPAPPPP"],
  ["Sana Malik", "SPPPPPPSPPPPPP"],
  ["Ahmad Hassan", "SPPAPPPSPPPAPP"],
  ["Noor Fatima", "SPPPPPPSPPPPPP"],
  ["Saad Mehmood", "SPAPPPPSPPAPPA"],
  ["Iqra Javed", "SPPPPLPSPPPPPP"],
  ["Danish Rafiq", "SPPPPPPSPPPPPP"],
];

const rows = data.map(([name, s]) => {
  const cells = days.map((d) => (d <= s.length ? s[d - 1] : sundays.has(d) ? "S" : ""));
  const pct = Math.round((cells.filter((c) => c === "P").length / 12) * 100);
  return { name, cells, pct };
});

const legend: [string, string][] = [["P", "Present"], ["A", "Absent"], ["L", "Leave"], ["S", "Sunday"]];

export default function AttendanceReport() {
  return (
    <div className="flex flex-col gap-5 px-6 pb-6 font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#1E2530]">
      <StatGrid>
        <Stat c="blue" label="Class 5 average" value="92%" note="77 of 84 student days" />
        <Stat c="purple" label="Working days so far" value="12" note="1 to 14 November, 2 Sundays" />
        <Stat c="yellow" label="Full attendance" value="3 students" note="Sana, Noor and Danish" />
        <Stat c="danger" label="Below 80%" value="1 student" note="Saad Mehmood, 75%" />
      </StatGrid>

      <Card className="gap-4.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="m-0 text-[22px] font-bold">Attendance register</h1>
          <div className="flex flex-wrap items-center gap-2.5">
            <label className="flex items-center gap-1.5 text-[13px] text-[#566170]">Month
              <select className={selectCls}><option>November 2026</option><option>October 2026</option></select>
            </label>
            <label className="flex items-center gap-1.5 text-[13px] text-[#566170]">Class
              <select className={selectCls}><option>Class 5</option><option>KG</option><option>Class 1</option></select>
            </label>
            <button type="button" className={btnOutline}>Download PDF</button>
            <Link to="/attendance" className={btnDark}>Mark today</Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="flex min-w-265 flex-col">
            <div className="flex items-center gap-1 rounded-xl bg-[#E6F4FB] px-3.5 py-3 text-xs font-semibold">
              <span className="w-42.5 flex-none text-[13px]">Student</span>
              {days.map((d) => (
                <span key={d} className={`min-w-6 flex-1 text-center ${sundays.has(d) ? "text-[#566170]" : ""}`}>{d}</span>
              ))}
              <span className="w-14 flex-none text-right text-[13px]">Total</span>
            </div>
            {rows.map((r) => (
              <div key={r.name} className="flex items-center gap-1 border-b border-[#EEF1F6] px-3.5 py-2.5">
                <span className="w-42.5 flex-none text-sm font-semibold">{r.name}</span>
                {r.cells.map((c, i) => (
                  <span key={i} className={`flex h-7 min-w-6 flex-1 items-center justify-center rounded-[7px] text-xs font-bold ${cellTone[c]}`}>{c}</span>
                ))}
                <span className={`w-14 flex-none text-right text-sm font-bold ${r.pct < 80 ? "text-[#A8261E]" : ""}`}>{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4.5 text-[13px] text-[#3B4654]">
          {legend.map(([m, label]) => (
            <span key={m} className="inline-flex items-center gap-2">
              <span className={`inline-flex size-6 items-center justify-center rounded-[7px] text-xs font-bold ${cellTone[m]}`}>{m}</span>
              {label}
            </span>
          ))}
          <span>Empty boxes are days that have not come yet.</span>
        </div>
      </Card>
    </div>
  );
}
