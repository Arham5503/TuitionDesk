import type { ReactNode } from "react";
import { Link } from "react-router";

// ---- Data (static for now; replace with API data later) ----
const EXPECTED = 128000;

const months = [
  { name: "Jun", amount: 104000 },
  { name: "Jul", amount: 98500 },
  { name: "Aug", amount: 112000 },
  { name: "Sep", amount: 118500 },
  { name: "Oct", amount: 123500 },
  { name: "Nov", amount: 112500 },
];

const classes = [
  { name: "KG", present: 5, total: 6 },
  { name: "Class 1", present: 7, total: 7 },
  { name: "Class 2", present: 7, total: 8 },
  { name: "Class 3", present: 6, total: 7 },
  { name: "Class 4", present: 8, total: 8 },
  { name: "Class 5", present: 6, total: 7 },
  { name: "Class 6", present: 7, total: 8 },
  { name: "Class 7", present: 5, total: 6 },
  { name: "Class 8", present: 7, total: 7 },
];

const overdue = [
  { ini: "BA", name: "Bilal Ahmed", cls: "Class 7", days: 39, amt: "Rs 5,000", av: "bg-[#D9D4FB]" },
  { ini: "UT", name: "Usman Tariq", cls: "Class 8", days: 9, amt: "Rs 2,500", av: "bg-[#C5E9F9]" },
  { ini: "HA", name: "Hamza Ali", cls: "Class 5", days: 9, amt: "Rs 2,000", av: "bg-[#F9E38A]" },
  { ini: "HS", name: "Hira Shah", cls: "Class 3", days: 9, amt: "Rs 2,000", av: "bg-[#D9D4FB]" },
  { ini: "MN", name: "Maryam Noor", cls: "KG", days: 9, amt: "Rs 1,500", av: "bg-[#C5E9F9]" },
];

const status = {
  Read: "bg-[#E1F5EE] text-[#0A5F54]",
  Delivered: "bg-[#EAF6FC] text-[#124A63]",
  Paid: "bg-[#DDF5E9] text-[#0B6B45]",
  "Not delivered": "bg-[#FDE7E5] text-[#A8261E]",
} as const;

const activity: { title: string; sub: string; st: keyof typeof status }[] = [
  { title: "Fee reminder to father of Hamza Ali", sub: "Today 9:00 AM, 3rd overdue reminder, Rs 2,000", st: "Read" },
  { title: "Fee reminder to father of Usman Tariq", sub: "Today 9:00 AM, 3rd overdue reminder, Rs 2,500", st: "Delivered" },
  { title: "Receipt to mother of Ayesha Khan", sub: "Yesterday 5:42 PM, Rs 2,000 received", st: "Paid" },
  { title: "Fee reminder to father of Bilal Ahmed", sub: "Today 9:00 AM, Rs 5,000, call him instead", st: "Not delivered" },
  { title: "Absence notice to father of Ali Raza", sub: "Today 3:20 PM, Class 6", st: "Read" },
];

// ---- Small building blocks ----
function StatCard({
  label, value, extra, note, className, labelColor, noteColor,
}: {
  label: string; value: string; extra?: string; note: string;
  className: string; labelColor: string; noteColor: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 rounded-2xl px-5 py-4.5 ${className}`}>
      <span className={`text-[13px] font-semibold ${labelColor}`}>{label}</span>
      <span className="text-[30px] font-bold">
        {value}
        {extra && <span className={`ml-1.5 text-base font-semibold ${labelColor}`}>{extra}</span>}
      </span>
      <span className={`text-[13px] ${noteColor}`}>{note}</span>
    </div>
  );
}

function Card({ title, right, children }: { title: string; right: ReactNode; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3 rounded-2xl bg-white p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="m-0 text-lg font-bold">{title}</h2>
        {right}
      </div>
      {children}
    </section>
  );
}

const linkCls = "text-[13px] font-semibold text-[#0B5F85] hover:text-[#08445F]";

// ---- Page ----
export default function Dashboard() {
  return (
    <div className="flex flex-col gap-5 px-6 pb-6 font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#1E2530]">
      {/* Greeting + actions */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="m-0 text-[26px] font-bold">Assalam o Alaikum, Little Genius</h1>
          <p className="m-0 text-sm text-[#566170]">
            Saturday, 14 November 2026. Here is where the center stands today.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <Link
            to="/attendance"
            className="inline-flex min-h-11 items-center rounded-xl border border-[#D9DEE7] bg-white px-4.5 text-sm font-semibold text-[#1E2530] no-underline"
          >
            Mark attendance
          </Link>
          <Link
            to="/fees"
            className="inline-flex min-h-11 items-center rounded-xl bg-[#1E2530] px-4.5 text-sm font-semibold text-white no-underline"
          >
            Record payment
          </Link>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(210px,100%),1fr))] gap-4">
        <StatCard label="Active students" value="64" note="KG to Class 8, 9 classes"
          className="bg-[#D9D4FB]" labelColor="text-[#3A3466]" noteColor="text-[#3A3466]" />
        <StatCard label="Present today" value="58" extra="of 64" note="91% attendance, 6 absent"
          className="bg-[#C5E9F9]" labelColor="text-[#124A63]" noteColor="text-[#124A63]" />
        <StatCard label="Collected in November" value="Rs 112,500" note="88% of Rs 128,000 expected"
          className="bg-[#F9E38A]" labelColor="text-[#5C4500]" noteColor="text-[#5C4500]" />
        <StatCard label="Overdue fees" value="Rs 18,000" note="9 students, reminders running"
          className="border border-[#F3C2BD] bg-white" labelColor="text-[#A8261E]" noteColor="text-[#566170]" />
      </div>

      {/* Fee chart + attendance by class */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] gap-4">
        <Card title="Fee collection" right={<span className="text-[13px] text-[#566170]">Last 6 months, Rs</span>}>
          <div className="flex h-50 items-end gap-4.5 px-1">
            {months.map((m, i) => (
              <div key={m.name} className="flex flex-1 flex-col items-center gap-1.5">
                <span className="text-xs font-semibold">{m.amount / 1000}k</span>
                <div
                  className={`w-full max-w-14 rounded-t-[10px] rounded-b-sm ${i === months.length - 1 ? "bg-[#F6D95B]" : "bg-[#C9C3F7]"}`}
                  style={{ height: Math.round((m.amount / EXPECTED) * 150) }}
                />
                <span className="text-[13px] text-[#566170]">{m.name}</span>
              </div>
            ))}
          </div>
          <p className="m-0 text-[13px] text-[#566170]">
            November is still open. Rs 15,500 of this month and Rs 2,500 from October are unpaid.
          </p>
        </Card>

        <Card title="Today's attendance by class" right={<Link to="/attendance" className={linkCls}>Open register</Link>}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(190px,100%),1fr))] gap-x-5 gap-y-2.5">
            {classes.map((c) => (
              <div key={c.name} className="flex flex-col gap-1.5">
                <div className="flex justify-between text-[13px]">
                  <span className="font-semibold">{c.name}</span>
                  <span className="text-[#566170]">{c.present} / {c.total}</span>
                </div>
                <div className="h-2 rounded-lg bg-[#EEF1F6]">
                  <div className="h-2 rounded-lg bg-[#8ED0EE]" style={{ width: `${Math.round((c.present / c.total) * 100)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Overdue list + reminder activity */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] gap-4">
        <Card title="Overdue fees" right={<Link to="/fees" className={linkCls}>View all 9</Link>}>
          <div>
            {overdue.map((o) => (
              <div key={o.name} className="flex items-center gap-3 border-t border-[#EEF1F6] py-2">
                <span aria-hidden="true" className={`flex size-9.5 flex-none items-center justify-center rounded-full text-[13px] font-bold ${o.av}`}>
                  {o.ini}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="text-sm font-semibold">{o.name}</span>
                  <span className="text-xs text-[#566170]">{o.cls}, {o.days} days overdue</span>
                </div>
                <span className="text-sm font-bold text-[#A8261E]">{o.amt}</span>
                <Link
                  to="/reminders"
                  className="inline-flex min-h-9 items-center rounded-[10px] bg-[#E1F5EE] px-3 text-[13px] font-semibold text-[#0A5F54] no-underline"
                >
                  Remind
                </Link>
              </div>
            ))}
          </div>
        </Card>

        <Card title="WhatsApp reminder activity" right={<Link to="/reminders" className={linkCls}>Open reminders</Link>}>
          <div>
            {activity.map((a) => (
              <div key={a.title} className="flex items-center gap-3 border-t border-[#EEF1F6] py-2">
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="text-sm font-semibold">{a.title}</span>
                  <span className="text-xs text-[#566170]">{a.sub}</span>
                </div>
                <span className={`rounded-full px-2.5 py-1.25 text-xs font-semibold ${status[a.st]}`}>{a.st}</span>
              </div>
            ))}
          </div>
          <p className="m-0 text-[13px] text-[#566170]">
            Next automatic run: Tuesday 17 November, 9:00 AM, to parents who are still unpaid.
          </p>
        </Card>
      </div>
    </div>
  );
}
