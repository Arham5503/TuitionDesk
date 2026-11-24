import { Link } from "react-router";
import { Card, Page, Pill, btnDark, btnMint, btnOutline, tableHead, tableRow, type Tone } from "../components/ui";

const marks = "SPPPPPPSPAPPPP".split("");
const dayTone: Record<string, string> = {
  P: "bg-[#DDF5E9] text-[#0B6B45]",
  A: "bg-[#FDE7E5] text-[#A8261E]",
  S: "bg-[#EEF1F6] text-[#566170]",
};

const fees: { month: string; on: string; how: string; st: string; t: Tone }[] = [
  { month: "November 2026", on: "Not paid", how: "", st: "Overdue", t: "red" },
  { month: "October 2026", on: "7 Oct 2026", how: "Cash", st: "Paid late", t: "amber" },
  { month: "September 2026", on: "4 Sep 2026", how: "JazzCash", st: "Paid", t: "green" },
  { month: "August 2026", on: "5 Aug 2026", how: "Cash", st: "Paid", t: "green" },
  { month: "July 2026", on: "3 Jul 2026", how: "Cash", st: "Paid", t: "green" },
];

const log: { when: string; what: string; st: string; t: Tone }[] = [
  { when: "14 Nov, 9:00", what: "3rd overdue reminder, Rs 2,000", st: "Read", t: "mint" },
  { when: "11 Nov, 9:00", what: "2nd overdue reminder, Rs 2,000", st: "Read", t: "mint" },
  { when: "10 Nov, 3:20", what: "Absence notice, Class 5", st: "Read", t: "mint" },
  { when: "8 Nov, 9:00", what: "1st overdue reminder, Rs 2,000", st: "Delivered", t: "blue" },
  { when: "5 Nov, 9:00", what: "Due today reminder, Rs 2,000", st: "Read", t: "mint" },
];

const details: [string, string, string?][] = [
  ["Father", "Mr. Ali"],
  ["WhatsApp", "0300 0000 127"],
  ["Other phone", "0300 0000 128"],
  ["Joined", "14 April 2025"],
  ["Monthly fee", "Rs 2,000, due on the 5th"],
  ["Reminders", "Automatic, on", "text-[#0A5F54]"],
];

const feeCols = "grid grid-cols-[1.3fr_1fr_1.2fr_1fr_1fr] items-center gap-3 px-4";

export default function StudentProfile() {
  return (
    <Page>
      <Link to="/students" className="inline-flex min-h-11 items-center self-start text-sm font-semibold text-[#0B5F85] hover:text-[#08445F]">
        Back to all students
      </Link>

      <div className="flex flex-wrap items-start gap-4">
        {/* Left card */}
        <Card className="max-w-95 flex-[1_1_300px] gap-4.5">
          <div className="flex items-center gap-3.5">
            <span aria-hidden="true" className="flex size-16 items-center justify-center rounded-full bg-[#C5E9F9] text-[22px] font-bold">HA</span>
            <div className="flex flex-col gap-1">
              <h1 className="m-0 text-[22px] font-bold">Hamza Ali</h1>
              <span className="text-[13px] text-[#566170]">LG-0027, Class 5</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 rounded-xl bg-[#FDE7E5] px-4 py-3.5">
            <span className="text-[13px] font-bold text-[#A8261E]">Balance due</span>
            <span className="text-2xl font-bold">Rs 2,000</span>
            <span className="text-[13px] text-[#3B4654]">November fee, 9 days overdue</span>
          </div>

          <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 text-sm">
            {details.map(([k, v, c]) => (
              <div key={k} className="contents">
                <dt className="text-[#566170]">{k}</dt>
                <dd className={`m-0 font-semibold ${c ?? ""}`}>{v}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-2.5">
            <Link to="/fees/record" className={btnDark}>Record payment</Link>
            <Link to="/reminders" className={btnMint}>Send WhatsApp reminder now</Link>
            <Link to="/students/new" className={btnOutline}>Edit details</Link>
          </div>
        </Card>

        {/* Right column */}
        <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-4">
          <Card className="gap-3.5 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="m-0 text-lg font-bold">Attendance, November 2026</h2>
              <span className="text-sm font-semibold">11 of 12 days present, 92%</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {marks.map((m, i) => (
                <div key={i} className="flex w-11 flex-col items-center gap-1">
                  <span className="text-xs text-[#566170]">{i + 1}</span>
                  <span className={`flex size-9 items-center justify-center rounded-[10px] text-[13px] font-bold ${dayTone[m]}`}>{m}</span>
                </div>
              ))}
            </div>
            <p className="m-0 text-[13px] text-[#566170]">P present, A absent, S Sunday. Absent on 10 Nov, parent notified on WhatsApp.</p>
          </Card>

          <Card className="gap-3 p-5">
            <h2 className="m-0 text-lg font-bold">Fee history</h2>
            <div className="overflow-x-auto">
              <div className="flex min-w-140 flex-col">
                <div className={`${feeCols} ${tableHead} py-3`}>
                  <span>Month</span><span>Amount</span><span>Paid on</span><span>Method</span><span>Status</span>
                </div>
                {fees.map((f) => (
                  <div key={f.month} className={`${feeCols} ${tableRow} py-3`}>
                    <span className="font-semibold">{f.month}</span>
                    <span>Rs 2,000</span>
                    <span>{f.on}</span>
                    <span>{f.how}</span>
                    <span><Pill t={f.t}>{f.st}</Pill></span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="gap-2.5 p-5">
            <h2 className="m-0 text-lg font-bold">WhatsApp log</h2>
            {log.map((l) => (
              <div key={l.when} className="flex items-center gap-3 border-t border-[#EEF1F6] py-2">
                <span className="w-23 flex-none text-[13px] text-[#566170]">{l.when}</span>
                <span className="min-w-0 flex-1 text-sm">{l.what}</span>
                <Pill t={l.t}>{l.st}</Pill>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </Page>
  );
}
