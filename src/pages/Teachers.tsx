import { useState } from "react";
import { Page, PageTitle, Pill, btnDark, fieldLabel, inputCls, tableHead, tableRow, type Tone } from "../components/ui";

const rows: { name: string; phone: string; cls: string; can: string; st: string; t: Tone; act: string }[] = [
  { name: "[OWNER NAME]", phone: "Owner account", cls: "All 9 classes", can: "Everything", st: "Owner", t: "purple", act: "Edit" },
  { name: "Sir Kashif", phone: "0300 0000 202", cls: "Class 6, 7, 8", can: "Attendance, sees fee status", st: "Active", t: "green", act: "Change" },
  { name: "Miss Hafsa", phone: "0300 0000 203", cls: "KG, Class 1, 2", can: "Attendance only", st: "Active", t: "green", act: "Change" },
  { name: "Miss Sadia", phone: "0300 0000 201", cls: "Class 5", can: "Attendance only", st: "Invite sent", t: "amber", act: "Resend" },
];

const allClasses = ["KG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8"];

const perms = [
  { on: true, title: "Mark attendance", sub: "Today and the last 2 days. Older days need you." },
  { on: true, title: "See students and parent phone numbers", sub: "So they can call a parent about an absence." },
  { on: false, title: "See who has paid the fee", sub: "Status only, no amounts." },
  { on: false, title: "Receive fee payments", sub: "Every payment shows the name of who recorded it." },
  { on: false, title: "Add or remove students", sub: "Usually kept with the owner." },
];

const cols = "grid grid-cols-[1.6fr_1.3fr_1.5fr_1fr_0.7fr] items-center gap-3 px-4";

export default function Teachers() {
  const [picked, setPicked] = useState<string[]>(["Class 5"]);
  const toggle = (c: string) => setPicked((p) => (p.includes(c) ? p.filter((x) => x !== c) : [...p, c]));

  return (
    <Page>
      <PageTitle title="Teachers and access" sub="A teacher logs in with their own mobile number and sees only the classes you tick." />

      <div className="flex flex-wrap items-start gap-4">
        <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-4">
          <section className="flex flex-col gap-3.5 rounded-2xl bg-white p-6">
            <h2 className="m-0 text-lg font-bold">Who has access</h2>
            <div className="overflow-x-auto">
              <div className="flex min-w-160 flex-col">
                <div className={`${cols} ${tableHead} py-3`}>
                  <span>Name</span><span>Classes</span><span>Can do</span><span>Status</span><span>Action</span>
                </div>
                {rows.map((r) => (
                  <div key={r.name} className={`${cols} ${tableRow} py-3`}>
                    <div className="flex flex-col gap-0.5"><span className="font-semibold">{r.name}</span><span className="text-xs text-[#566170]">{r.phone}</span></div>
                    <span>{r.cls}</span>
                    <span className="text-[#3B4654]">{r.can}</span>
                    <span><Pill t={r.t}>{r.st}</Pill></span>
                    <button type="button" className="min-h-11 cursor-pointer justify-self-start rounded-[10px] border border-[#C9D0DB] bg-white px-3 text-[13px] font-semibold text-[#1E2530]">{r.act}</button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-3 rounded-2xl bg-[#D9D4FB] px-6 py-5.5">
            <h2 className="m-0 text-[17px] font-bold">How a teacher gets in</h2>
            <ol className="m-0 flex list-decimal flex-col gap-2 pl-5 text-sm leading-normal">
              <li>You add the teacher's name and mobile number, tick the classes, and press Send invite.</li>
              <li>The teacher gets a WhatsApp message with a link and sets their own password.</li>
              <li>They log in on their phone and see only their classes. Fees, reports and settings stay hidden.</li>
              <li>You can change the classes or remove access here at any time. It takes effect on their next screen.</li>
            </ol>
          </section>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="flex max-w-110 flex-[1_1_340px] flex-col gap-4 rounded-2xl bg-white p-6">
          <h2 className="m-0 text-lg font-bold">Give a teacher access</h2>
          <label className={fieldLabel}>Teacher name<input type="text" className={inputCls} defaultValue="Miss Sadia" /></label>
          <label className={fieldLabel}>Mobile number (WhatsApp)<input type="tel" className={inputCls} defaultValue="0300 0000 201" /></label>

          <fieldset className="m-0 flex flex-col gap-2 border-0 p-0">
            <legend className="p-0 pb-2 text-[13px] font-semibold">Classes this teacher can open</legend>
            <div className="grid grid-cols-3 gap-2">
              {allClasses.map((c) => {
                const on = picked.includes(c);
                return (
                  <label
                    key={c}
                    className={`flex min-h-11 items-center gap-2 rounded-[10px] border px-2.5 text-[13px] font-semibold ${on ? "border-[#8ED0EE] bg-[#E6F4FB]" : "border-[#C9D0DB] bg-white"}`}
                  >
                    <input type="checkbox" checked={on} onChange={() => toggle(c)} className="size-5 flex-none accent-[#1E2530]" />
                    {c}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="m-0 flex flex-col border-0 p-0">
            <legend className="p-0 pb-1 text-[13px] font-semibold">In those classes, the teacher can</legend>
            {perms.map((p) => (
              <label key={p.title} className="flex items-start gap-3 border-t border-[#EEF1F6] py-2.5 text-sm">
                <input type="checkbox" defaultChecked={p.on} className="mt-px size-5 flex-none accent-[#1E2530]" />
                <span className="flex flex-col gap-0.5">
                  <span className="font-semibold">{p.title}</span>
                  <span className="text-xs text-[#566170]">{p.sub}</span>
                </span>
              </label>
            ))}
          </fieldset>

          <button type="submit" className={`${btnDark} min-h-12.5 text-[15px]`}>Send invite on WhatsApp</button>
          <p className="m-0 text-[13px] text-[#566170]">Miss Sadia will see Class 5 only: 7 students, attendance, no fees.</p>
        </form>
      </div>
    </Page>
  );
}
