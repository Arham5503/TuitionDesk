import { Link } from "react-router";
import { Page, PageTitle, btnDark, btnOutline, rs, tableHead, tableRow } from "../components/ui";

const data: [string, number, number, number, number][] = [
  ["KG", 6, 1500, 1500, 90],
  ["Class 1", 7, 1500, 2500, 94],
  ["Class 2", 8, 1500, 1500, 93],
  ["Class 3", 7, 2000, 2000, 91],
  ["Class 4", 8, 2000, 1000, 95],
  ["Class 5", 7, 2000, 2000, 92],
  ["Class 6", 8, 2500, 0, 93],
  ["Class 7", 6, 2500, 2500, 86],
  ["Class 8", 7, 2500, 2500, 94],
];

const months: [string, number][] = [["Jun", 104], ["Jul", 98.5], ["Aug", 112], ["Sep", 118.5], ["Oct", 123.5], ["Nov", 112.5]];

const cols = "grid grid-cols-[1fr_0.8fr_1.1fr_1.1fr_1fr_1.6fr_0.9fr] items-center gap-3 px-4";
const listLink = "inline-flex min-h-11 items-center text-sm font-semibold text-[#2A2560] hover:underline";

export default function Reports() {
  return (
    <Page>
      <PageTitle title="Monthly report" sub="November 2026, up to 14 November">
        <label className="flex items-center gap-1.5 text-[13px] text-[#566170]">Month
          <select className="min-h-11 rounded-xl border border-[#C9D0DB] bg-white px-3 text-sm text-[#1E2530] font-[inherit]">
            <option>November 2026</option><option>October 2026</option>
          </select>
        </label>
        <button type="button" className={btnOutline}>Download Excel</button>
        <button type="button" className={btnDark}>Download PDF</button>
      </PageTitle>

      <div className="flex flex-wrap items-start gap-4">
        <section className="flex min-w-0 flex-[999_1_600px] flex-col gap-4 rounded-2xl bg-white p-6">
          <h2 className="m-0 text-lg font-bold">Fees and attendance by class</h2>
          <div className="overflow-x-auto">
            <div className="flex min-w-180 flex-col">
              <div className={`${cols} ${tableHead} py-3`}>
                <span>Class</span><span>Students</span><span>Expected</span><span>Collected</span><span>Unpaid</span><span>Collected %</span><span>Attendance</span>
              </div>
              {data.map(([name, n, fee, due, att]) => {
                const exp = n * fee;
                const col = exp - due;
                const pct = Math.round((col / exp) * 100);
                return (
                  <div key={name} className={`${cols} ${tableRow} py-3.25`}>
                    <span className="font-semibold">{name}</span>
                    <span>{n}</span>
                    <span>{rs(exp)}</span>
                    <span>{rs(col)}</span>
                    <span className={`font-semibold ${due ? "text-[#A8261E]" : "text-[#0B6B45]"}`}>{due ? rs(due) : "None"}</span>
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-lg bg-[#EEF1F6]">
                        <div className="h-2 rounded-lg bg-[#F6D95B]" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="w-10 flex-none text-right font-semibold">{pct}%</span>
                    </div>
                    <span>{att}%</span>
                  </div>
                );
              })}
              <div className={`${cols} rounded-xl bg-[#F4F6FA] py-3.5 text-sm font-bold`}>
                <span>Total</span><span>64</span><span>Rs 128,000</span><span>Rs 112,500</span>
                <span className="text-[#A8261E]">Rs 15,500</span><span className="text-right">88%</span><span>92%</span>
              </div>
            </div>
          </div>
          <p className="m-0 text-[13px] text-[#566170]">
            Unpaid here is November only. Bilal Ahmed also owes Rs 2,500 from October, which makes the total overdue Rs 18,000.
          </p>
        </section>

        <aside className="flex max-w-100 flex-[1_1_300px] flex-col gap-4">
          <section className="flex flex-col gap-4 rounded-2xl bg-white p-5.5">
            <h2 className="m-0 text-[17px] font-bold">Collected, last 6 months</h2>
            <div className="flex h-47.5 items-end gap-3">
              {months.map(([name, v], i) => (
                <div key={name} className="flex flex-1 flex-col items-center gap-1.5">
                  <span className="text-xs font-semibold">{v}</span>
                  <div
                    className={`w-full rounded-[8px_8px_3px_3px] ${i === months.length - 1 ? "bg-[#F6D95B]" : "bg-[#C9C3F7]"}`}
                    style={{ height: `${Math.round((v / 128) * 140)}px` }}
                  />
                  <span className="text-xs text-[#566170]">{name}</span>
                </div>
              ))}
            </div>
            <p className="m-0 text-[13px] text-[#566170]">In thousands of rupees. November is not closed yet.</p>
          </section>

          <section className="flex flex-col gap-2.5 rounded-2xl bg-[#D9D4FB] px-5.5 py-5">
            <h2 className="m-0 text-[17px] font-bold">Ready-made lists</h2>
            <Link to="/fees" className={listLink}>Unpaid fee list, 9 students</Link>
            <Link to="/attendance/register" className={listLink}>Students below 80% attendance</Link>
            <Link to="/reminders" className={listLink}>WhatsApp messages sent this month</Link>
          </section>
        </aside>
      </div>
    </Page>
  );
}
