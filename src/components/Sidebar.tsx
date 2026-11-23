import { useState } from "react";
import { Link } from "react-router";

// Icon paths taken from the design (24x24, stroke icons)
const menu = [
  { id: "dashboard", label: "Dashboard", d: "M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z" },
  { id: "students", label: "Students", d: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 6.5M18 14.5a6 6 0 0 1 3.5 5.5" },
  { id: "attendance", label: "Attendance", d: "M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 12l3 3 5-6" },
  { id: "fees", label: "Fees", d: "M3 7h18v11H3zM3 10.5h18M7 15h4" },
  { id: "reminders", label: "Reminders", d: "M4 5h16v11H9l-5 4zM8 9h8M8 12h5" },
  { id: "classes", label: "Classes", d: "M4 5h7v6H4zM13 5h7v6h-7zM4 13h7v6H4zM13 13h7v6h-7z" },
  { id: "exams", label: "Exams", d: "M6 3h9l4 4v14H6zM14 3v5h5M9 13h6M9 17h4" },
  { id: "timetable", label: "Timetable", d: "M4 5h16v15H4zM4 10h16M10 10v10M15 10v10M4 15h16" },
  { id: "staff", label: "Staff", d: "M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM5 20a7 7 0 0 1 14 0M17 14l1.5 1.5L21 13" },
  { id: "reports", label: "Reports", d: "M5 20V10M12 20V4M19 20v-7" },
];

const other = [
  { id: "settings", label: "Settings", d: "M4 7h10M18 7h2M4 17h2M10 17h10M16 4.5v5M8 14.5v5" },
  { id: "logout", label: "Log out", d: "M10 4H5v16h5M14 8l4 4-4 4M9 12h9" },
];

type Item = { id: string; label: string; d: string };
type NavProps = { active: string; onSelect: (id: string) => void };

function NavItem({ item, active, onSelect }: NavProps & { item: Item }) {
  const isActive = item.id === active;
  return (
    <Link
      to={`/${item.id}`}
      onClick={() => onSelect(item.id)}
      aria-current={isActive ? "page" : undefined}
      className={`flex min-h-11 items-center gap-3 rounded-xl px-3.5 text-[14.5px] no-underline transition-colors ${
        isActive
          ? "bg-[#C5E9F9] font-bold text-[#1E2530]"
          : "font-medium text-[#4A5563] hover:bg-background"
      }`}
    >
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d={item.d} />
      </svg>
      <span>{item.label}</span>
    </Link>
  );
}

function NavSection({ title, items, active, onSelect }: NavProps & { title: string; items: Item[] }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="px-3.5 pb-1.5 text-xs font-semibold tracking-[0.06em] text-[#566170]">{title}</span>
      {items.map((item) => (
        <NavItem key={item.id} item={item} active={active} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");

  return (
    <aside className="w-62 shrink-0">
      <nav
        aria-label="Main menu"
        className="flex h-full flex-col gap-5.5 bg-white px-4 py-6 font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#1E2530]"
      >
        <Link to="/dashboard" onClick={() => setActive("dashboard")} className="flex items-center gap-2.5 px-2 text-[#1E2530] no-underline">
          <img src="/tuitiondesk-icon.svg" alt="" width="34" height="34" />
          <span className="text-xl font-bold">TuitionDesk</span>
        </Link>

        <NavSection title="MENU" items={menu} active={active} onSelect={setActive} />
        <NavSection title="OTHER" items={other} active={active} onSelect={setActive} />

        <div className="mt-3 flex flex-col gap-1.5 rounded-2xl bg-[#E1F5EE] p-4">
          <span className="text-[13px] font-bold text-[#0A5F54]">Auto reminders are on</span>
          <span className="text-[13px] leading-[1.45] text-[#1E2530]">Next WhatsApp run: Tue 17 Nov, 9:00 AM.</span>
          <a href="#reminder-settings" className="text-[13px] font-semibold text-[#0A5F54] underline">
            Change rules
          </a>
        </div>
      </nav>
    </aside>
  );
}
