import { Link } from "react-router";
import { Page, PageTitle, btnDark, btnMint, btnOutline } from "../components/ui";

const grade = (m: number) => (m >= 90 ? "A+" : m >= 80 ? "A" : m >= 70 ? "B" : m >= 60 ? "C" : m >= 50 ? "D" : m >= 40 ? "E" : "F");
const word = (m: number) => (m >= 90 ? "Excellent" : m >= 80 ? "Very good" : m >= 70 ? "Good" : "Fair");

const subjects: [string, number][] = [
  ["English", 82], ["Urdu", 88], ["Mathematics", 84], ["Science", 79], ["Islamiat", 93], ["Social Studies", 86],
];

const ranking: [string, string, number][] = [
  ["1st", "Noor Fatima", 94.2], ["2nd", "Danish Rafiq", 90.5], ["3rd", "Sana Malik", 88.0],
  ["4th", "Ayesha Siddiqa", 86.7], ["5th", "Hamza Ali", 85.3], ["6th", "Zainab Tariq", 81.8],
  ["7th", "Ahmad Hassan", 77.5], ["8th", "Iqra Javed", 70.2], ["31st", "Saad Mehmood", 41.3],
];

const cols = "grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-3 px-3.5";

export default function ReportCards() {
  const selected = "Hamza Ali";

  return (
    <Page>
      <PageTitle title="Report cards, Class 5-A" sub="Mid-term examination 2026. All 6 subjects complete.">
        <Link to="/exams" className={btnOutline}>Back to marks</Link>
        <button type="button" className={btnMint}>Send all 32 to parents on WhatsApp</button>
        <button type="button" className={btnDark}>Print all 32</button>
      </PageTitle>

      <div className="flex flex-wrap items-start gap-4">
        <aside className="flex max-w-80 flex-[1_1_260px] flex-col rounded-2xl bg-white px-3.5 pt-4.5 pb-2">
          <h2 className="mx-1.5 mt-0 mb-2 text-base font-bold">Class result, by position</h2>
          {ranking.map(([pos, name, pct]) => {
            const on = name === selected;
            return (
              <button
                key={name}
                type="button"
                aria-current={on ? "true" : undefined}
                className={`flex min-h-12 cursor-pointer items-center gap-2.5 rounded-[10px] border-0 px-2.5 text-left text-sm text-[#1E2530] ${on ? "bg-[#C5E9F9]" : "bg-transparent hover:bg-[#F4F6FA]"}`}
              >
                <span className="w-6.5 flex-none font-bold text-[#566170]">{pos}</span>
                <span className={`flex-1 ${on ? "font-bold" : "font-medium"}`}>{name}</span>
                <span className={`font-bold ${pct < 50 ? "text-[#A8261E]" : ""}`}>{pct.toFixed(1)}%</span>
              </button>
            );
          })}
          <span className="mx-1.5 my-2 text-xs text-[#566170]">Showing 9 of 32</span>
        </aside>

        {/* Printable result card */}
        <section className="flex min-w-0 flex-[999_1_560px] flex-col gap-4.5 rounded-lg border border-[#C9D0DB] bg-white p-8">
          <div className="flex flex-col items-center gap-0.75 text-center">
            <span className="text-[22px] font-bold">[SCHOOL NAME]</span>
            <span className="text-[13px] text-[#566170]">[SCHOOL ADDRESS AND PHONE]</span>
            <span className="mt-1.5 rounded-full bg-[#EFEDFD] px-4 py-1.5 text-sm font-bold text-[#3A3466]">
              Result card: Mid-term examination, session 2026-27
            </span>
          </div>

          <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-x-6 gap-y-2.5 border-y border-[#1E2530] py-3.5 text-sm">
            {[["Student", "Hamza Ali"], ["Father", "Mr. Ali"], ["Class", "5-A"], ["Roll no.", "3"]].map(([k, v]) => (
              <div key={k} className="flex gap-2"><dt className="text-[#566170]">{k}</dt><dd className="m-0 font-bold">{v}</dd></div>
            ))}
          </dl>

          <div className="flex flex-col text-sm">
            <div className={`${cols} bg-[#E6F4FB] py-2.5 font-semibold`}><span>Subject</span><span>Total</span><span>Obtained</span><span>Grade</span><span>Remarks</span></div>
            {subjects.map(([name, m]) => (
              <div key={name} className={`${cols} border-b border-[#EEF1F6] py-2.25`}>
                <span className="font-semibold">{name}</span><span>100</span><span className="font-semibold">{m}</span>
                <span className="font-bold">{grade(m)}</span><span className="text-[#3B4654]">{word(m)}</span>
              </div>
            ))}
            <div className={`${cols} bg-[#F9E38A] py-2.75 font-bold`}><span>Total</span><span>600</span><span>512</span><span>A</span><span>85.3%</span></div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-3">
            <div className="flex flex-col gap-0.5 rounded-[10px] bg-[#F4F6FA] px-3.5 py-3"><span className="text-xs text-[#566170]">Position in class</span><span className="text-lg font-bold">5th of 32</span></div>
            <div className="flex flex-col gap-0.5 rounded-[10px] bg-[#F4F6FA] px-3.5 py-3"><span className="text-xs text-[#566170]">Result</span><span className="text-lg font-bold text-[#0B6B45]">Pass</span></div>
            <div className="flex flex-col gap-0.5 rounded-[10px] bg-[#F4F6FA] px-3.5 py-3"><span className="text-xs text-[#566170]">Attendance this term</span><span className="text-lg font-bold">92%</span></div>
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <span className="text-xs font-semibold text-[#566170]">Class teacher's remarks</span>
            <span className="rounded-[10px] border border-[#C9D0DB] px-3.5 py-2.5 leading-normal">
              Hamza works hard and is strong in Islamiat and Urdu. He should practise Science diagrams at home.
            </span>
          </div>

          <div className="flex gap-8 pt-7 text-xs text-[#566170]">
            {["Class teacher", "Principal", "Parent"].map((s) => (
              <span key={s} className="flex-1 border-t border-[#566170] pt-1.25">{s}</span>
            ))}
          </div>
        </section>
      </div>
    </Page>
  );
}
