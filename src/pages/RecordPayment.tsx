import { useState } from "react";
import { Link } from "react-router";
import { Page, btnDark, btnOutline, fieldLabel, inputCls } from "../components/ui";

const methods = ["Cash", "JazzCash", "Easypaisa", "Bank transfer"];

const receipt: [string, string][] = [
  ["Receipt no.", "R-1126-056"],
  ["Date", "14 Nov 2026"],
  ["Student", "Hamza Ali, Class 5"],
  ["For", "November 2026"],
];

export default function RecordPayment() {
  const [method, setMethod] = useState("Cash");

  return (
    <Page>
      <Link to="/fees" className="inline-flex min-h-11 items-center self-start text-sm font-semibold text-[#0B5F85] hover:text-[#08445F]">
        Back to fees
      </Link>

      <div className="flex flex-wrap items-start gap-4">
        <form className="flex min-w-0 flex-[999_1_480px] flex-col gap-4.5 rounded-2xl bg-white p-6" onSubmit={(e) => e.preventDefault()}>
          <h1 className="m-0 text-[22px] font-bold">Record a payment</h1>

          <label className={fieldLabel}>Student
            <select className={inputCls}><option>Hamza Ali, Class 5, LG-0027</option><option>Bilal Ahmed, Class 7, LG-0008</option></select>
          </label>

          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-[#FDE7E5] px-4 py-3.5">
            <span className="text-sm">Unpaid: <strong>November 2026</strong>, 9 days overdue</span>
            <span className="text-lg font-bold text-[#A8261E]">Rs 2,000</span>
          </div>

          <fieldset className="m-0 flex flex-col gap-2 border-0 p-0">
            <legend className="p-0 pb-2 text-[13px] font-semibold">Paying for</legend>
            <label className="flex min-h-12 items-center gap-3 rounded-xl border border-[#8ED0EE] bg-[#E6F4FB] px-3.5 text-sm font-semibold">
              <input type="checkbox" defaultChecked className="size-5 flex-none accent-[#1E2530]" />
              <span className="flex-1">November 2026</span><span>Rs 2,000</span>
            </label>
            <label className="flex min-h-12 items-center gap-3 rounded-xl border border-[#C9D0DB] px-3.5 text-sm">
              <input type="checkbox" className="size-5 flex-none accent-[#1E2530]" />
              <span className="flex-1">December 2026 (advance)</span><span>Rs 2,000</span>
            </label>
          </fieldset>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-4">
            <label className={fieldLabel}>Amount received (Rs)
              <input type="text" inputMode="numeric" className={inputCls} defaultValue="2,000" />
              <span className="font-medium text-[#566170]">Less than Rs 2,000 is saved as a partial payment.</span>
            </label>
            <label className={fieldLabel}>Date<input type="date" className={inputCls} defaultValue="2026-11-14" /></label>
          </div>

          <fieldset className="m-0 flex flex-col gap-2 border-0 p-0">
            <legend className="p-0 pb-2 text-[13px] font-semibold">Paid by</legend>
            <div className="flex flex-wrap gap-2">
              {methods.map((m) => (
                <button
                  key={m}
                  type="button"
                  aria-pressed={method === m}
                  onClick={() => setMethod(m)}
                  className={`min-h-11.5 cursor-pointer rounded-xl border px-5 text-sm font-semibold ${
                    method === m ? "border-[#1E2530] bg-[#1E2530] text-white" : "border-[#C9D0DB] bg-white text-[#1E2530]"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </fieldset>

          <label className={fieldLabel}>Note (optional)<input type="text" className={inputCls} placeholder="For example: paid by uncle" /></label>

          <label className="flex items-start gap-3 text-sm leading-[1.45]">
            <input type="checkbox" defaultChecked className="mt-0.5 size-5 flex-none accent-[#1E2530]" />
            <span><strong>Send the receipt to Mr. Ali on WhatsApp</strong> (0300 0000 127). Fee reminders for November stop as soon as you save.</span>
          </label>

          <div className="flex flex-wrap justify-end gap-2.5">
            <Link to="/fees" className={btnOutline}>Cancel</Link>
            <button type="submit" className={btnDark}>Save and send receipt</button>
          </div>
        </form>

        <aside className="flex max-w-100 flex-[1_1_300px] flex-col gap-3">
          <span className="text-[13px] font-semibold text-[#566170]">Receipt preview</span>
          <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-[#AEB7C4] bg-white p-6">
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="text-[17px] font-bold">Little Genius Tuition Center</span>
              <span className="text-[13px] text-[#566170]">Bhoe Asal</span>
            </div>
            <div className="h-px bg-[#E2E6EC]" />
            <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 text-sm">
              {[...receipt, ["Paid by", method] as [string, string]].map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="text-[#566170]">{k}</dt>
                  <dd className="m-0 text-right font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="flex items-center justify-between rounded-xl bg-[#DDF5E9] px-4 py-3.5">
              <span className="text-sm font-semibold text-[#0B6B45]">Received</span>
              <span className="text-[22px] font-bold">Rs 2,000</span>
            </div>
            <div className="flex justify-between text-sm"><span className="text-[#566170]">Balance after this</span><span className="font-bold">Rs 0</span></div>
            <p className="m-0 text-center text-[13px] text-[#566170]">JazakAllah. Thank you for paying the fee.</p>
          </div>
          <button type="button" className={btnOutline}>Print receipt</button>
        </aside>
      </div>
    </Page>
  );
}
