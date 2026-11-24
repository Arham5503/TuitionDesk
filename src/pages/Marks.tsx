import { useState } from "react";
import { Link } from "react-router";
import { Page, PageTitle, Pill, btnDark, btnOutline, btnYellow, selectCls, tableHead, tableRow, type Tone } from "../components/ui";

const grade = (m: number) => (m >= 90 ? "A+" : m >= 80 ? "A" : m >= 70 ? "B" : m >= 60 ? "C" : m >= 50 ? "D" : m >= 40 ? "E" : "F");

// null = not entered yet, -1 = absent
const students: [number, string, number | null][] = [
  [1, "Ahmad Hassan", 78], [2, "Danish Rafiq", 91], [3, "Hamza Ali", 84], [4, "Iqra Javed", 66],
  [5, "Noor Fatima", 95], [6, "Saad Mehmood", 38], [7, "Sana Malik", 88], [8, "Usman Sheikh", -1], [9, "Zainab Tariq", null],
];

const subjects: [string, string, 0 | 1][] = [
  ["English", "Complete", 1], ["Urdu", "Complete", 1], ["Mathematics", "28 of 32 entered", 0],
  ["Science", "Not started", 0], ["Islamiat", "Not started", 0], ["Social Studies", "Not started", 0],
];

const summary: [string, string, string?][] = [
  ["Marks entered", "28 of 32"],
  ["Class average", "76%"],
  ["Highest", "95, Noor Fatima"],
  ["Failed", "2 students", "text-[#A8261E]"],
  ["Absent", "1 student"],
];

const cols = "grid grid-cols-[0.5fr_2fr_1fr_0.8fr_0.8fr_1.4fr] items-center gap-3 px-4";
const filterLabel = "flex items-center gap-1.5 text-[13px] text-[#566170]";

export default function Marks() {
  const [subject, setSubject] = useState("Mathematics");

  return (
    <Page>
      <PageTitle title="Exams: enter marks" sub="Mid-term examination, November 2026">
        <label className={filterLabel}>Exam<select className={selectCls}><option>Mid-term 2026</option><option>First term 2026</option><option>Final 2027</option></select></label>
        <label className={filterLabel}>Class<select className={selectCls}><option>Class 5, Section A</option><option>Class 5, Section B</option></select></label>
        <button type="button" className={btnYellow}>New exam</button>
        <Link to="/exams/report-cards" className={btnOutline}>Report cards</Link>
      </PageTitle>

      <div role="group" aria-label="Subject" className="flex flex-wrap gap-2">
        {subjects.map(([name, status, done]) => {
          const on = name === subject;
          return (
            <button
              key={name}
              type="button"
              aria-pressed={on}
              onClick={() => setSubject(name)}
              className={`inline-flex min-h-12 cursor-pointer flex-col items-start justify-center gap-px rounded-xl border px-4 text-[#1E2530] ${
                on ? "border-[#8ED0EE] bg-[#C5E9F9]" : "border-[#C9D0DB] bg-white"
              }`}
            >
              <span className="text-sm font-bold">{name}</span>
              <span className={`text-xs ${done ? "text-[#0B6B45]" : "text-[#566170]"}`}>{status}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-start gap-4">
        <section className="flex min-w-0 flex-[999_1_560px] flex-col gap-3.5 rounded-2xl bg-white p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="m-0 text-lg font-bold">{subject}, Class 5-A</h2>
            <span className="text-[13px] text-[#566170]">Total marks 100, pass marks 40, teacher Sir Kashif</span>
          </div>

          <div className="overflow-x-auto">
            <div className="flex min-w-150 flex-col">
              <div className={`${cols} ${tableHead} py-3`}>
                <span>Roll</span><span>Student</span><span>Marks / 100</span><span>Grade</span><span>Absent</span><span>Result</span>
              </div>
              {students.map(([roll, name, m]) => {
                const absent = m === -1;
                const empty = m === null;
                const has = !absent && !empty;
                const t: Tone = absent ? "grey" : empty ? "amber" : m >= 40 ? "green" : "red";
                const res = absent ? "Absent" : empty ? "Not entered" : m >= 40 ? "Pass" : "Fail";
                return (
                  <div key={roll} className={`${cols} ${tableRow} py-1.75`}>
                    <span>{roll}</span>
                    <span className="font-semibold">{name}</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      aria-label={`Marks for ${name}`}
                      defaultValue={has ? String(m) : ""}
                      className={`min-h-11 w-22 rounded-[10px] border bg-white px-3 text-[15px] font-semibold text-[#1E2530] font-[inherit] outline-none focus:border-[#0B5F85] ${
                        empty ? "border-[#1E2530]" : "border-[#C9D0DB]"
                      }`}
                    />
                    <span className="font-bold">{has ? grade(m) : ""}</span>
                    <input type="checkbox" aria-label={`${name} was absent`} defaultChecked={absent} className="size-5 accent-[#1E2530]" />
                    <span><Pill t={t}>{res}</Pill></span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-[13px] text-[#566170]">Showing 9 of 32. Saved automatically as you type.</span>
            <button type="button" className={btnDark}>Mark {subject} as complete</button>
          </div>
        </section>

        <aside className="flex max-w-85 flex-[1_1_260px] flex-col gap-4">
          <div className="flex flex-col gap-3 rounded-2xl bg-white p-5.5">
            <h2 className="m-0 text-[17px] font-bold">{subject} so far</h2>
            <dl className="m-0 grid grid-cols-[1fr_auto] gap-x-4 gap-y-2.5 text-sm">
              {summary.map(([k, v, c]) => (
                <div key={k} className="contents">
                  <dt className="text-[#566170]">{k}</dt>
                  <dd className={`m-0 font-bold ${c ?? ""}`}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl bg-[#D9D4FB] px-5.5 py-5">
            <h2 className="m-0 text-base font-bold">Grade scale</h2>
            <span className="text-sm leading-[1.6]">A+ 90 and above, A 80 to 89, B 70 to 79, C 60 to 69, D 50 to 59, E 40 to 49, F below 40.</span>
            <Link to="/settings" className="inline-flex min-h-11 items-center text-sm font-semibold text-[#2A2560]">Change grade scale</Link>
          </div>
        </aside>
      </div>
    </Page>
  );
}
