import { Link } from "react-router";
import { Page, PageTitle, Pill, Stat, StatGrid, btnDark, btnMint, btnOutline, tableHead, tableRow, type Tone } from "../components/ui";

type St = "Read" | "Delivered" | "Failed";
const stTone: Record<St, Tone> = { Read: "mint", Delivered: "blue", Failed: "red" };

const rows: [string, string, string, string, string, St][] = [
  ["Mr. Ahmed", "0300 0000 108", "Bilal Ahmed", "Class 7", "Rs 5,000", "Failed"],
  ["Mr. Tariq", "0300 0000 119", "Usman Tariq", "Class 8", "Rs 2,500", "Delivered"],
  ["Mr. Ali", "0300 0000 127", "Hamza Ali", "Class 5", "Rs 2,000", "Read"],
  ["Mrs. Shah", "0300 0000 140", "Hira Shah", "Class 3", "Rs 2,000", "Read"],
  ["Mr. Noor", "0300 0000 155", "Maryam Noor", "KG", "Rs 1,500", "Read"],
  ["Mr. Yousaf", "0300 0000 143", "Eman Yousaf", "Class 2", "Rs 1,500", "Read"],
  ["Mr. Siddiqui", "0300 0000 151", "Taha Siddiqui", "Class 1", "Rs 1,500", "Delivered"],
  ["Mr. Abbas", "0300 0000 147", "Fatima Zahra", "Class 1", "Rs 1,000", "Read"],
  ["Mr. Aslam", "0300 0000 134", "Laiba Aslam", "Class 4", "Rs 1,000", "Read"],
];

const runs: [string, string, number][] = [
  ["2 Nov", "Due in 3 days", 41],
  ["5 Nov", "Due today", 23],
  ["8 Nov", "1st overdue", 14],
  ["11 Nov", "2nd overdue", 11],
  ["14 Nov", "3rd overdue", 9],
];

const cols = "grid grid-cols-[1.7fr_1.5fr_0.9fr_1fr_1fr] items-center gap-3 px-4";

export default function Reminders() {
  return (
    <Page>
      <PageTitle title="WhatsApp fee reminders" sub="Sent automatically at 9:00 AM. A parent stops getting them the moment the fee is recorded.">
        <button type="button" className={btnOutline}>Pause all reminders</button>
        <Link to="/reminders/settings" className={btnDark}>Rules and message</Link>
      </PageTitle>

      <StatGrid>
        <Stat c="blue" label="Sent today" value="9" note="3rd overdue reminder, Rs 18,000" />
        <Stat c="mint" label="Read by parent" value="6 of 9" note="2 delivered, not opened yet" />
        <Stat c="danger" label="Not delivered" value="1" note="Call this parent instead" />
        <Stat c="purple" label="Next automatic run" value="Tue 17 Nov" note="9:00 AM, whoever is still unpaid" />
      </StatGrid>

      <div className="flex flex-wrap items-start gap-4">
        <section className="flex min-w-0 flex-[999_1_560px] flex-col gap-4 rounded-2xl bg-white p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="m-0 text-lg font-bold">Today's run, 14 November</h2>
            <button type="button" className={btnMint}>Send again to unread</button>
          </div>
          <div className="overflow-x-auto">
            <div className="flex min-w-175 flex-col">
              <div className={`${cols} ${tableHead} py-3`}>
                <span>Parent</span><span>Student</span><span>Amount</span><span>Status</span><span>Action</span>
              </div>
              {rows.map(([parent, phone, student, cls, amt, st]) => {
                const failed = st === "Failed";
                return (
                  <div key={phone} className={`${cols} ${tableRow} py-2`}>
                    <div className="flex flex-col gap-0.5"><span className="font-semibold">{parent}</span><span className="text-xs text-[#566170]">{phone}</span></div>
                    <div className="flex flex-col gap-0.5"><span>{student}</span><span className="text-xs text-[#566170]">{cls}</span></div>
                    <span className="font-bold">{amt}</span>
                    <span><Pill t={stTone[st]}>{failed ? "Not delivered" : st}</Pill></span>
                    <Link
                      to={failed ? "/students/LG-0008" : "/fees/record"}
                      className="inline-flex min-h-11 items-center text-[13px] font-semibold text-[#0B5F85] hover:text-[#08445F]"
                    >
                      {failed ? "Call parent" : "Receive fee"}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <aside className="flex max-w-95 flex-[1_1_300px] flex-col gap-4">
          <section className="flex flex-col gap-3.5 rounded-2xl bg-white p-5.5">
            <h2 className="m-0 text-[17px] font-bold">November so far</h2>
            <p className="m-0 text-[13px] text-[#566170]">Parents messaged in each run. The list shrinks as fees come in.</p>
            {runs.map(([date, what, n], i) => (
              <div key={date} className="flex flex-col gap-1.25">
                <div className="flex justify-between gap-2 text-[13px]">
                  <span className="font-semibold">{date}</span>
                  <span className="text-[#566170]">{what}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2.5 flex-1 rounded-lg bg-[#EEF1F6]">
                    <div
                      className={`h-2.5 rounded-lg ${i === runs.length - 1 ? "bg-[#0A8F6F]" : "bg-[#9ED9C5]"}`}
                      style={{ width: `${Math.round((n / 41) * 100)}%` }}
                    />
                  </div>
                  <span className="w-6 flex-none text-right text-[13px] font-bold">{n}</span>
                </div>
              </div>
            ))}
          </section>

          <section className="flex flex-col gap-2 rounded-2xl bg-[#FDF0C8] px-5 py-4.5">
            <span className="text-[13px] font-bold text-[#6E4700]">Needs a phone call</span>
            <p className="m-0 text-sm leading-normal">
              Bilal Ahmed's father has Rs 5,000 unpaid for two months and today's message did not deliver. Check the number or call him.
            </p>
            <Link to="/students/LG-0008" className="inline-flex min-h-11 items-center text-sm font-semibold text-[#5C3B00]">Open student</Link>
          </section>
        </aside>
      </div>
    </Page>
  );
}
