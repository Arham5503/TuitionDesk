import { Link } from "react-router";
import AuthLayout, { CodeInputs, authBtn, authLink } from "../components/AuthLayout";

export default function VerifyEmail() {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-1.5">
        <span className="text-[13px] font-semibold text-[#566170]">Step 2 of 3: verify your email</span>
        <h1 className="m-0 text-[26px] font-bold">Check your email</h1>
        <p className="m-0 text-sm leading-normal text-[#566170]">
          We sent a 6 digit code to <strong className="text-[#1E2530]">you@example.com</strong>.{" "}
          <Link to="/signup" className={authLink}>Change email</Link>
        </p>
      </div>

      <fieldset className="m-0 border-0 p-0">
        <legend className="p-0 pb-2 text-[13px] font-semibold">Code</legend>
        <CodeInputs values={["4", "8", "1", "", "", ""]} focusIndex={3} />
      </fieldset>

      <button type="submit" className={authBtn}>Verify email</button>

      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <span className="text-[#566170]">Send a new code in 0:45</span>
        <button type="button" className={`inline-flex min-h-11 cursor-pointer items-center border-0 bg-transparent p-0 text-sm ${authLink}`}>
          Send a new code
        </button>
      </div>

      <div className="rounded-xl bg-[#FDF0C8] px-3.5 py-3 text-[13px] leading-[1.45] text-[#5C3B00]">
        Not in your inbox? Check the Spam or Promotions folder. The code works for 10 minutes, and after 5 wrong tries you need a new one.
      </div>
    </AuthLayout>
  );
}
