import { Link } from "react-router";
import AuthLayout, { authBtn, authInput, authLink } from "../components/AuthLayout";

const label = "flex flex-col gap-1.5 text-[13px] font-semibold";
const hint = "font-medium text-[#566170]";

export default function Signup() {
  return (
    <AuthLayout gap="gap-4">
      <div className="flex flex-col gap-1.5">
        <span className="text-[13px] font-semibold text-[#566170]">Step 1 of 3: your account</span>
        <h1 className="m-0 text-[26px] font-bold">Create your school account</h1>
        <p className="m-0 text-sm leading-normal text-[#566170]">
          For the school owner or principal. Teachers and staff are invited later from inside the app.
        </p>
      </div>

      <label className={label}>Your full name
        <input type="text" autoComplete="name" placeholder="For example: Ahmed Raza" className={authInput} />
      </label>
      <label className={label}>Email
        <input type="email" autoComplete="email" placeholder="you@example.com" className={authInput} />
        <span className={hint}>We send a 6 digit code here to confirm it is yours.</span>
      </label>
      <label className={label}>Mobile number (on WhatsApp)
        <input type="tel" autoComplete="tel" placeholder="03xx xxxxxxx" className={authInput} />
        <span className={hint}>For school updates on WhatsApp. No code is sent to this number.</span>
      </label>
      <label className={label}>Password
        <input type="password" autoComplete="new-password" placeholder="At least 8 characters" className={authInput} />
        <span className={hint}>Use letters and numbers. Avoid your phone number or name.</span>
      </label>

      <label className="flex min-h-11 items-start gap-2.5 text-sm leading-[1.45]">
        <input type="checkbox" className="mt-0.5 size-5 flex-none accent-[#1E2530]" />
        <span>I agree to the <a href="#" className={authLink}>terms of use</a> and <a href="#" className={authLink}>privacy policy</a>.</span>
      </label>

      <button type="submit" className={authBtn}>Create account and send code</button>

      <p className="m-0 text-center text-sm text-[#566170]">
        Already have an account? <Link to="/login" className={authLink}>Log in</Link>
      </p>
    </AuthLayout>
  );
}
