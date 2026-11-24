import { Link } from "react-router";
import { Plus, Search } from "lucide-react";

// ---- Data (static for now; replace with API data later) ----
type FeeStatus = "Paid" | "Partial" | "Overdue";

const pill: Record<FeeStatus, string> = {
  Paid: "bg-[#DDF5E9] text-[#0B6B45]",
  Partial: "bg-[#FDF0C8] text-[#6E4700]",
  Overdue: "bg-[#FDE7E5] text-[#A8261E]",
};

const avatars = ["bg-[#D9D4FB]", "bg-[#C5E9F9]", "bg-[#F9E38A]"];

const students: {
  name: string; id: string; cls: string; parent: string;
  phone: string; fee: number; status: FeeStatus; attendance: string;
}[] = [
  { name: "Ayesha Khan", id: "LG-0012", cls: "Class 4", parent: "Mrs. Khan (mother)", phone: "0300 0000 112", fee: 2000, status: "Paid", attendance: "96%" },
  { name: "Hamza Ali", id: "LG-0027", cls: "Class 5", parent: "Mr. Ali (father)", phone: "0300 0000 127", fee: 2000, status: "Overdue", attendance: "92%" },
  { name: "Zainab Fatima", id: "LG-0031", cls: "Class 2", parent: "Mr. Hussain (father)", phone: "0300 0000 131", fee: 1500, status: "Paid", attendance: "100%" },
  { name: "Bilal Ahmed", id: "LG-0008", cls: "Class 7", parent: "Mr. Ahmed (father)", phone: "0300 0000 108", fee: 2500, status: "Overdue", attendance: "71%" },
  { name: "Maryam Noor", id: "LG-0055", cls: "KG", parent: "Mr. Noor (father)", phone: "0300 0000 155", fee: 1500, status: "Overdue", attendance: "88%" },
  { name: "Usman Tariq", id: "LG-0019", cls: "Class 8", parent: "Mr. Tariq (father)", phone: "0300 0000 119", fee: 2500, status: "Overdue", attendance: "83%" },
  { name: "Hira Shah", id: "LG-0040", cls: "Class 3", parent: "Mrs. Shah (mother)", phone: "0300 0000 140", fee: 2000, status: "Overdue", attendance: "92%" },
  { name: "Ali Raza", id: "LG-0023", cls: "Class 6", parent: "Mr. Raza (father)", phone: "0300 0000 123", fee: 2500, status: "Paid", attendance: "79%" },
  { name: "Fatima Zahra", id: "LG-0047", cls: "Class 1", parent: "Mr. Abbas (father)", phone: "0300 0000 147", fee: 1500, status: "Partial", attendance: "96%" },
  { name: "Abdullah Iqbal", id: "LG-0036", cls: "Class 6", parent: "Mr. Iqbal (uncle)", phone: "0300 0000 136", fee: 2500, status: "Paid", attendance: "100%" },
];

const initials = (name: string) => name.split(" ").map((p) => p[0]).slice(0, 2).join("");

// Same column widths for the header row and every data row
const cols = "grid grid-cols-[2.2fr_0.9fr_1.6fr_1.4fr_1fr_1fr_0.9fr_0.7fr] items-center gap-3 px-4";

const selectCls =
  "min-h-11 rounded-xl border border-[#C9D0DB] bg-[#F4F6FA] px-3 text-sm text-[#1E2530] font-[inherit]";
const pagerBtn =
  "min-h-11 cursor-pointer rounded-[10px] border border-[#C9D0DB] bg-white px-4 text-sm font-semibold text-[#1E2530]";

// ---- Page ----
export default function Students() {
  return (
    <div className="px-6 pb-6 font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#1E2530]">
      <section className="flex flex-col gap-4.5 rounded-2xl bg-white p-6">
        {/* Title + filters */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="m-0 text-[22px] font-bold">All students</h1>
            <p className="m-0 text-[13px] text-[#566170]">64 active, 3 left this year</p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <label className="flex min-h-11 items-center gap-2 rounded-[22px] border border-[#C9D0DB] bg-white px-3.5">
              <Search size={16} className="text-[#566170]" aria-hidden="true" />
              <input
                type="search"
                aria-label="Search by name or ID"
                placeholder="Search by name or ID"
                className="w-42.5 border-0 bg-transparent text-sm text-[#1E2530] outline-none"
              />
            </label>

            <label className="flex items-center gap-1.5 text-[13px] text-[#566170]">
              Class
              <select className={selectCls}>
                <option>All classes</option>
                <option>KG</option>
                <option>Class 1</option>
                <option>Class 5</option>
              </select>
            </label>

            <label className="flex items-center gap-1.5 text-[13px] text-[#566170]">
              Fee status
              <select className={selectCls}>
                <option>All</option>
                <option>Paid</option>
                <option>Partial</option>
                <option>Overdue</option>
              </select>
            </label>

            <Link
              to="/students/new"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#F6D95B] px-4.5 text-sm font-bold text-[#1E2530] no-underline"
            >
              <Plus size={16} strokeWidth={2.4} aria-hidden="true" />
              <span>Add student</span>
            </Link>
          </div>
        </div>

        {/* Table (scrolls sideways on small screens) */}
        <div className="overflow-x-auto">
          <div className="flex min-w-245 flex-col">
            <div className={`${cols} rounded-xl bg-[#E6F4FB] py-3.5 text-[13px] font-semibold`}>
              <span>Student</span>
              <span>Class</span>
              <span>Parent or guardian</span>
              <span>WhatsApp number</span>
              <span>Monthly fee</span>
              <span>Fee status</span>
              <span>Attendance</span>
              <span>Action</span>
            </div>

            {students.map((s, i) => (
              <div key={s.id} className={`${cols} border-b border-[#EEF1F6] py-3 text-sm`}>
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={`flex size-10 flex-none items-center justify-center rounded-full text-[13px] font-bold ${avatars[i % 3]}`}
                  >
                    {initials(s.name)}
                  </span>
                  <div className="flex min-w-0 flex-col gap-0.5">
                    <span className="font-semibold">{s.name}</span>
                    <span className="text-xs text-[#566170]">{s.id}</span>
                  </div>
                </div>
                <span>{s.cls}</span>
                <span>{s.parent}</span>
                <span className="text-[#3B4654]">{s.phone}</span>
                <span>Rs {s.fee.toLocaleString("en-US")}</span>
                <span>
                  <span className={`inline-block rounded-full px-2.5 py-1.25 text-xs font-bold ${pill[s.status]}`}>
                    {s.status}
                  </span>
                </span>
                <span>{s.attendance}</span>
                <Link
                  to={`/students/${s.id}`}
                  className="inline-flex min-h-11 items-center text-[13px] font-semibold text-[#0B5F85] hover:text-[#08445F]"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button type="button" className={pagerBtn}>Previous</button>
          <span className="text-[13px] text-[#566170]">Showing 1 to 10 of 64</span>
          <button type="button" className={pagerBtn}>Next</button>
        </div>
      </section>
    </div>
  );
}
