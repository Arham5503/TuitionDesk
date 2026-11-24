import { Link } from "react-router";
import { Card, Page, Stat, StatGrid, btnOutline, btnYellow, rs, tableHead, tableRow } from "../components/ui";

const tints = ["bg-[#D9D4FB]", "bg-[#C5E9F9]", "bg-[#F9E38A]"];

const data: [string, [string, number, string][], number, number][] = [
  ["KG", [["A", 30, "Miss Hafsa"], ["B", 28, "Miss Rabia"]], 2500, 54],
  ["Class 1", [["A", 31, "Miss Amna"], ["B", 30, "Miss Sana"]], 2500, 57],
  ["Class 2", [["A", 29, "Miss Iqra"], ["B", 28, "Miss Nida"]], 2500, 53],
  ["Class 3", [["A", 28, "Miss Farah"], ["B", 26, "Miss Hina"]], 3000, 50],
  ["Class 4", [["A", 36, "Miss Zara"]], 3000, 34],
  ["Class 5", [["A", 32, "Miss Sadia"], ["B", 30, "Miss Mahnoor"]], 3000, 58],
  ["Class 6", [["A", 38, "Sir Kashif"]], 3500, 35],
  ["Class 7", [["A", 34, "Sir Bilal"]], 3500, 31],
  ["Class 8", [["A", 31, "Sir Imran"]], 3500, 29],
];

const cols = "grid grid-cols-[0.8fr_3.2fr_0.8fr_1fr_1fr_1.4fr] items-center gap-3 px-4";
const link = "inline-flex min-h-11 items-center text-[13px] font-semibold text-[#0B5F85] hover:text-[#08445F]";

export default function Classes() {
  return (
    <Page>
      <StatGrid>
        <Stat c="purple" label="Session" value="2026-27" note="April 2026 to March 2027" />
        <Stat c="blue" label="Classes and sections" value="9 and 14" note="KG to Class 8" />
        <Stat c="yellow" label="Students enrolled" value="431" note="401 present today, 93%" />
      </StatGrid>

      <Card className="gap-4.5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="m-0 text-[22px] font-bold">Classes and sections</h1>
          <div className="flex flex-wrap items-center gap-2.5">
            <Link to="/classes/promote" className={btnOutline}>Promote to next session</Link>
            <button type="button" className={btnOutline}>Add section</button>
            <button type="button" className={btnYellow}>Add class</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="flex min-w-225 flex-col">
            <div className={`${cols} ${tableHead} py-3.5`}>
              <span>Class</span><span>Sections, students and class teacher</span><span>Students</span><span>Tuition fee</span><span>Present today</span><span>Open</span>
            </div>
            {data.map(([name, sections, fee, present], i) => {
              const total = sections.reduce((a, s) => a + s[1], 0);
              return (
                <div key={name} className={`${cols} ${tableRow} py-2.75`}>
                  <span className="font-bold">{name}</span>
                  <div className="flex flex-wrap gap-2">
                    {sections.map(([id, n, teacher]) => (
                      <span key={id} className="inline-flex items-center gap-2 rounded-[10px] bg-[#F4F6FA] px-3 py-1.5 text-[13px]">
                        <strong className={`inline-flex size-6 items-center justify-center rounded-[7px] text-xs ${tints[Math.floor(i / 3)]}`}>{id}</strong>
                        <span>{n} students</span>
                        <span className="text-[#566170]">{teacher}</span>
                      </span>
                    ))}
                  </div>
                  <span>{total}</span>
                  <span>{rs(fee)}</span>
                  <span>{present} / {total}</span>
                  <div className="flex gap-3.5">
                    <Link to="/students" className={link}>Students</Link>
                    <Link to="/timetable" className={link}>Timetable</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="m-0 text-[13px] text-[#566170]">
          A tuition center or academy can leave every class with one section. Sections only appear in lists and filters once a class has two or more.
        </p>
      </Card>
    </Page>
  );
}
