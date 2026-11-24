import { Link } from "react-router";
import { avatars, Card, Page, Pill, Stat, StatGrid, btnDark, btnOutline, btnYellow, rs, selectCls, tableHead, tableRow, type Tone } from "../components/ui";

type Today = "Present" | "Absent" | "Leave";
const todayTone: Record<Today, Tone> = { Present: "green", Absent: "red", Leave: "amber" };

const staff: [string, string, string, string, Today, number, boolean][] = [
  ["Miss Sadia", "0300 0000 201", "Class teacher, 5-A", "English, Class 4 to 6", "Present", 28000, true],
  ["Sir Kashif", "0300 0000 202", "Class teacher, 6-A", "Mathematics, Class 5 to 8", "Present", 35000, true],
  ["Miss Mahnoor", "0300 0000 204", "Class teacher, 5-B", "Urdu, Class 4 to 6", "Leave", 26000, true],
  ["Sir Imran", "0300 0000 205", "Class teacher, 8-A", "Science, Class 5 to 8", "Present", 34000, false],
  ["Miss Hafsa", "0300 0000 203", "Class teacher, KG-A", "All subjects, KG", "Present", 22000, true],
  ["Sir Bilal", "0300 0000 206", "Class teacher, 7-A", "Computer and games", "Present", 30000, false],
  ["Mr. Asif", "0300 0000 207", "Accountant", "Not a teacher", "Present", 30000, true],
  ["Mr. Rafiq", "0300 0000 208", "Security guard", "Not a teacher", "Present", 20000, true],
  ["Mrs. Nasreen", "0300 0000 209", "Helper", "Not a teacher", "Absent", 18000, true],
];

const cols = "grid grid-cols-[1.7fr_1.3fr_1.9fr_0.9fr_1fr_1fr_1fr] items-center gap-3 px-4";

export default function Staff() {
  return (
    <Page>
      <StatGrid>
        <Stat c="purple" label="Staff" value="24" note="18 teachers, 6 other staff" />
        <Stat c="blue" label="Present today" value="22 of 24" note="1 on leave, 1 absent" />
        <Stat c="yellow" label="November salaries" value="Rs 648,000" note="19 of 24 paid" />
        <Stat c="danger" label="Still to pay" value="Rs 142,000" note="5 staff members" />
      </StatGrid>

      <Card className="gap-4.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="m-0 text-[22px] font-bold">Staff</h1>
          <div className="flex flex-wrap items-center gap-2.5">
            <label className="flex items-center gap-1.5 text-[13px] text-[#566170]">Show
              <select className={selectCls}><option>All staff</option><option>Teachers</option><option>Other staff</option></select>
            </label>
            <Link to="/teachers" className={btnOutline}>App access</Link>
            <button type="button" className={btnOutline}>Mark staff attendance</button>
            <button type="button" className={btnDark}>Pay salaries</button>
            <button type="button" className={btnYellow}>Add staff</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="flex min-w-240 flex-col">
            <div className={`${cols} ${tableHead} py-3.5`}>
              <span>Name</span><span>Role</span><span>Teaches</span><span>Today</span><span>Monthly salary</span><span>November</span><span>Action</span>
            </div>
            {staff.map(([name, phone, role, teaches, today, salary, paid], i) => (
              <div key={phone} className={`${cols} ${tableRow} py-2.5`}>
                <div className="flex min-w-0 items-center gap-3">
                  <span aria-hidden="true" className={`flex size-9.5 flex-none items-center justify-center rounded-full text-[13px] font-bold ${avatars[i % 3]}`}>
                    {name.split(" ")[1].slice(0, 2).toUpperCase()}
                  </span>
                  <div className="flex flex-col gap-0.5"><span className="font-semibold">{name}</span><span className="text-xs text-[#566170]">{phone}</span></div>
                </div>
                <span>{role}</span>
                <span className="text-[#3B4654]">{teaches}</span>
                <span><Pill t={todayTone[today]}>{today}</Pill></span>
                <span>{rs(salary)}</span>
                <span><Pill t={paid ? "green" : "amber"}>{paid ? "Paid" : "Not paid"}</Pill></span>
                <a href="#" className="inline-flex min-h-11 items-center text-[13px] font-semibold text-[#0B5F85] hover:text-[#08445F]">
                  {paid ? "Salary slip" : "Pay now"}
                </a>
              </div>
            ))}
          </div>
        </div>
        <span className="text-[13px] text-[#566170]">Showing 9 of 24. Salaries are visible to the owner and the accountant only.</span>
      </Card>
    </Page>
  );
}
