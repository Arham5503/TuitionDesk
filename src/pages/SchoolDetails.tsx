import { useState } from "react";
import { Link } from "react-router";
import { Logo, authInput, authLink } from "../components/AuthLayout";

const levels = [
  { id: "primary", title: "Primary", sub: "Up to Class 5", top: 5 },
  { id: "middle", title: "Middle", sub: "Up to Class 8", top: 8 },
  { id: "matric", title: "Matric / High", sub: "Up to Class 10", top: 10 },
  { id: "inter", title: "Higher secondary", sub: "Up to Class 12", top: 12 },
];
const preClasses = ["Playgroup", "Nursery", "Prep / KG"];
const starts = [...preClasses, "Class 1"];
const sizes = ["Under 100", "100 to 300", "300 to 700", "700 or more"];
const staffs = ["Under 10", "10 to 25", "25 to 50", "50 or more"];

const label = "flex flex-col gap-1.5 text-[13px] font-semibold";
const legend = "p-0 pb-2.5 text-[13px] font-semibold";

function Chips({ list, value, onPick, round }: { list: string[]; value: string; onPick: (v: string) => void; round?: boolean }) {
  return (
    <div className={`flex flex-wrap ${round ? "gap-2" : "gap-1.5"}`}>
      {list.map((x) => {
        const on = x === value;
        return (
          <button
            key={x}
            type="button"
            aria-pressed={on}
            onClick={() => onPick(x)}
            className={`min-h-11 cursor-pointer border font-semibold ${round ? "rounded-full px-4 text-sm" : "rounded-[10px] px-3 text-[13px]"} ${
              on ? "border-[#1E2530] bg-[#1E2530] text-white" : "border-[#C9D0DB] bg-white text-[#1E2530]"
            }`}
          >
            {x}
          </button>
        );
      })}
    </div>
  );
}

function Check() {
  return (
    <span aria-hidden="true" className="flex size-6.5 items-center justify-center rounded-full bg-[#DDF5E9]">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B6B45" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg>
    </span>
  );
}

export default function SchoolDetails() {
  const [level, setLevel] = useState("matric");
  const [start, setStart] = useState("Nursery");
  const [size, setSize] = useState("300 to 700");
  const [staff, setStaff] = useState("10 to 25");

  const top = levels.find((l) => l.id === level)?.top ?? 10;
  const idx = preClasses.indexOf(start);
  const classes = [...(idx === -1 ? [] : preClasses.slice(idx)), ...Array.from({ length: top }, (_, i) => `Class ${i + 1}`)];

  return (
    <div className="min-h-screen bg-background px-6 pt-7 pb-10 font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#1E2530]">
      <div className="mx-auto flex max-w-300 flex-col gap-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Logo size={34} />
            <span className="text-xl font-bold">TuitionDesk</span>
          </div>
          <ol aria-label="Sign up progress" className="m-0 flex list-none flex-wrap items-center gap-2.5 p-0 text-[13px] font-semibold">
            <li className="flex items-center gap-2 text-[#0B6B45]"><Check />Account</li>
            <li aria-hidden="true" className="h-0.5 w-7 bg-[#9ED9C5]" />
            <li className="flex items-center gap-2 text-[#0B6B45]"><Check />Email verified</li>
            <li aria-hidden="true" className="h-0.5 w-7 bg-[#C9D0DB]" />
            <li aria-current="step" className="flex items-center gap-2">
              <span aria-hidden="true" className="flex size-6.5 items-center justify-center rounded-full bg-[#1E2530] text-xs text-white">3</span>
              School details
            </li>
          </ol>
          <span className="text-[13px] text-[#566170]">Signed in as you@example.com. <Link to="/login" className={authLink}>Log out</Link></span>
        </header>

        <div className="flex flex-col gap-1.5">
          <h1 className="m-0 text-[28px] font-bold">Tell us about your school</h1>
          <p className="m-0 text-[15px] text-[#566170]">We use this to set up your classes and first session. You can change all of it later in Settings.</p>
        </div>

        <div className="flex flex-wrap items-start gap-5">
          <form onSubmit={(e) => e.preventDefault()} className="flex min-w-0 flex-[999_1_560px] flex-col gap-6.5 rounded-[20px] bg-white p-7">
            <div className="flex flex-wrap items-end gap-4">
              <label className={`${label} flex-[1_1_320px]`}>School name
                <input type="text" placeholder="For example: Green Valley Public School" className={authInput} />
              </label>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="flex size-12 flex-none items-center justify-center rounded-xl border border-dashed border-[#AEB7C4] bg-[#F4F6FA]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#566170" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 16l4-4 4 4 3-3 5 5M4 5h16v14H4zM15 9h.01" /></svg>
                </span>
                <button type="button" className="min-h-12 cursor-pointer rounded-xl border border-[#C9D0DB] bg-white px-4 text-sm font-semibold text-[#1E2530]">
                  Upload logo (optional)
                </button>
              </div>
            </div>

            <fieldset className="m-0 flex flex-col gap-2.5 border-0 p-0">
              <legend className={legend}>Education level, the highest class you teach</legend>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(160px,100%),1fr))] gap-2.5">
                {levels.map((l) => {
                  const on = l.id === level;
                  return (
                    <button
                      key={l.id}
                      type="button"
                      aria-pressed={on}
                      onClick={() => setLevel(l.id)}
                      className={`flex min-h-18 cursor-pointer flex-col justify-center gap-0.75 rounded-[14px] border-2 px-3.5 py-3 text-left text-[#1E2530] ${
                        on ? "border-[#0B5F85] bg-[#E6F4FB]" : "border-[#C9D0DB] bg-white"
                      }`}
                    >
                      <span className="text-[15px] font-bold">{l.title}</span>
                      <span className="text-[13px] text-[#566170]">{l.sub}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="m-0 flex flex-col gap-2.5 border-0 p-0">
              <legend className={legend}>Lowest class</legend>
              <Chips list={starts} value={start} onPick={setStart} round />
            </fieldset>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-4">
              <label className={label}>City<input type="text" placeholder="For example: Lahore" className={authInput} /></label>
              <label className={label}>Address<input type="text" placeholder="Street, area" className={authInput} /></label>
              <label className={label}>School phone<input type="tel" placeholder="042 xxxxxxx or 03xx xxxxxxx" className={authInput} /></label>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] items-start gap-5">
              <label className={label}>School year starts in
                <select className={authInput}><option>April</option><option>August</option><option>September</option><option>Another month</option></select>
                <span className="font-medium text-[#566170]">Used to create your first session.</span>
              </label>
              <fieldset className="m-0 flex flex-col gap-2 border-0 p-0">
                <legend className="p-0 pb-2 text-[13px] font-semibold">About how many students?</legend>
                <Chips list={sizes} value={size} onPick={setSize} />
              </fieldset>
              <fieldset className="m-0 flex flex-col gap-2 border-0 p-0">
                <legend className="p-0 pb-2 text-[13px] font-semibold">About how many teachers?</legend>
                <Chips list={staffs} value={staff} onPick={setStaff} />
              </fieldset>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#EEF1F6] pt-1">
              <span className="text-[13px] text-[#566170]">The rough counts only help us suggest a plan. Real numbers come from the students and staff you add.</span>
              <button type="submit" className="inline-flex min-h-13 cursor-pointer items-center justify-center rounded-xl border-0 bg-[#1E2530] px-7 text-base font-semibold text-white">
                Create my school
              </button>
            </div>
          </form>

          <aside className="flex max-w-100 flex-[1_1_320px] flex-col gap-4">
            <section className="flex flex-col gap-3.5 rounded-[20px] bg-[#D9D4FB] p-5.5">
              <h2 className="m-0 text-[17px] font-bold">What we will set up for you</h2>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold">{classes.length} classes, {classes[0]} to {classes[classes.length - 1]}</span>
                <div className="flex flex-wrap gap-1.5">
                  {classes.map((c) => (
                    <span key={c} className="rounded-lg bg-white px-2.5 py-1.25 text-xs font-semibold">{c}</span>
                  ))}
                </div>
                <span className="text-[13px] text-[#3A3466]">Each class starts with Section A. Add B, C and more later.</span>
              </div>
              <div className="h-px bg-[#C2BBF2]" />
              <div className="flex flex-col gap-0.75">
                <span className="text-sm font-bold">Session 2026-27</span>
                <span className="text-[13px] text-[#3A3466]">April 2026 to March 2027</span>
              </div>
            </section>

            <section className="flex flex-col gap-3 rounded-[20px] bg-white p-5.5">
              <h2 className="m-0 text-[17px] font-bold">After this, your dashboard checklist</h2>
              <ol className="m-0 flex list-decimal flex-col gap-2 pl-5 text-sm leading-[1.45]">
                <li>Set your fee structure</li>
                <li>Invite teachers and staff</li>
                <li>Add students, one by one or from Excel</li>
                <li>Connect WhatsApp for fee reminders</li>
              </ol>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
