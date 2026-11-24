import { Link } from "react-router";
import { Page, PageTitle, btnDark, btnMint, fieldLabel, inputCls } from "../components/ui";

const info: [string, string, boolean?][] = [
  ["Student", "Hamza Ali"],
  ["Father", "Mr. Ali"],
  ["Class", "5-A, Roll no. 3, ID LG-0027"],
  ["Issued", "1 Nov 2026"],
  ["Due date", "10 Nov 2026", true],
];

const lines: [string, string][] = [
  ["Monthly tuition fee", "3,000"],
  ["Exam fee, mid-term", "800"],
  ["Transport", "1,500"],
  ["Arrears from last month", "0"],
];

const pagerBtn = "min-h-11 cursor-pointer rounded-[10px] border border-[#C9D0DB] bg-white px-3.5 text-[13px] font-semibold text-[#1E2530]";

function Voucher({ label, last }: { label: string; last?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 p-5.5 ${last ? "" : "border-r border-dashed border-[#AEB7C4]"}`}>
      <div className="flex items-start justify-between gap-2.5">
        <div className="flex flex-col gap-0.5">
          <span className="text-base font-bold">[SCHOOL NAME]</span>
          <span className="text-xs text-[#566170]">[SCHOOL ADDRESS AND PHONE]</span>
        </div>
        <span className="rounded-full bg-[#EFEDFD] px-2.5 py-1.25 text-xs font-bold whitespace-nowrap text-[#3A3466]">{label}</span>
      </div>
      <div className="flex justify-between border-y border-[#1E2530] py-2 text-[13px]">
        <strong>Fee voucher, November 2026</strong><span>No. V-1126-0187</span>
      </div>
      <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-3.5 gap-y-1.25 text-[13px]">
        {info.map(([k, v, bold]) => (
          <div key={k} className="contents">
            <dt className="text-[#566170]">{k}</dt>
            <dd className={`m-0 ${bold ? "font-bold" : "font-semibold"}`}>{v}</dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-col text-[13px]">
        <div className="flex justify-between bg-[#E6F4FB] px-2.5 py-1.75 font-semibold"><span>Description</span><span>Rs</span></div>
        {lines.map(([k, v]) => (
          <div key={k} className="flex justify-between border-b border-[#EEF1F6] px-2.5 py-1.75"><span>{k}</span><span>{v}</span></div>
        ))}
        <div className="flex justify-between bg-[#F9E38A] px-2.5 py-2.25 text-sm font-bold"><span>Payable by due date</span><span>5,300</span></div>
        <div className="flex justify-between px-2.5 py-1.75"><span>Payable after due date (fine Rs 200)</span><span className="font-semibold">5,500</span></div>
      </div>
      <span className="text-xs text-[#566170]">Pay at the school office or to: [BANK NAME AND ACCOUNT TITLE]</span>
      <div className="flex justify-between gap-5 pt-5.5 text-xs text-[#566170]">
        <span className="flex-1 border-t border-[#566170] pt-1">Received by</span>
        <span className="flex-1 border-t border-[#566170] pt-1">Stamp and date</span>
      </div>
    </div>
  );
}

export default function FeeVouchers() {
  return (
    <Page>
      <PageTitle
        title="Fee vouchers, November 2026"
        sub="One voucher per student, built from the fee structure. Print them or send them to parents on WhatsApp."
      />

      <div className="flex flex-wrap items-start gap-4">
        <aside className="flex max-w-85 flex-[1_1_280px] flex-col gap-3.5 rounded-2xl bg-white p-5.5">
          <h2 className="m-0 text-[17px] font-bold">Generate</h2>
          <label className={fieldLabel}>Month
            <select className={inputCls}><option>November 2026</option><option>December 2026</option></select>
          </label>
          <label className={fieldLabel}>Class and section
            <select className={inputCls}><option>All classes, 431 students</option><option>Class 5, Section A</option></select>
          </label>
          <div className="flex flex-col gap-1 rounded-xl bg-[#E6F4FB] px-3.5 py-3 text-[13px]">
            <span><strong>431</strong> vouchers ready</span>
            <span><strong>38</strong> include arrears from October</span>
            <span><strong>117</strong> include transport</span>
          </div>
          <button type="button" className={`${btnDark} min-h-12 text-[15px]`}>Print all (2 per A4 page)</button>
          <button type="button" className={`${btnMint} min-h-12 text-[15px]`}>Send to parents on WhatsApp</button>
          <Link to="/fees/structure" className="inline-flex min-h-11 items-center text-sm font-semibold text-[#0B5F85] hover:text-[#08445F]">
            Change fee structure
          </Link>
        </aside>

        <section className="flex min-w-0 flex-[999_1_560px] flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <span className="text-[13px] font-semibold text-[#566170]">Preview: Hamza Ali, voucher 187 of 431</span>
            <div className="flex gap-2">
              <button type="button" className={pagerBtn}>Previous</button>
              <button type="button" className={pagerBtn}>Next</button>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] rounded-lg border border-[#C9D0DB] bg-white">
            <Voucher label="School copy" />
            <Voucher label="Parent copy" last />
          </div>
          <p className="m-0 text-[13px] text-[#566170]">
            The school keeps the left copy when the fee is paid. Recording the payment in the app marks this voucher as paid and stops the reminders.
          </p>
        </section>
      </div>
    </Page>
  );
}
