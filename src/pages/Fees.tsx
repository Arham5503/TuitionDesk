import { Link } from "react-router";
import { Avatar, Card, Page, Pill, Stat, StatGrid, btnDark, btnMint, btnOutline, rs, selectCls, tableHead, tableRow, type Tone } from "../components/ui";

type Status = "Paid" | "Partial" | "Overdue";
const statusTone: Record<Status, Tone> = { Paid: "green", Partial: "amber", Overdue: "red" };

const rows: [string, string, string, number, number, number, string, Status][] = [
  ["Bilal Ahmed", "LG-0008", "Class 7", 2500, 0, 5000, "Oct and Nov unpaid", "Overdue"],
  ["Usman Tariq", "LG-0019", "Class 8", 2500, 0, 2500, "Not paid", "Overdue"],
  ["Hamza Ali", "LG-0027", "Class 5", 2000, 0, 2000, "Not paid", "Overdue"],
  ["Hira Shah", "LG-0040", "Class 3", 2000, 0, 2000, "Not paid", "Overdue"],
  ["Maryam Noor", "LG-0055", "KG", 1500, 0, 1500, "Not paid", "Overdue"],
  ["Fatima Zahra", "LG-0047", "Class 1", 1500, 500, 1000, "4 Nov, cash", "Partial"],
  ["Ayesha Khan", "LG-0012", "Class 4", 2000, 2000, 0, "13 Nov, cash", "Paid"],
  ["Zainab Fatima", "LG-0031", "Class 2", 1500, 1500, 0, "3 Nov, JazzCash", "Paid"],
  ["Ali Raza", "LG-0023", "Class 6", 2500, 2500, 0, "5 Nov, cash", "Paid"],
  ["Abdullah Iqbal", "LG-0036", "Class 6", 2500, 2500, 0, "2 Nov, Easypaisa", "Paid"],
];

const cols = "grid grid-cols-[2fr_0.8fr_0.9fr_0.9fr_0.9fr_1.3fr_0.9fr_1.7fr] items-center gap-3 px-4";
const link = "inline-flex min-h-11 items-center text-[13px] font-semibold text-[#0B5F85] hover:text-[#08445F]";
const filterLabel = "flex items-center gap-1.5 text-[13px] text-[#566170]";

export default function Fees() {
  return (
    <Page>
      <StatGrid>
        <Stat c="blue" label="Expected, November" value="Rs 128,000" note="64 students" />
        <Stat c="yellow" label="Collected" value="Rs 112,500" note="55 paid in full, 2 partial" />
        <Stat c="danger" label="Overdue" value="Rs 18,000" note="9 students, Rs 2,500 from October" />
        <Stat c="purple" label="Collection rate" value="88%" note="October closed at 98%" />
      </StatGrid>

      <Card className="gap-4.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="m-0 text-[22px] font-bold">Fee collection</h1>
          <div className="flex flex-wrap items-center gap-2.5">
            <label className={filterLabel}>Month<select className={selectCls}><option>November 2026</option><option>October 2026</option></select></label>
            <label className={filterLabel}>Class<select className={selectCls}><option>All classes</option><option>KG</option><option>Class 1</option></select></label>
            <label className={filterLabel}>Status<select className={selectCls}><option>Unpaid first</option><option>Paid</option><option>Partial</option><option>Overdue</option></select></label>
            <Link to="/fees/structure" className={btnOutline}>Fee structure</Link>
            <Link to="/fees/vouchers" className={btnOutline}>Vouchers</Link>
            <Link to="/reminders" className={btnMint}>Remind all 9 on WhatsApp</Link>
            <Link to="/fees/record" className={btnDark}>Record payment</Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="flex min-w-245 flex-col">
            <div className={`${cols} ${tableHead} py-3.5`}>
              <span>Student</span><span>Class</span><span>Fee</span><span>Paid</span><span>Balance</span><span>Paid on</span><span>Status</span><span>Action</span>
            </div>
            {rows.map(([name, id, cls, fee, paid, bal, on, st], i) => (
              <div key={id} className={`${cols} ${tableRow} py-2.5`}>
                <div className="flex min-w-0 items-center gap-3">
                  <Avatar name={name} i={i} size="size-9.5" />
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <span className="font-semibold">{name}</span>
                    <span className="text-xs text-[#566170]">{id}</span>
                  </div>
                </div>
                <span>{cls}</span>
                <span>{rs(fee)}</span>
                <span>{rs(paid)}</span>
                <span className={`font-bold ${bal ? "text-[#A8261E]" : ""}`}>{rs(bal)}</span>
                <span className="text-[#3B4654]">{on}</span>
                <span><Pill t={statusTone[st]}>{st}</Pill></span>
                <div className="flex items-center gap-3.5">
                  {bal > 0 ? (
                    <>
                      <Link to="/fees/record" className={link}>Receive</Link>
                      <Link to="/reminders" className={`${link} text-[#0A5F54]`}>Remind</Link>
                    </>
                  ) : (
                    <Link to="/fees/record" className={link}>View receipt</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <button type="button" className={btnOutline}>Previous</button>
          <span className="text-[13px] text-[#566170]">Showing 1 to 10 of 64</span>
          <button type="button" className={btnOutline}>Next</button>
        </div>
      </Card>
    </Page>
  );
}
