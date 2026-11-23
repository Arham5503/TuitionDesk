import type { FormEvent } from "react";

const features = [
  {
    title: "Attendance in one minute",
    body: "Tap present or absent for each class. The register fills itself.",
  },
  {
    title: "Every fee tracked",
    body: "Paid, partial and overdue, with a receipt for each payment.",
  },
  {
    title: "Reminders that send themselves",
    body: "Parents with an unpaid fee get a polite WhatsApp message. You do not have to ask.",
  },
];

const inputClass =
  "min-h-[50px] w-full rounded-xl border border-[#C9D0DB] bg-white px-4 text-[15px] font-normal text-[#1E2530] outline-none placeholder:text-[#8A94A3] focus:border-[#0B5F85] focus:ring-2 focus:ring-[#8ED0EE]/60";

const linkClass = "font-semibold text-[#0B5F85] hover:text-[#08445F]";

type LoginProps = {
  onLogin?: () => void;
};

export default function Login({ onLogin }: LoginProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onLogin?.();
  }

  return (
    <div className="flex min-h-screen flex-wrap bg-background font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[#1E2530]">
      {/* Brand panel */}
      <section className="flex flex-[1_1_420px] flex-col justify-between gap-10 bg-[#D9D4FB] p-8 sm:p-14">
        <div className="flex items-center gap-3">
          <svg aria-hidden="true" width="40" height="40" viewBox="0 0 34 34">
            <rect width="34" height="34" rx="10" fill="#8ED0EE" />
            <path d="M9 12.5l8-4 8 4-8 4z" fill="#1E2530" />
            <path
              d="M12 16.5v4.5c2.8 2.4 7.2 2.4 10 0v-4.5"
              fill="none"
              stroke="#1E2530"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-2xl font-bold">TuitionDesk</span>
        </div>

        <div className="flex max-w-130 flex-col gap-7">
          <h1 className="m-0 text-[32px] leading-[1.15] font-bold text-balance sm:text-[44px]">
            Know who came, who paid and who still owes.
          </h1>
          <ul className="flex flex-col gap-3">
            {features.map((f) => (
              <li key={f.title} className="flex flex-col gap-1 rounded-[14px] bg-white px-[18px] py-4">
                <span className="text-[15px] font-bold">{f.title}</span>
                <span className="text-sm text-[#3B4654]">{f.body}</span>
              </li>
            ))}
          </ul>
        </div>

        <span className="text-[13px] text-[#3A3466]">
          Built for tuition centers and academies in Pakistan.
        </span>
      </section>

      {/* Form panel */}
      <section className="flex flex-[1_1_420px] items-center justify-center px-4 py-14 sm:px-8">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-100 flex-col gap-5 rounded-[20px] bg-white p-6 sm:p-9"
        >
          <div className="flex flex-col gap-1.5">
            <h2 className="m-0 text-[26px] font-bold">Log in</h2>
            <p className="m-0 text-sm text-[#566170]">Little Genius Tuition Center</p>
          </div>

          <label className="flex flex-col gap-1.5 text-[13px] font-semibold">
            Mobile number
            <input
              type="tel"
              name="phone"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="03xx xxxxxxx"
              required
              className={inputClass}
            />
          </label>

          <label className="flex flex-col gap-1.5 text-[13px] font-semibold">
            Password
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Your password"
              required
              className={inputClass}
            />
          </label>

          <label className="flex min-h-11 items-center gap-2.5 text-sm">
            <input
              type="checkbox"
              name="remember"
              defaultChecked
              className="size-5 accent-[#1E2530]"
            />
            Keep me logged in on this device
          </label>

          <button
            type="submit"
            className="flex min-h-13 cursor-pointer items-center justify-center rounded-xl bg-[#1E2530] text-base font-semibold text-white hover:bg-[#2C3542] focus-visible:ring-2 focus-visible:ring-[#8ED0EE] focus-visible:outline-none"
          >
            Log in
          </button>

          <a href="#forgot-password" className={`inline-flex min-h-11 items-center self-center text-sm ${linkClass}`}>
            Forgot password? Get a code on WhatsApp
          </a>

          <p className="m-0 text-center text-sm text-[#566170]">
            New center?{" "}
            <a href="#signup" className={linkClass}>
              Create an account
            </a>
          </p>
        </form>
      </section>
    </div>
  );
}
