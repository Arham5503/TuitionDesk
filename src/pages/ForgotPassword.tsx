import { Link } from "react-router";
import AuthLayout, { authBtn, authInput, authLink } from "../components/AuthLayout";

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <Link to="/login" className={`inline-flex min-h-11 items-center self-start text-sm ${authLink}`}>Back to log in</Link>
      <div className="flex flex-col gap-1.5">
        <h1 className="m-0 text-[26px] font-bold">Forgot your password?</h1>
        <p className="m-0 text-sm leading-normal text-[#566170]">
          Enter the mobile number you log in with. We will send a code on WhatsApp so you can set a new password.
        </p>
      </div>
      <label className="flex flex-col gap-1.5 text-[13px] font-semibold">Mobile number
        <input type="tel" inputMode="numeric" autoComplete="tel" placeholder="03xx xxxxxxx" className={authInput} />
      </label>
      <button type="submit" className={authBtn}>Send reset code</button>
      <p className="m-0 text-[13px] leading-[1.45] text-[#566170]">
        Teachers: if this number is not registered, ask the center owner to send you a new invite.
      </p>
    </AuthLayout>
  );
}
