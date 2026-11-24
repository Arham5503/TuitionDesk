import { useState } from "react";
import { Link } from "react-router";
import { Avatar, Page, PageTitle, btnBlue, btnDark, btnOutline } from "../components/ui";

type Mark = "P" | "A" | "L";

const classes = [
  ["KG", "Saved"], ["Class 1", "Saved"], ["Class 2", "Saved"], ["Class 3", "Saved"], ["Class 4", "Saved"],
  ["Class 5", "Marking"], ["Class 6", "Saved"], ["Class 7", "Saved"], ["Class 8", "Saved"],
];

const students = [
  ["Hamza Ali", "92% this month"],
  ["Sana Malik", "100% this month"],
  ["Ahmad Hassan", "83% this month"],
  ["Noor Fatima", "100% this month"],
  ["Saad Mehmood", "75% this month, absent 3 times"],
  ["Iqra Javed", "92% this month"],
  ["Danish Rafiq", "100% this month"],
];

const options: { v: Mark; label: string; on: string }[] = [
  { v: "P", label: "Present", on: "bg-[#DDF5E9] text-[#0B6B45] border-[#0B6B45]" },
  { v: "A", label: "Absent", on: "bg-[#FDE7E5] text-[#A8261E] border-[#A8261E]" },
  { v: "L", label: "Leave", on: "bg-[#FDF0C8] text-[#6E4700] border-[#6E4700]" },
];
const off = "bg-white text-[#4A5563] border-[#C9D0DB]";

export default function Attendance() {
  const [activeClass, setActiveClass] = useState("Class 5");
  const [marks, setMarks] = useState<Mark[]>(["P", "P", "P", "P", "A", "P", "P"]);

  const count = (v: Mark) => marks.filter((m) => m === v).length;
  const setMark = (i: number, v: Mark) => setMarks((prev) => prev.map((m, j) => (j === i ? v : m)));

  return (
    <Page>
      <PageTitle title="Mark attendance" sub="Saturday, 14 November 2026">
        <button type="button" className={btnOutline}>Change date</button>
        <Link to="/attendance/register" className={btnOutline}>Monthly register</Link>
      </PageTitle>

      <div role="group" aria-label="Choose class" className="flex flex-wrap gap-2">
        {classes.map(([name, note]) => {
          const active = name === activeClass;
          return (
            <button
              key={name}
              type="button"
              onClick={() => setActiveClass(name)}
              aria-pressed={active}
              className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-semibold ${
                active ? "border-[#8ED0EE] bg-[#C5E9F9]" : "border-[#C9D0DB] bg-white"
              }`}
            >
              <span>{name}</span>
              <span className="text-xs text-[#3B4654]">{note}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-start gap-4">
        <section className="flex min-w-0 flex-[999_1_520px] flex-col gap-3.5 rounded-2xl bg-white p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="m-0 text-lg font-bold">{activeClass}, {students.length} students</h2>
            <button type="button" className={btnBlue} onClick={() => setMarks(marks.map(() => "P"))}>
              Mark all present
            </button>
          </div>

          {students.map(([name, sub], i) => (
            <div key={name} className="flex flex-wrap items-center gap-3 border-t border-[#EEF1F6] py-2.5">
              <Avatar name={name} i={i} />
              <div className="flex min-w-0 flex-[1_1_160px] flex-col gap-0.5">
                <span className="text-[15px] font-semibold">{name}</span>
                <span className="text-xs text-[#566170]">{sub}</span>
              </div>
              <div role="group" aria-label={`Status for ${name}`} className="flex gap-1.5">
                {options.map((o) => (
                  <button
                    key={o.v}
                    type="button"
                    aria-pressed={marks[i] === o.v}
                    onClick={() => setMark(i, o.v)}
                    className={`min-h-11 min-w-22 cursor-pointer rounded-[10px] border text-sm font-bold ${marks[i] === o.v ? o.on : off}`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>

        <aside className="flex max-w-90 flex-[1_1_280px] flex-col gap-4">
          <div className="flex flex-col gap-3.5 rounded-2xl bg-white p-5.5">
            <h2 className="m-0 text-[17px] font-bold">Today in {activeClass}</h2>
            <div className="grid grid-cols-3 gap-2.5">
              <div className="flex flex-col gap-0.5 rounded-xl bg-[#DDF5E9] p-3"><span className="text-2xl font-bold">{count("P")}</span><span className="text-xs font-semibold text-[#0B6B45]">Present</span></div>
              <div className="flex flex-col gap-0.5 rounded-xl bg-[#FDE7E5] p-3"><span className="text-2xl font-bold">{count("A")}</span><span className="text-xs font-semibold text-[#A8261E]">Absent</span></div>
              <div className="flex flex-col gap-0.5 rounded-xl bg-[#FDF0C8] p-3"><span className="text-2xl font-bold">{count("L")}</span><span className="text-xs font-semibold text-[#6E4700]">Leave</span></div>
            </div>
            <label className="flex items-start gap-3 text-sm leading-[1.45]">
              <input type="checkbox" defaultChecked className="mt-0.5 size-5 flex-none accent-[#1E2530]" />
              <span><strong>Tell parents of absent students on WhatsApp</strong> when I save. Students on leave are not messaged.</span>
            </label>
            <button type="button" className={`${btnDark} min-h-12 text-[15px]`}>Save attendance</button>
            <p className="m-0 text-[13px] text-[#566170]">Saved classes today: 8 of 9. Class 5 is the last one.</p>
          </div>

          <div className="flex flex-col gap-2 rounded-2xl bg-[#E1F5EE] px-5 py-4.5">
            <span className="text-[13px] font-bold text-[#0A5F54]">Message the parent will get</span>
            <p className="m-0 text-sm leading-normal">
              Assalam o Alaikum. Saad Mehmood was absent from Little Genius Tuition Center today, 14 November. Please let us know if everything is fine.
            </p>
          </div>
        </aside>
      </div>
    </Page>
  );
}
