import { Link } from "react-router";
import { Card, Page, PageTitle, Pill, btnDark, btnOutline, btnYellow, fieldLabel, inputCls, tableHead, tableRow, type Tone } from "../components/ui";

const fees: { name: string; note: string; when: string; t: Tone; v: [string, string, string]; on: boolean }[] = [
  { name: "Admission fee", note: "New students only", when: "Once", t: "purple", v: ["5,000", "5,000", "6,000"], on: true },
  { name: "Monthly tuition", note: "Every student, every month", when: "Monthly", t: "blue", v: ["2,500", "3,000", "3,500"], on: true },
  { name: "Exam fee", note: "Added in the month of each exam", when: "Per term", t: "amber", v: ["600", "800", "1,000"], on: true },
  { name: "Annual fund", note: "Added to the April voucher", when: "Yearly", t: "mint", v: ["2,000", "2,000", "2,000"], on: true },
  { name: "Transport", note: "Only students who use the van", when: "Monthly, optional", t: "blue", v: ["1,500", "1,500", "1,500"], on: true },
  { name: "Books and uniform", note: "Recorded when sold, not on the voucher", when: "When bought", t: "purple", v: ["0", "0", "0"], on: false },
];
const groups = ["KG to Class 2", "Class 3 to 5", "Class 6 to 8"];

const cols = "grid grid-cols-[2fr_1.2fr_1fr_1fr_1fr_0.8fr] items-center gap-3 px-4";

const example: [string, string][] = [
  ["Monthly tuition", "Rs 3,000"],
  ["Exam fee, mid-term", "Rs 800"],
  ["Transport (if opted)", "Rs 1,500"],
];

export default function FeeStructure() {
  return (
    <Page>
      <PageTitle title="Fee structure, session 2026-27" sub="Set each fee once. Monthly vouchers are built from this table.">
        <Link to="/fees/vouchers" className={btnOutline}>Preview a voucher</Link>
        <button type="button" className={btnDark}>Save fee structure</button>
      </PageTitle>

      <Card>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="m-0 text-lg font-bold">Amounts by class group (Rs)</h2>
          <button type="button" className={btnYellow}>Add fee type</button>
        </div>
        <div className="overflow-x-auto">
          <div className="flex min-w-215 flex-col">
            <div className={`${cols} ${tableHead} py-3.5`}>
              <span>Fee type</span><span>Charged</span>
              {groups.map((g) => <span key={g}>{g}</span>)}
              <span>On voucher</span>
            </div>
            {fees.map((f) => (
              <div key={f.name} className={`${cols} ${tableRow} py-2.5`}>
                <div className="flex flex-col gap-0.5"><span className="font-semibold">{f.name}</span><span className="text-xs text-[#566170]">{f.note}</span></div>
                <span><Pill t={f.t}>{f.when}</Pill></span>
                {f.v.map((v, i) => (
                  <input key={i} type="text" inputMode="numeric" aria-label={`${f.name}, ${groups[i]}`} defaultValue={v} className={inputCls} />
                ))}
                <label className="flex min-h-11 items-center gap-2 text-[13px]">
                  <input type="checkbox" defaultChecked={f.on} className="size-5 accent-[#1E2530]" />Show
                </label>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-4">
        <Card className="gap-3 p-5.5">
          <h2 className="m-0 text-[17px] font-bold">Due date and late fine</h2>
          <label className={fieldLabel}>Fee due on<input type="text" className={inputCls} defaultValue="10th of each month" /></label>
          <label className={fieldLabel}>Late fine after the due date (Rs)<input type="text" inputMode="numeric" className={inputCls} defaultValue="200" /></label>
          <label className="flex min-h-11 items-center gap-2.5 text-sm">
            <input type="checkbox" defaultChecked className="size-5 flex-none accent-[#1E2530]" />
            Carry unpaid amounts to the next voucher as arrears
          </label>
        </Card>

        <Card className="gap-3 p-5.5">
          <h2 className="m-0 text-[17px] font-bold">Discounts</h2>
          <label className={fieldLabel}>Second child of the same family (% off tuition)<input type="text" inputMode="numeric" className={inputCls} defaultValue="10" /></label>
          <label className={fieldLabel}>Third child and after (% off tuition)<input type="text" inputMode="numeric" className={inputCls} defaultValue="20" /></label>
          <p className="m-0 text-[13px] text-[#566170]">Individual scholarships are set on the student's own profile.</p>
        </Card>

        <section className="flex flex-col gap-2.5 rounded-2xl bg-[#D9D4FB] p-5.5">
          <h2 className="m-0 text-[17px] font-bold">Example, Class 5 in November</h2>
          <dl className="m-0 grid grid-cols-[1fr_auto] gap-x-4 gap-y-2 text-sm">
            {example.map(([k, v]) => (
              <div key={k} className="contents"><dt>{k}</dt><dd className="m-0 font-semibold">{v}</dd></div>
            ))}
            <dt className="font-bold">Voucher total</dt><dd className="m-0 font-bold">Rs 5,300</dd>
          </dl>
          <span className="text-[13px] text-[#3A3466]">Rs 5,500 if paid after the 10th.</span>
        </section>
      </div>
    </Page>
  );
}
