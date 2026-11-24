import { Link } from "react-router";
import { Card, Page, btnDark, btnMint, btnOutline, btnYellow, fieldLabel, inputCls } from "../components/ui";

const fees = [
  { group: "KG to Class 2", note: "21 students", fee: "1,500" },
  { group: "Class 3 to Class 5", note: "22 students", fee: "2,000" },
  { group: "Class 6 to Class 8", note: "21 students", fee: "2,500" },
];

const wa: [string, string][] = [
  ["Business number", "[WHATSAPP BUSINESS NUMBER]"],
  ["Display name", "Little Genius Tuition Center"],
  ["Message templates", "5 of 5 approved"],
  ["Last message", "Today, 3:20 PM"],
];

export default function Settings() {
  return (
    <Page>
      <h1 className="m-0 text-2xl font-bold">Settings</h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(440px,100%),1fr))] items-start gap-4">
        {/* Center profile */}
        <Card>
          <h2 className="m-0 text-lg font-bold">Center profile</h2>
          <p className="m-0 text-[13px] text-[#566170]">Shown on receipts and at the top of every WhatsApp message.</p>
          <label className={fieldLabel}>Center name<input type="text" className={inputCls} defaultValue="Little Genius Tuition Center" /></label>
          <label className={fieldLabel}>Address<input type="text" className={inputCls} defaultValue="Bhoe Asal" /></label>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(180px,100%),1fr))] gap-4">
            <label className={fieldLabel}>Owner name<input type="text" className={inputCls} placeholder="[OWNER NAME]" /></label>
            <label className={fieldLabel}>Center phone<input type="tel" className={inputCls} placeholder="[CENTER PHONE]" /></label>
          </div>
          <button type="button" className={`${btnDark} self-start`}>Save profile</button>
        </Card>

        {/* WhatsApp */}
        <Card>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="m-0 text-lg font-bold">WhatsApp connection</h2>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E1F5EE] px-3 py-1.5 text-[13px] font-bold text-[#0A5F54]">
              <span aria-hidden="true" className="size-2 rounded-full bg-[#0A8F6F]" />Connected
            </span>
          </div>
          <p className="m-0 text-[13px] text-[#566170]">Reminders, receipts and absence messages go out from this number.</p>
          <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 text-sm">
            {wa.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-[#566170]">{k}</dt>
                <dd className="m-0 font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-2.5">
            <button type="button" className={btnMint}>Send a test message</button>
            <Link to="/reminders/settings" className={btnOutline}>Edit rules and messages</Link>
            <button type="button" className="min-h-11 cursor-pointer rounded-xl border border-[#F3C2BD] bg-white px-4.5 text-sm font-semibold text-[#A8261E]">Disconnect</button>
          </div>
        </Card>

        {/* Fee structure */}
        <Card className="gap-3.5">
          <h2 className="m-0 text-lg font-bold">Fee structure</h2>
          <p className="m-0 text-[13px] text-[#566170]">New students get the fee of their class. Changing a fee here applies from next month.</p>
          {fees.map((f) => (
            <label key={f.group} className="flex flex-wrap items-center gap-3 border-t border-[#EEF1F6] py-2.5 text-sm">
              <span className="flex flex-[1_1_160px] flex-col gap-0.5">
                <span className="font-semibold">{f.group}</span>
                <span className="text-xs font-medium text-[#566170]">{f.note}</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#566170]">Rs</span>
                <input type="text" inputMode="numeric" aria-label={`${f.group} monthly fee`} defaultValue={f.fee} className={`${inputCls} w-27.5`} />
              </span>
            </label>
          ))}
          <button type="button" className={`${btnOutline} self-start`}>Save fees</button>
        </Card>

        {/* Who can log in */}
        <Card className="gap-3.5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="m-0 text-lg font-bold">Who can log in</h2>
            <Link to="/teachers" className={btnYellow}>Manage teachers</Link>
          </div>
          <div className="flex items-center gap-3 border-t border-[#EEF1F6] py-2.5">
            <span aria-hidden="true" className="flex size-10 flex-none items-center justify-center rounded-full bg-[#F9E38A] text-[13px] font-bold">LG</span>
            <div className="flex flex-1 flex-col gap-0.5">
              <span className="text-sm font-semibold">[OWNER NAME]</span>
              <span className="text-xs text-[#566170]">Owner. Everything, including fees and settings.</span>
            </div>
          </div>
          <div className="flex items-center gap-3 border-t border-[#EEF1F6] py-2.5">
            <span aria-hidden="true" className="flex size-10 flex-none items-center justify-center rounded-full bg-[#C5E9F9] text-[13px] font-bold">T</span>
            <div className="flex flex-1 flex-col gap-0.5">
              <span className="text-sm font-semibold">[TEACHER NAME]</span>
              <span className="text-xs text-[#566170]">Teacher. Can mark attendance, cannot see fees.</span>
            </div>
            <button type="button" className="min-h-11 cursor-pointer rounded-[10px] border border-[#C9D0DB] bg-white px-3.5 text-[13px] font-semibold text-[#1E2530]">Change</button>
          </div>
        </Card>
      </div>
    </Page>
  );
}
