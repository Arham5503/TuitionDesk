import type { ReactNode } from "react";

const features = [
  { title: "Attendance in one minute", body: "Tap present or absent for each class. The register fills itself." },
  { title: "Every fee tracked", body: "Paid, partial and overdue, with a receipt for each payment." },
  { title: "Reminders that send themselves", body: "Parents with an unpaid fee get a polite WhatsApp message. You do not have to ask." },
];

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 34 34">
      <rect width="34" height="34" rx="10" fill="#8ED0EE" />
      <path d="M9 12.5l8-4 8 4-8 4z" fill="#1E2530" />
      <path d="M12 16.5v4.5c2.8 2.4 7.2 2.4 10 0v-4.5" fill="none" stroke="#1E2530" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AuthSide() {
  return (
    <section className="flex flex-[1_1_420px] flex-col justify-between gap-10 bg-[#D9D4FB] p-8 sm:p-14">
      <div className="flex items-center gap-3">
        <Logo />
        <span className="text-2xl font-bold">TuitionDesk</span>
      </div>
      <div className="flex max-w-130 flex-col gap-7">
        <h2 className="m-0 text-[32px] leading-[1.15] font-bold text-balance sm:text-[44px]">
          Know who came, who paid and who still owes.
        </h2>
        <ul className="m-0 flex list-none flex-col gap-3 p-0">
          {features.map((f) => (
            <li key={f.title} className="flex flex-col gap-1 rounded-[14px] bg-white px-4.5 py-4">
              <span className="text-[15px] font-bold">{f.title}</span>
              <span className="text-sm text-[#3B4654]">{f.body}</span>
            </li>
          ))}
        </ul>
      </div>
      <span className="text-[13px] text-[#3A3466]">Built for schools, academies and tuition centers in Pakistan.</span>
    </section>
  );
}

/** Two-panel auth page: brand side + centred white form card. */
export default function AuthLayout({ children, gap = "gap-5" }: { children: ReactNode; gap?: string }) {
  return (
    <div className="flex min-h-screen flex-wrap bg-background font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#1E2530]">
      <AuthSide />
      <section className="flex flex-[1_1_420px] items-center justify-center px-4 py-10 sm:px-8">
        <form onSubmit={(e) => e.preventDefault()} className={`flex w-full max-w-105 flex-col rounded-[20px] bg-white p-6 sm:p-8 ${gap}`}>
          {children}
        </form>
      </section>
    </div>
  );
}

export const authInput =
  "min-h-12.5 w-full rounded-xl border border-[#C9D0DB] bg-white px-4 text-[15px] font-normal text-[#1E2530] font-[inherit] outline-none placeholder:text-[#8A94A3] focus:border-[#0B5F85] focus:ring-2 focus:ring-[#8ED0EE]/60";
export const authBtn =
  "flex min-h-13 cursor-pointer items-center justify-center rounded-xl border-0 bg-[#1E2530] text-base font-semibold text-white no-underline hover:bg-[#2C3542]";
export const authLink = "font-semibold text-[#0B5F85] hover:text-[#08445F]";

/** Row of single-digit inputs for OTP codes. */
export function CodeInputs({ values, height = "h-15", focusIndex }: { values: string[]; height?: string; focusIndex?: number }) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {values.map((v, i) => (
        <input
          key={i}
          type="text"
          inputMode="numeric"
          maxLength={1}
          aria-label={`Digit ${i + 1}`}
          defaultValue={v}
          className={`w-full ${height} rounded-xl border text-center text-2xl font-bold text-[#1E2530] font-[inherit] outline-none focus:border-[#1E2530] ${
            i === focusIndex ? "border-[#1E2530]" : "border-[#C9D0DB]"
          } ${v ? "bg-[#E6F4FB]" : "bg-white"}`}
        />
      ))}
    </div>
  );
}
