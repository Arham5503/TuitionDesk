import { Link } from "react-router";
import { Page, PageTitle, btnDark, btnOutline, fieldLabel, inputCls } from "../components/ui";

const fieldset = "m-0 flex flex-col gap-4 rounded-2xl border-0 bg-white p-6";
const legend = "float-left p-0 text-[17px] font-bold";
const grid = "grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-4";
const hint = "font-medium text-[#566170]";
const check = "flex min-h-11 items-center gap-3 text-sm font-semibold";

export default function AddStudent() {
  return (
    <Page>
      <PageTitle title="Add a student" sub="One form. The fee and the reminders start from the joining date." />

      <div className="flex flex-wrap items-start gap-4">
        <form className="flex min-w-0 flex-[999_1_520px] flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <fieldset className={fieldset}>
            <legend className={legend}>Student</legend>
            <div className={grid}>
              <label className={fieldLabel}>Student name<input type="text" className={inputCls} defaultValue="Ibrahim Saleem" /></label>
              <label className={fieldLabel}>Class
                <select className={inputCls}><option>Class 3</option><option>KG</option><option>Class 1</option><option>Class 2</option><option>Class 4</option></select>
              </label>
              <label className={fieldLabel}>Joining date<input type="date" className={inputCls} defaultValue="2026-11-16" /></label>
              <label className={fieldLabel}>School name (optional)<input type="text" className={inputCls} placeholder="Where the child studies" /></label>
            </div>
          </fieldset>

          <fieldset className={fieldset}>
            <legend className={legend}>Parent or guardian</legend>
            <div className={grid}>
              <label className={fieldLabel}>Name<input type="text" className={inputCls} defaultValue="Mr. Saleem" /></label>
              <label className={fieldLabel}>Relation
                <select className={inputCls}><option>Father</option><option>Mother</option><option>Guardian</option></select>
              </label>
              <label className={fieldLabel}>WhatsApp number
                <input type="tel" className={inputCls} defaultValue="0300 0000 165" />
                <span className="font-medium text-[#0A5F54]">This number is on WhatsApp. Reminders will go here.</span>
              </label>
              <label className={fieldLabel}>Other phone (optional)<input type="tel" className={inputCls} placeholder="03xx xxxxxxx" /></label>
            </div>
          </fieldset>

          <fieldset className={fieldset}>
            <legend className={legend}>Fee</legend>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-4">
              <label className={fieldLabel}>Monthly fee (Rs)
                <input type="text" inputMode="numeric" className={inputCls} defaultValue="2,000" />
                <span className={hint}>Filled from Class 3. You can change it.</span>
              </label>
              <label className={fieldLabel}>Discount (Rs)
                <input type="text" inputMode="numeric" className={inputCls} defaultValue="0" />
                <span className={hint}>For siblings or special cases.</span>
              </label>
              <label className={fieldLabel}>Due day each month
                <select className={inputCls}><option>5th</option><option>1st</option><option>10th</option></select>
              </label>
            </div>
            <label className={check}><input type="checkbox" className="size-5 accent-[#1E2530]" defaultChecked />Send automatic WhatsApp fee reminders to this parent</label>
            <label className={check}><input type="checkbox" className="size-5 accent-[#1E2530]" defaultChecked />Send a WhatsApp message when the child is absent</label>
            <label className={fieldLabel}>Notes (optional)
              <textarea className={`${inputCls} min-h-21 py-3`} placeholder="Anything the teacher should know" />
            </label>
          </fieldset>

          <div className="flex flex-wrap justify-end gap-2.5">
            <Link to="/students" className={btnOutline}>Cancel</Link>
            <button type="submit" className={btnDark}>Save student</button>
          </div>
        </form>

        <aside className="flex max-w-90 flex-[1_1_280px] flex-col gap-3.5 rounded-2xl bg-[#D9D4FB] p-5.5">
          <h2 className="m-0 text-[17px] font-bold">What happens after you save</h2>
          <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-5 text-sm leading-normal">
            <li>Ibrahim gets ID LG-0065 and appears in the Class 3 attendance list from 16 November.</li>
            <li>November is charged for the remaining half month: Rs 1,000.</li>
            <li>From December, Rs 2,000 is due on the 5th of every month.</li>
            <li>Mr. Saleem gets a welcome message on WhatsApp, then fee reminders only when a fee is unpaid.</li>
          </ol>
        </aside>
      </div>
    </Page>
  );
}
