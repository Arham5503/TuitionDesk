import { useState } from "react";
import { Link } from "react-router";
import { Page, PageTitle, btnBlue, btnDark, fieldLabel, inputCls, tableHead, tableRow } from "../components/ui";

type Decision = "P" | "R" | "L";

const students: [number, string, number, number][] = [
  [1, "Ahmad Hassan", 74, 0],
  [2, "Danish Rafiq", 89, 0],
  [3, "Hamza Ali", 85, 0],
  [4, "Iqra Javed", 68, 0],
  [5, "Noor Fatima", 94, 0],
  [6, "Saad Mehmood", 36, 3000],
  [7, "Sana Malik", 87, 0],
  [8, "Usman Sheikh", 71, 0],
  [9, "Zainab Tariq", 79, 0],
];

const options: { v: Decision; label: string; on: string }[] = [
  { v: "P", label: "Promote", on: "bg-[#DDF5E9] text-[#0B6B45] border-[#0B6B45]" },
  { v: "R", label: "Repeat class", on: "bg-[#FDF0C8] text-[#6E4700] border-[#6E4700]" },
  { v: "L", label: "Leaving", on: "bg-[#EEF1F6] text-[#1E2530] border-[#566170]" },
];
const off = "bg-white text-[#4A5563] border-[#C9D0DB]";

const cols = "grid grid-cols-[0.5fr_1.8fr_1fr_1fr_2.4fr] items-center gap-3 px-4";

export default function Promote() {
  const [dec, setDec] = useState<Decision[]>(["P", "P", "P", "P", "P", "R", "P", "L", "P"]);
  const set = (i: number, v: Decision) => setDec((d) => d.map((x, j) => (j === i ? v : x)));
  const passAll = () => setDec((d) => d.map((x, i) => (students[i][2] >= 40 && x !== "L" ? "P" : x)));

  return (
    <Page>
      <Link to="/classes" className="inline-flex min-h-11 items-center self-start text-sm font-semibold text-[#0B5F85] hover:text-[#08445F]">
        Back to classes
      </Link>
      <PageTitle
        title="Promote students to session 2027-28"
        sub="Done once a year, one section at a time. Fees, attendance and results of 2026-27 stay saved under the old session."
      />

      <div className="flex flex-wrap items-start gap-4">
        <section className="flex min-w-0 flex-[999_1_560px] flex-col gap-4 rounded-2xl bg-white p-6">
          <div className="flex flex-wrap items-end gap-3.5">
            <label className={fieldLabel}>From (2026-27)
              <select className={inputCls}><option>Class 5, Section A</option><option>Class 5, Section B</option></select>
            </label>
            <span aria-hidden="true" className="flex h-11 items-center text-xl text-[#566170]">&rarr;</span>
            <label className={fieldLabel}>To (2027-28)
              <select className={inputCls}><option>Class 6, Section A</option><option>Class 6, Section B (new)</option></select>
            </label>
            <button type="button" className={btnBlue} onClick={passAll}>Set all who passed to Promote</button>
          </div>

          <div className="overflow-x-auto">
            <div className="flex min-w-160 flex-col">
              <div className={`${cols} ${tableHead} py-3`}>
                <span>Roll</span><span>Student</span><span>Final result</span><span>Fee balance</span><span>Decision</span>
              </div>
              {students.map(([roll, name, res, bal], i) => (
                <div key={roll} className={`${cols} ${tableRow} py-2`}>
                  <span>{roll}</span>
                  <span className="font-semibold">{name}</span>
                  <span className={`font-semibold ${res < 40 ? "text-[#A8261E]" : ""}`}>{res}%{res < 40 ? ", fail" : ""}</span>
                  <span className={bal ? "text-[#A8261E]" : "text-[#566170]"}>{bal ? `Rs ${bal.toLocaleString("en-US")}` : "Clear"}</span>
                  <div role="group" aria-label={`Decision for ${name}`} className="flex gap-1.5">
                    {options.map((o) => (
                      <button
                        key={o.v}
                        type="button"
                        aria-pressed={dec[i] === o.v}
                        onClick={() => set(i, o.v)}
                        className={`min-h-11 cursor-pointer rounded-[10px] border px-3 text-[13px] font-bold ${dec[i] === o.v ? o.on : off}`}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <span className="text-[13px] text-[#566170]">Showing 9 of 32 students</span>
        </section>

        <aside className="flex max-w-90 flex-[1_1_280px] flex-col gap-4">
          <div className="flex flex-col gap-3.5 rounded-2xl bg-white p-5.5">
            <h2 className="m-0 text-[17px] font-bold">Class 5-A summary</h2>
            <div className="grid grid-cols-3 gap-2.5">
              <div className="flex flex-col gap-0.5 rounded-xl bg-[#DDF5E9] p-3"><span className="text-2xl font-bold">30</span><span className="text-xs font-semibold text-[#0B6B45]">Promote</span></div>
              <div className="flex flex-col gap-0.5 rounded-xl bg-[#FDF0C8] p-3"><span className="text-2xl font-bold">1</span><span className="text-xs font-semibold text-[#6E4700]">Repeat</span></div>
              <div className="flex flex-col gap-0.5 rounded-xl bg-[#EEF1F6] p-3"><span className="text-2xl font-bold">1</span><span className="text-xs font-semibold text-[#3B4654]">Leaving</span></div>
            </div>
            <button type="button" className={`${btnDark} min-h-12 text-[15px]`}>Promote 30 students to Class 6-A</button>
            <p className="m-0 text-[13px] text-[#566170]">You can undo a promotion for 7 days.</p>
          </div>

          <div className="flex flex-col gap-2 rounded-2xl bg-[#D9D4FB] px-5.5 py-5">
            <h2 className="m-0 text-base font-bold">What changes for a promoted student</h2>
            <ul className="m-0 flex list-disc flex-col gap-1.5 pl-4.5 text-sm leading-[1.45]">
              <li>New class, section and roll number.</li>
              <li>Monthly fee changes to the Class 6 fee from April.</li>
              <li>Any unpaid balance moves forward as arrears.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-1.5 rounded-2xl bg-white px-5 py-4.5">
            <span className="text-[13px] font-bold">Progress, all sections</span>
            <div className="h-2.5 rounded-lg bg-[#EEF1F6]"><div className="h-2.5 w-[29%] rounded-lg bg-[#8ED0EE]" /></div>
            <span className="text-[13px] text-[#566170]">4 of 14 sections promoted</span>
          </div>
        </aside>
      </div>
    </Page>
  );
}
