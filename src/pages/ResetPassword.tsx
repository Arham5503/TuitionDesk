import { Link } from "react-router";
import AuthLayout, { CodeInputs, authBtn, authInput, authLink } from "../components/AuthLayout";

const label = "flex flex-col gap-1.5 text-[13px] font-semibold";

export default function ResetPassword() {
  return (
    <AuthLayout gap="gap-4.5">
      <div className="flex flex-col gap-1.5">
        <h1 className="m-0 text-[26px] font-bold">Set a new password</h1>
        <p className="m-0 text-sm leading-normal text-[#566170]">
          Enter the code we sent on WhatsApp to <strong className="text-[#1E2530]">0300 0000 100</strong>, then choose a new password.
        </p>
      </div>

      <fieldset className="m-0 border-0 p-0">
        <legend className="p-0 pb-2 text-[13px] font-semibold">6 digit code</legend>
        <CodeInputs values={["7", "2", "9", "0", "4", "6"]} height="h-14" />
      </fieldset>
      <div className="flex flex-wrap justify-between gap-2 text-sm">
        <span className="text-[#566170]">Send again in 0:32</span>
        <Link to="/forgot-password" className={authLink}>Wrong number?</Link>
      </div>

      <label className={label}>New password
        <input type="password" autoComplete="new-password" placeholder="At least 8 characters" className={authInput} />
      </label>
      <label className={label}>Type it again
        <input type="password" autoComplete="new-password" placeholder="Same password" className={authInput} />
      </label>

      <button type="submit" className={authBtn}>Save new password</button>
      <p className="m-0 text-[13px] leading-[1.45] text-[#566170]">
        After saving, you are logged out on every other device and log in again with the new password.
      </p>
    </AuthLayout>
  );
}
