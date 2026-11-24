import { useState } from "react";
import { Link } from "react-router";
import { Page, btnDark, btnMint, fieldLabel, inputCls } from "../components/ui";

const rules = [
  { title: "3 days before the due date", sub: "A friendly heads-up on the 2nd, to every parent who has not paid yet." },
  { title: "On the due date", sub: "One message on the 5th saying the fee is due today." },
  { title: "Every 3 days after the due date", sub: "On the 8th, 11th, 14th and so on, until the fee is recorded." },
  { title: "Stop after 5 overdue reminders", sub: "The parent moves to your call list, so nobody is messaged forever." },
  { title: "Receipt when a payment is recorded", sub: "The parent gets the amount, month and remaining balance." },
  { title: "Absence message on the same day", sub: "Sent when you save attendance. Students on leave are skipped." },
];

const types = ["Before due", "Due today", "Overdue", "Receipt", "Absence"];
const tags = ["Parent name", "Student name", "Amount", "Month", "Due date"];

const defaultMsg =
  "Assalam o Alaikum {parent_name}. The {month} fee of Rs {amount} for {student_name} at Little Genius Tuition Center was due on {due_date}. Kindly pay at your earliest. If you have already paid, please ignore this message. JazakAllah.";

export default function ReminderSettings() {
  const [lang, setLang] = useState("English");
  const [type, setType] = useState("Overdue");

  return (
    <Page>
      <Link to="/reminders" className="inline-flex min-h-11 items-center self-start text-sm font-semibold text-[#0B5F85] hover:text-[#08445F]">
        Back to reminders
      </Link>

      <div className="flex flex-wrap items-start gap-4">
        {/* When to send */}
        <section className="flex min-w-0 flex-[1_1_420px] flex-col gap-1.5 rounded-2xl bg-white p-6">
          <h1 className="m-0 mb-1 text-[22px] font-bold">When to send</h1>
          <p className="m-0 mb-2 text-sm text-[#566170]">Fees are due on the 5th. Only parents with an unpaid fee get a message.</p>
          {rules.map((r) => (
            <label key={r.title} className="flex items-start gap-3.5 border-t border-[#EEF1F6] py-3.5">
              <input type="checkbox" defaultChecked className="mt-0.5 size-5.5 flex-none accent-[#1E2530]" />
              <span className="flex flex-col gap-0.75">
                <span className="text-[15px] font-semibold">{r.title}</span>
                <span className="text-[13px] leading-[1.45] text-[#566170]">{r.sub}</span>
              </span>
            </label>
          ))}
          <div className="flex flex-wrap gap-4 border-t border-[#EEF1F6] pt-3.5">
            <label className={`${fieldLabel} flex-[1_1_150px]`}>Send time
              <select className={inputCls}><option>9:00 AM</option><option>12:00 PM</option><option>6:00 PM</option></select>
            </label>
            <label className={`${fieldLabel} flex-[1_1_150px]`}>Fee due day
              <select className={inputCls}><option>5th of each month</option><option>1st of each month</option><option>10th of each month</option></select>
            </label>
          </div>
        </section>

        {/* Message */}
        <section className="flex min-w-0 flex-[1_1_420px] flex-col gap-4 rounded-2xl bg-white p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="m-0 text-[22px] font-bold">What the parent reads</h2>
            <div role="group" aria-label="Message language" className="flex gap-1.5">
              {["English", "Urdu"].map((l) => (
                <button
                  key={l}
                  type="button"
                  aria-pressed={lang === l}
                  onClick={() => setLang(l)}
                  className={`min-h-11 cursor-pointer rounded-full border px-4 text-sm font-semibold text-[#1E2530] ${
                    lang === l ? "border-[#8ED0EE] bg-[#C5E9F9]" : "border-[#C9D0DB] bg-white"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div role="group" aria-label="Message type" className="flex flex-wrap gap-1.5">
            {types.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={type === t}
                onClick={() => setType(t)}
                className={`min-h-11 cursor-pointer rounded-[10px] border px-3.5 text-[13px] font-semibold ${
                  type === t ? "border-[#1E2530] bg-[#1E2530] text-white" : "border-[#C9D0DB] bg-white text-[#1E2530]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <label className={fieldLabel}>{type} message
            <textarea
              rows={6}
              defaultValue={defaultMsg}
              className="resize-y rounded-xl border border-[#C9D0DB] p-3.5 text-sm leading-[1.55] font-normal text-[#1E2530] font-[inherit] outline-none focus:border-[#0B5F85]"
            />
          </label>

          <div className="flex flex-col gap-2">
            <span className="text-[13px] font-semibold">Tap to insert a detail</span>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <button key={t} type="button" className="min-h-11 cursor-pointer rounded-[10px] border-0 bg-[#EFEDFD] px-3 text-[13px] font-semibold text-[#3A3466]">
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5 rounded-[14px] bg-[#E9F3EE] p-4.5">
            <span className="text-[13px] font-semibold text-[#3B4654]">Preview, as Mr. Ali will see it</span>
            <div className="flex max-w-105 flex-col gap-1.5 self-start rounded-[4px_14px_14px_14px] bg-white px-3.5 py-3">
              <span className="text-[13px] font-bold text-[#0A5F54]">Little Genius Tuition Center</span>
              <p className="m-0 text-sm leading-[1.55]">
                Assalam o Alaikum Mr. Ali. The November fee of Rs 2,000 for Hamza Ali at Little Genius Tuition Center was due on 5 November. Kindly pay at your earliest. If you have already paid, please ignore this message. JazakAllah.
              </p>
              <span className="self-end text-xs text-[#566170]">9:00 AM</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-end gap-2.5">
            <button type="button" className={btnMint}>Send a test to my number</button>
            <button type="button" className={btnDark}>Save rules and message</button>
          </div>
        </section>
      </div>
    </Page>
  );
}
