import { Link, useNavigate } from "react-router";
import { Page, btnDark, btnOutline } from "../components/ui";

const shortcuts = [
  { to: "/dashboard", label: "Dashboard", note: "Today's attendance and fees" },
  { to: "/students", label: "Students", note: "Find a student or parent" },
  { to: "/fees", label: "Fees", note: "Who has paid and who owes" },
  { to: "/attendance", label: "Attendance", note: "Mark today's register" },
];

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Page>
      <section className="flex flex-col items-center gap-6 rounded-2xl bg-white px-6 py-14 text-center sm:py-20">
        {/* Illustration: an empty register page */}
        <svg aria-hidden="true" width="120" height="120" viewBox="0 0 120 120" fill="none">
          <rect x="22" y="14" width="76" height="92" rx="14" fill="#E6F4FB" />
          <rect x="34" y="30" width="52" height="8" rx="4" fill="#C5E9F9" />
          <rect x="34" y="46" width="36" height="8" rx="4" fill="#D9D4FB" />
          <rect x="34" y="62" width="44" height="8" rx="4" fill="#F9E38A" />
          <circle cx="86" cy="84" r="20" fill="#1E2530" />
          <circle cx="83" cy="81" r="7" stroke="#ffffff" strokeWidth="3" />
          <path d="M88 86l6 6" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <div className="flex max-w-120 flex-col gap-2">
          <span className="text-[13px] font-bold tracking-wide text-[#0B5F85]">ERROR 404</span>
          <h1 className="m-0 text-[28px] leading-tight font-bold text-balance">This page is not in the register</h1>
          <p className="m-0 text-[15px] leading-normal text-[#566170]">
            The link may be old, or the page was moved. Nothing in your center's data has changed.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5">
          <button type="button" className={btnOutline} onClick={() => navigate(-1)}>Go back</button>
          <Link to="/dashboard" className={btnDark}>Go to dashboard</Link>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="m-0 text-[17px] font-bold">Or jump to</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-4">
          {shortcuts.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="flex min-h-11 flex-col gap-1 rounded-2xl border border-transparent bg-white px-5 py-4.5 text-[#1E2530] no-underline hover:border-[#8ED0EE]"
            >
              <span className="text-[15px] font-bold">{s.label}</span>
              <span className="text-[13px] text-[#566170]">{s.note}</span>
            </Link>
          ))}
        </div>
      </section>
    </Page>
  );
}
